import { gameState, STANCES, getStanceDefinition, type StanceId } from "../core/state";
import type { EnemySlot } from "../core/state";
import { formatTurn } from "../core/formatters";
import {
  playerCombatAction,
  setPlayerStance,
  CALLED_SHOT_TIP,
  BRACE_TIP,
  DAMAGE_TYPE_GUIDE,
  getCombatAdvice,
  getActiveModuleAbilities,
  activateModuleAbility
} from "../systems/combatSystem";
import { getWeaponById } from "../systems/weaponSystem";

const STANCE_ICON_MAP: Record<StanceId, string> = {
  balanced: "bi bi-record-circle",
  brace: "bi bi-shield-lock",
  evasive: "bi bi-speedometer2",
  overcharge: "bi bi-lightning"
};

const STANCE_ORDER: StanceId[] = ["balanced", "brace", "evasive", "overcharge"];

const ROLE_LABELS: Record<Exclude<EnemySlot["role"], undefined>, string> = {
  frontline: "Frontline",
  backline: "Backline",
  support: "Support"
};

function getRoleChip(role?: EnemySlot["role"]): string {
  if (!role) return "";
  const label = ROLE_LABELS[role];
  if (!label) return "";
  return `<span class="enemy-role-chip">${label}</span>`;
}

function getFactionChip(label?: string): string {
  if (!label) return "";
  return `<span class="enemy-faction-chip">${label.toUpperCase()}</span>`;
}

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fireWeapon: (slotIndex: number, aimMode?: "normal" | "called_shot") => void;
    brace: () => void;
    flee: () => void;
    setStance: (stance: StanceId) => void;
    cycleStance: (direction: -1 | 1) => void;
    fireAllWeapons: (aimMode?: "normal" | "called_shot") => void;
    selectEnemySlot: (slotId: string) => void;
    activateModuleAbility: (componentId: string) => void;
    useComboFinish: () => void;
  }
}

window.fireWeapon = (slotIndex: number, aimMode: "normal" | "called_shot" = "normal") => {
  playerCombatAction("fire", slotIndex, aimMode);
  if (gameState.combat) {
    nav("combat");
  }
};

window.brace = () => {
  playerCombatAction("brace");
  if (gameState.combat) {
    nav("combat");
  }
};

window.flee = () => {
  playerCombatAction("flee");
  if (gameState.combat) {
    nav("combat");
  }
};

window.setStance = (stance: StanceId) => {
  setPlayerStance(stance);
  if (gameState.combat) {
    nav("combat");
  }
};

window.cycleStance = (direction: -1 | 1) => {
  const combat = gameState.combat;
  const currentStance = combat?.playerStance ?? "balanced";
  const currentIndex = STANCE_ORDER.indexOf(currentStance);
  const nextIndex = (currentIndex + direction + STANCE_ORDER.length) % STANCE_ORDER.length;
  const nextStance = STANCE_ORDER[nextIndex];
  setPlayerStance(nextStance);
  if (gameState.combat) {
    nav("combat");
  }
};

window.fireAllWeapons = (aimMode: "normal" | "called_shot" = "normal") => {
  playerCombatAction("fire_all", undefined, aimMode);
  if (gameState.combat) {
    nav("combat");
  }
};

window.activateModuleAbility = (componentId: string) => {
  activateModuleAbility(componentId);
  if (gameState.combat) {
    nav("combat");
  }
};

window.useComboFinish = () => {
  playerCombatAction("combo_finish");
  if (gameState.combat) {
    nav("combat");
  }
};

window.selectEnemySlot = (slotId: string) => {
  const combat = gameState.combat;
  if (!combat) return;
  combat.selectedEnemyId = slotId;
  nav("combat");
};

function zoneHasCover(lane: number, slot?: EnemySlot, front?: EnemySlot): boolean {
  if (!slot || slot.position.row !== "back" || !front || !front.alive) return false;
  return true;
}

function renderEnemySlotButton(
  lane: number,
  row: "front" | "back",
  slot?: EnemySlot,
  isSelected = false,
  isBlocked = false
): string {
  const rowLabel = row === "front" ? "Front" : "Back";
  const laneLabel = lane + 1;

  if (!slot) {
    return `
      <div class="enemy-slot enemy-slot--empty row-${row}">
        <span class="enemy-slot-meta">Lane ${laneLabel} · ${rowLabel}</span>
        <span class="muted">Empty</span>
      </div>
    `;
  }

  const statusBadges = slot.statusEffects
    .map((status) => `<span class="status-pill">${status.type}</span>`)
    .join("");
  const meta = `Lane ${laneLabel} · ${rowLabel}`;
  const roleChip = getRoleChip(slot.role);
  const factionChip = getFactionChip(slot.factionLabel ?? slot.factionId);
  return `
    <button
      type="button"
      class="enemy-slot ${isSelected ? "is-selected" : ""} row-${slot.position.row}"
      onclick="selectEnemySlot('${slot.id}')"
    >
      <span class="enemy-slot-name">${slot.name}</span>
      <div class="enemy-slot-meta-row">
        <span class="enemy-slot-meta">${meta}</span>
        <span class="enemy-chip-group">
          ${roleChip}
          ${factionChip}
        </span>
      </div>
      <span class="enemy-slot-hp">Hull ${slot.hp}/${slot.maxHp}</span>
      <span class="enemy-slot-shield">Shield ${slot.shields}/${slot.maxShields}</span>
      <div class="enemy-slot-statuses">${statusBadges || `<span class="muted">No status</span>`}</div>
      ${isBlocked ? `<span class="cover-badge">Covered</span>` : ""}
    </button>
  `;
}

export function CombatScreen(): string {
  const c = gameState.combat;

  if (!c) {
    return `
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;
  }

  const ship = gameState.ship;
  const logHtml = c.log.map((line) => `<div class="log-line">${line}</div>`).join("");
  const lowHull = ship.hp / Math.max(1, ship.maxHp) <= 0.35;
  const lastLog = (c.log[c.log.length - 1] || "").toLowerCase();
  const wasHit = lastLog.includes("hits you") || lastLog.includes("damage");
  const rawLastAction = c.log[c.log.length - 1] || "Awaiting orders.";
  const lastAction = escapeHtml(rawLastAction);
  const rootClasses = ["app-root", "combat-root"];
  if (lowHull) rootClasses.push("low-hull");
  if (wasHit) rootClasses.push("hit-flash");

  const targetSlot =
    c.encounter.enemies.find((slot) => slot.id === c.selectedEnemyId) ??
    c.encounter.enemies.find((slot) => slot.position.row === "front") ??
    c.encounter.enemies[0];
  const enemyCount = c.encounter.enemies.length;
  const lanes = [0, 1, 2];
  const formationGrid =
    enemyCount > 0
      ? `
        <div class="enemy-formation-grid">
          ${lanes
            .map((lane) => {
              const frontSlot = c.encounter.enemies.find(
                (slot) => slot.position.lane === lane && slot.position.row === "front"
              );
              const backSlot = c.encounter.enemies.find(
                (slot) => slot.position.lane === lane && slot.position.row === "back"
              );
              const laneSelected = targetSlot?.position.lane === lane;
              return `
                <div class="enemy-lane lane-${lane} ${laneSelected ? "is-active-lane" : ""}">
                  <div class="lane-header">
                    <span class="lane-label">Lane ${lane + 1}</span>
                    <span class="lane-subtitle">${frontSlot || backSlot ? "Engaged" : "Empty"}</span>
                  </div>
                  <div class="lane-slot-row lane-front">
                    ${renderEnemySlotButton(
                      lane,
                      "front",
                      frontSlot,
                      targetSlot?.id === frontSlot?.id
                    )}
                  </div>
                  <div class="lane-slot-row lane-back">
                    ${renderEnemySlotButton(
                      lane,
                      "back",
                      backSlot,
                      targetSlot?.id === backSlot?.id,
                      zoneHasCover(lane, backSlot, frontSlot)
                    )}
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      `
      : '<div class="enemy-slot muted-chip">No enemies in formation.</div>';

  const weaponTypeIcon: Record<WeaponType, string> = {
    energy: "bi-lightning-fill",
    projectile: "bi-cpu-fill",
    missile: "bi-rocket-takeoff-fill",
    hybrid: "bi-shuffle"
  };

  const weaponSlotsHtml = ship.hardpoints
    .map((hp, idx) => {
      const weaponId = ship.weapons[idx];
      const weapon = getWeaponById(weaponId);
      const label = weapon?.name ?? `Slot ${idx + 1}`;
      const icon = weapon ? weaponTypeIcon[weapon.type] ?? "bi-crosshair" : "bi-crosshair";
      return `
        <button class="weapon-chip" onclick="fireWeapon(${idx}, 'normal')" title="${label}">
          <i class="bi ${icon}"></i>
        </button>
      `;
    })
    .join("");

  const damageTypeRows = DAMAGE_TYPE_GUIDE.map(
    (entry) => `
        <tr>
          <td>${entry.type}</td>
          <td>${entry.shieldMultiplier.toFixed(2)}x</td>
          <td>${entry.hullMultiplier.toFixed(2)}x</td>
          <td>${entry.description}</td>
        </tr>
      `
  ).join("");

  const stanceDef = getStanceDefinition(c.playerStance);
  const stanceIconClass = STANCE_ICON_MAP[c.playerStance] ?? "bi bi-flag";
  const comboMeterState = c.comboMeter;
  const comboCharge = comboMeterState?.charge ?? 0;
  const comboMax = 100;
  const comboPercent = Math.min(100, Math.round((comboCharge / comboMax) * 100));
  const comboReady = comboMeterState?.ready;
  const comboActionHtml = comboReady
    ? `<button class="btn btn-primary combo-button" onclick="useComboFinish()">Activate ${comboReady.label}</button>`
    : `<small class="combo-meter-subtle">Mix attacks, movement, and dodges to unlock finishers.</small>`;
  const shipStatsGrid = `
    <div class="ship-stats-grid">
      <div class="ship-stat">
        <i class="bi bi-heart-pulse"></i>
        <div>
          <span>Hull</span>
          <strong>${ship.hp}/${ship.maxHp}</strong>
        </div>
      </div>
      <div class="ship-stat">
        <i class="bi bi-shield-shaded"></i>
        <div>
          <span>Shields</span>
          <strong>${ship.shields}/${ship.maxShields}</strong>
        </div>
      </div>
      <div class="ship-stat">
        <i class="bi bi-fuel-pump"></i>
        <div>
          <span>Fuel</span>
          <strong>${ship.fuel}/${ship.maxFuel}</strong>
        </div>
      </div>
    </div>
  `;
  const shipStanceBadge = `
    <div class="ship-stance-badge" title="${escapeHtml(stanceDef.description)}">
      <i class="${stanceIconClass}"></i>
      <span>${stanceDef.label}</span>
    </div>
  `;
  const stanceModifierRows = Object.entries(stanceDef.damageTakenMultipliers || {}).map(
    ([type, value]) => {
      const ratio = value ?? 1;
      const label = ratio >= 1 ? "debuff" : "buff";
      return `<span class="stance-modifier ${label}">${type}: ${ratio.toFixed(2)}x</span>`;
    }
  );
  const stanceModifiersHtml =
    stanceModifierRows.length > 0
      ? stanceModifierRows.join("")
      : `<span class="muted">No stance-specific multipliers.</span>`;

  const advice = getCombatAdvice();
  const adviceHtml = advice
    ? `<p class="combat-advice ${advice.suggestion}">
        ${advice.text}
        <span class="advice-confidence">Intel confidence: ${(advice.confidence * 100).toFixed(0)}%</span>
      </p>`
    : `<p class="combat-advice">No immediate cues.</p>`;

  const calledShotReady = targetSlot?.shields <= 0;
  const calledShotHint = targetSlot
    ? calledShotReady
      ? `${targetSlot.name}'s shields are down—called shots will score more consistently. Aim for the hull!`
      : "Called shots trade accuracy; wait until shields drop for the best payout."
    : "No active targets to shoot at.";

  const moduleAbilities = getActiveModuleAbilities();
  const moduleActionsHtml = moduleAbilities
    .map(({ componentId, componentName, ability, ready }) => {
      const icon = ability.type === "pull" ? "bi-box-arrow-in-left" : "bi-box-arrow-up-right";
      return `
        <button
          class="action-chip module-chip ${ready ? "" : "is-disabled"}"
          ${ready ? "" : "disabled"}
          title="${escapeHtml(componentName)}"
          onclick="activateModuleAbility('${componentId}')"
        >
          <i class="bi ${icon}"></i>
          <span>${escapeHtml(componentName)}</span>
        </button>
      `;
    })
    .join("");

  const primaryActions = [
    {
      icon: "bi-bolt-fill",
      label: "Fire",
      action: "fireAllWeapons('normal')",
      title: "Fire all ready weapons"
    },
    {
      icon: "bi-asterisk",
      label: "Called",
      action: "fireAllWeapons('called_shot')",
      title: "Called shots"
    },
    {
      icon: "bi-shield-fill",
      label: "Brace",
      action: "brace()",
      title: "Brace for impact"
    },
    {
      icon: "bi-flag-fill",
      label: "Flee",
      action: "flee()",
      title: "Attempt to flee"
    }
  ];

  const controlButtonsHtml = primaryActions
    .map(
      ({ icon, label, action, title }) => `
        <button class="action-chip" title="${title}" onclick="${action}">
          <i class="bi ${icon}"></i>
          <span>${label}</span>
        </button>
      `
    )
    .join("");

  const comboActionButton = `
    <button
      class="action-chip combo-chip ${comboReady ? "" : "is-disabled"}"
      ${comboReady ? "" : "disabled"}
      title="Combo finisher"
      onclick="${comboReady ? "useComboFinish()" : "void(0)" }"
    >
      <i class="bi bi-lightning-fill"></i>
      <span>${comboReady ? comboReady.label : "Combo"}</span>
    </button>
  `;

  const playerChips = buildPlayerChips(c);
  const enemyChips = buildEnemyChips(c, targetSlot);

  const controlWindow = `
    <section class="cc-section control-shell">
      <div class="control-header">
        <span class="control-label">Target</span>
        <strong class="control-target">${targetSlot?.name ?? "No target"}</strong>
        <span class="control-sub">${targetSlot?.position.row === "back" ? "Backline" : "Frontline"}</span>
      </div>
      <div class="status-row">
        <div class="stat-chip">
          <i class="bi bi-heart-fill"></i>
          <span>${ship.hp}/${ship.maxHp}</span>
        </div>
        <div class="stat-chip">
          <i class="bi bi-shield-fill"></i>
          <span>${ship.shields}/${ship.maxShields}</span>
        </div>
        <div class="stat-chip">
          <i class="bi bi-fuel-pump"></i>
          <span>${ship.fuel}/${ship.maxFuel}</span>
        </div>
      </div>
      <div class="stance-row">
        <button class="stance-nav" onclick="cycleStance(-1)">
          <i class="bi bi-chevron-left"></i>
        </button>
        <span class="stance-label">${stanceDef.label}</span>
        <button class="stance-nav" onclick="cycleStance(1)">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      <div class="combo-control-meter">
        <div class="combo-meter combo-inner-meter">
          <div class="combo-meter-bar">
            <div class="combo-meter-bar-fill" style="width: ${comboPercent}%"></div>
          </div>
          <div class="combo-meter-meta">
            <span>Combo ${comboCharge}/${comboMax}</span>
            <span class="combo-meter-ready">
              ${comboReady ? `${comboReady.label} ready` : "fill meter"}
            </span>
          </div>
        </div>
      </div>
      <div class="action-grid">
        ${controlButtonsHtml}
        ${comboActionButton}
        ${moduleActionsHtml}
      </div>
      <div class="weapon-chip-row">
        ${weaponSlotsHtml}
      </div>
    </section>
  `;

  const hudHtml = `
    <div class="combat-hud combo-hud">
      <div class="combo-meta">
        <span>${c.encounter.name}</span>
        <span>Enemies ${enemyCount}</span>
        <span>Round ${c.round}</span>
      </div>
    </div>
  `;


  const commandConsole = `
    <div class="command-console">
      ${controlWindow}
      <section class="cc-section stance-section">
        <div class="stance-section-header">
          <p class="label small">Active Stance Modifiers</p>
        </div>
        <div class="stance-mod-row">
          ${stanceModifiersHtml}
        </div>
      </section>
    </div>
  `;

  return `
    <div class="${rootClasses.join(" ")}">
      <div class="combat-container">
        ${hudHtml}
        <div class="combat-main">
          <section class="enemy-formation-panel">
            <div class="enemy-formation-header">
              <p class="label">Enemy Formation</p>
              <span>${enemyCount} targets remaining</span>
            </div>
            <div class="enemy-formation">${formationGrid}</div>
            <div class="status-chips">${enemyChips || `<span class="muted">No debuffs</span>`}</div>
          </section>
          <section class="command-panel">
            ${commandConsole}
          </section>
        </div>
        <section class="combat-log">
          <h2 class="panel-title small">Combat Log</h2>
          <div class="app-log">
            ${logHtml}
          </div>
        </section>
      </div>
    </div>
  `;
}

function buildPlayerChips(combat: NonNullable<typeof gameState.combat>): string {
  const chips: string[] = [];
  const stanceLabel = getStanceDefinition(combat.playerStance).label;
  chips.push(`<span class="buff-chip buff">Stance: ${stanceLabel}</span>`);
  if (combat.playerBracing) {
    chips.push('<span class="buff-chip buff">Bracing</span>');
  }
  if (combat.playerStatus.shieldBoost > 0) {
    chips.push(
      `<span class="buff-chip buff">Shield +${combat.playerStatus.shieldBoost} (${combat.playerStatus.shieldTurns}t)</span>`
    );
  }
  if (combat.playerStatus.maneuverBonus > 0) {
    chips.push(
      `<span class="buff-chip buff">Evasion +${combat.playerStatus.maneuverBonus} (${combat.playerStatus.maneuverTurns}t)</span>`
    );
  }
  if (!combat.canEscape) {
    chips.push('<span class="buff-chip debuff">Escape blocked</span>');
  }
  return chips.join("");
}

function buildEnemyChips(
  combat: NonNullable<typeof gameState.combat>,
  targetSlot?: EnemySlot
): string {
  const chips: string[] = [];
  if (combat.enemyStatus.weaponJammedTurns > 0) {
    chips.push(`<span class="buff-chip debuff">Weapons jammed (${combat.enemyStatus.weaponJammedTurns}t)</span>`);
  }
  if (targetSlot?.shields <= 0) {
    chips.push('<span class="buff-chip debuff">Shields down</span>');
  }
  if (targetSlot?.statusEffects.length) {
    targetSlot.statusEffects.forEach((status) => {
      chips.push(
        `<span class="buff-chip debuff">${status.type} (${status.duration}t)</span>`
      );
    });
  }
  chips.push(`<span class="buff-chip muted-chip">${combat.encounter.enemies.length} adversaries remain</span>`);
  return chips.join("");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
