import { gameState } from "../core/state";
import type { EnemySlot } from "../core/state";
import {
  activateModuleAbility,
  getActiveModuleAbilities,
  playerCombatAction,
  type PlayerActionId
} from "../systems/combatSystem";

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fireWeapon: (slotIndex: number, aimMode?: "normal" | "called_shot") => void;
    brace: () => void;
    flee: () => void;
    fireAllWeapons: (aimMode?: "normal" | "called_shot") => void;
    selectEnemySlot: (slotId: string) => void;
    activateModuleAbility: (componentId: string) => void;
    useComboFinish: () => void;
    useSpecialAction: (actionId: string) => void;
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

window.useSpecialAction = (actionId: string) => {
  playerCombatAction(actionId as PlayerActionId);
  if (gameState.combat) {
    nav("combat");
  }
};

function describeIntent(slot?: EnemySlot): string {
  if (!slot?.nextIntent?.type) {
    return "⚠ Unknown";
  }
  const label = slot.nextIntent.type
    .replace(/_/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
  return `⚡ ${label}`;
}

const INTENT_ICON_MAP: Record<string, string> = {
  heavy_attack: "⚔",
  shield_boost: "🛡",
  flank_shot: "🚀",
  debuff: "❓",
  retreat: "❓",
  charge_weapon: "⚔"
};

const STATUS_ICON_MAP: Record<string, { icon: string; label: string }> = {
  breach: { icon: "🛠", label: "Breach" },
  jammed: { icon: "⚡", label: "Jammed" },
  burn: { icon: "🔥", label: "Burn" },
  immobilized: { icon: "⛓", label: "Immobilized" }
};

function getIntentIcon(slot?: EnemySlot): string {
  if (!slot?.nextIntent?.type) {
    return "❓";
  }
  return INTENT_ICON_MAP[slot.nextIntent.type] ?? "❓";
}

function renderStatusIcons(slot: EnemySlot): string {
  if (!slot.statusEffects || slot.statusEffects.length === 0) {
    return `<span class="muted">—</span>`;
  }
  return slot.statusEffects
    .map((status) => {
      const mapping = STATUS_ICON_MAP[status.type];
      const label = mapping?.label ?? status.type;
      const icon = mapping?.icon ?? "❔";
      return `<span class="enemy-status-icon" title="${escapeHtml(label)}" style="margin-right:4px;">${icon}</span>`;
    })
    .join("");
}

function getBlockStateLabel(state?: string): string {
  if (state === "blocking") return "BLOCKING";
  if (state === "blocked") return "BLOCKED";
  if (state === "exposed" || state === "alone") return "EXPOSED";
  return "—";
}

function renderBarRow(label: string, value: number, max: number, fillClass: string): string {
  const safeMax = Math.max(1, max);
  const safeValue = Math.max(0, value);
  const percent = max > 0 ? Math.min(100, Math.round((safeValue / safeMax) * 100)) : 0;
  const valueLabel = max > 0 ? `${safeValue}/${max}` : `${safeValue}`;
  return `
    <div class="stat-row enemy-card-bar">
      <span class="stat-label">${label}</span>
      <div class="stat-meter">
        <div class="stat-meter-fill ${fillClass}" style="width:${percent}%;"></div>
      </div>
      <span class="stat-value">${valueLabel}</span>
    </div>
  `;
}

function renderEmptySlot(positionLabel: "Front" | "Back"): string {
  return `
    <div class="enemy-slot enemy-slot--empty">
      <span class="enemy-slot-name">Empty ${positionLabel}</span>
      <span class="enemy-slot-meta muted">Awaiting reinforcements</span>
    </div>
  `;
}

function renderEnemyCard(
  lane: number,
  slot: EnemySlot,
  selectedEnemyId?: string
): string {
  const isSelected = slot.id === selectedEnemyId;
  const selectionAttrs = `onclick="selectEnemySlot('${slot.id}')" role="button" tabindex="0"`;
  const blockLabel = getBlockStateLabel(slot.blockState);
  const hullRow = renderBarRow("HULL", slot.hp, slot.maxHp, "");
  const shieldRow = renderBarRow("SHLD", slot.shields, slot.maxShields, "stat-meter-fill--shield");
  const shipIconMarkup = `<i class="bi bi-ship" title="Enemy vessel"></i>`;
  const positionBadge =
    slot.position.row === "front"
      ? `<span class="cover-badge" title="Frontline"><i class="bi bi-arrow-up-circle-fill"></i></span>`
      : `<span class="cover-badge" title="Backline"><i class="bi bi-arrow-down-circle-fill"></i></span>`;
  const blockIconMap: Record<string, { icon: string; label: string }> = {
    blocking: { icon: "bi-shield-fill-check", label: "Blocking" },
    blocked: { icon: "bi-shield-lock-fill", label: "Blocked" },
    exposed: { icon: "bi-exclamation-triangle-fill", label: "Exposed" },
    alone: { icon: "bi-person-fill", label: "Isolated" },
    none: { icon: "bi-shield-fill", label: "Neutral" }
  };
  const blockMeta = blockIconMap[slot.blockState ?? ""] ?? {
    icon: "bi-shield-fill",
    label: blockLabel
  };
  const blockBadge = `<span class="cover-badge" title="${escapeHtml(blockMeta.label)}"><i class="bi ${blockMeta.icon}"></i></span>`;
  return `
    <article class="enemy-slot ${isSelected ? "is-selected" : ""}" ${selectionAttrs}>
      <div class="enemy-card-header" style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
        <span class="enemy-slot-icon">${shipIconMarkup}</span>
        <div>
          <span class="enemy-slot-name" style="font-variant:small-caps;">${escapeHtml(slot.name)}</span>
          <div class="enemy-card-badges" style="display:flex;gap:4px;margin-top:2px;">
            ${positionBadge}
            ${blockBadge}
          </div>
        </div>
      </div>
      <div class="enemy-card-bars" style="display:flex;flex-direction:column;gap:4px;">
        ${hullRow}
        ${shieldRow}
      </div>
      <div
        class="enemy-card-footer"
        style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:6px;"
      >
        <span class="enemy-intent-icon" title="${describeIntent(slot)}">${getIntentIcon(slot)}</span>
        <span class="enemy-card-status">${renderStatusIcons(slot)}</span>
      </div>
    </article>
  `;
}

function renderLaneStack(
  lane: number,
  front?: EnemySlot,
  back?: EnemySlot,
  selectedEnemyId?: string | null
): string {
  const laneLabel = `Lane ${lane + 1}`;
  const frontCard = front ? renderEnemyCard(lane, front, selectedEnemyId ?? undefined) : renderEmptySlot("Front");
  const backCard = back ? renderEnemyCard(lane, back, selectedEnemyId ?? undefined) : renderEmptySlot("Back");
  return `
    <div class="enemy-lane" style="display:flex;flex-direction:column;gap:6px;">
      <div class="lane-header">
        <span>${laneLabel}</span>
        <span class="lane-count">${front || back ? "Targets present" : "Empty lane"}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${frontCard}
        ${backCard}
      </div>
    </div>
  `;
}

type CombatActionEntry = {
  label: string;
  action: string;
  description: string;
  specialActionId?: PlayerActionId;
};

function getPlayerActionCooldown(
  combat: NonNullable<typeof gameState.combat>,
  actionId: PlayerActionId
): number {
  return (
    combat.playerActionCooldowns?.find((entry) => entry.actionId === actionId)
      ?.remainingRounds ?? 0
  );
}

function renderCombatActionButton(
  entry: CombatActionEntry,
  combat: NonNullable<typeof gameState.combat>
): string {
  const cooldown =
    entry.specialActionId !== undefined
      ? getPlayerActionCooldown(combat, entry.specialActionId)
      : 0;
  const ready = cooldown === 0;
  const cooldownBadge = !ready
    ? `<span class="action-cooldown">CD ${cooldown}</span>`
    : "";
  return `
    <button
      type="button"
      class="combat-action-btn ${ready ? "" : "is-disabled"}"
      title="${escapeHtml(entry.description)}"
      onclick="${entry.action}"
      ${ready ? "" : "disabled"}
    >
      <span>${entry.label}</span>
      ${cooldownBadge}
    </button>
  `;
}

function renderActionColumn(
  title: string,
  actions: CombatActionEntry[],
  combat: NonNullable<typeof gameState.combat>
): string {
  const buttons = actions
    .map((entry) => renderCombatActionButton(entry, combat))
    .join("");
  return `
    <div class="action-column">
      <div class="action-column-title">${title}</div>
      <div class="action-column-body">
        ${buttons}
      </div>
    </div>
  `;
}

function moduleIconForAbility(abilityType: string): string {
  switch (abilityType) {
    case "pull":
      return "bi bi-box-arrow-in-left";
    case "push":
      return "bi bi-box-arrow-up-right";
    case "shield":
      return "bi bi-shield-fill";
    case "channel":
      return "bi bi-lightning-charge-fill";
    default:
      return "bi bi-gear-fill";
  }
}

function renderStatRow(label: string, valueLabel: string, percent: number): string {
  const safePercent = Math.min(100, Math.max(0, percent));
  return `
    <div class="stat-row">
      <span class="stat-label">${label}</span>
      <div class="stat-meter">
        <div class="stat-meter-fill" style="width: ${safePercent}%;"></div>
      </div>
      <span class="stat-value">${valueLabel}</span>
    </div>
  `;
}

function buildPlayerChips(combat: NonNullable<typeof gameState.combat>): string {
  const chips: string[] = [];
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
  const logHtml = c.log.map((line) => `<div class="log-line">${escapeHtml(line)}</div>`).join("");
  const lowHull = ship.hp / Math.max(1, ship.maxHp) <= 0.35;
  const lastLog = (c.log[c.log.length - 1] || "").toLowerCase();
  const wasHit = lastLog.includes("hits you") || lastLog.includes("damage");
  const rootClasses = ["app-root", "combat-root"];
  if (lowHull) rootClasses.push("low-hull");
  if (wasHit) rootClasses.push("hit-flash");

  const aliveTargets = c.encounter.enemies.filter((enemy) => enemy.alive);
  const enemyCount = aliveTargets.length;
  const lanes = [0, 1, 2];
  const selectedEnemyId = c.selectedEnemyId;
  const formationHtml = lanes
    .map((lane) => {
      const frontSlot = c.encounter.enemies.find(
        (slot) => slot.position.lane === lane && slot.position.row === "front" && slot.alive
      );
      const backSlot = c.encounter.enemies.find(
        (slot) => slot.position.lane === lane && slot.position.row === "back" && slot.alive
      );
      return renderLaneStack(lane, frontSlot, backSlot, selectedEnemyId);
    })
    .join("");

  const hullPercent = Math.round((ship.hp / Math.max(1, ship.maxHp)) * 100);
  const shieldPercent = ship.maxShields
    ? Math.round((ship.shields / ship.maxShields) * 100)
    : 0;
  const evasionValue = ship.evasion ?? 0;
  const evasionCap = Math.max(1, ship.maneuverRating ?? evasionValue, evasionValue);
  const evasionPercent = Math.round((evasionValue / evasionCap) * 100);

  const playerStatuses = buildPlayerChips(c);
  const statusLine =
    playerStatuses || '<span class="muted">No active modifiers.</span>';

  const comboMeterState = c.comboMeter;
  const comboCharge = comboMeterState?.charge ?? 0;
  const comboMax = 100;
  const comboPercent = Math.min(100, Math.round((comboCharge / comboMax) * 100));
  const comboReadyLabel = comboMeterState?.ready?.label;
  const comboReadyText = comboReadyLabel
    ? `${comboReadyLabel} ready`
    : "fill meter";
  const comboReady = Boolean(comboMeterState?.ready);
  const comboMeterClasses = ["combo-meter"];
  if (comboReady) {
    comboMeterClasses.push("combo-meter--ready");
  }
  const comboAriaLabel = comboReady ? comboReadyText : "Combo meter charging";
  const comboMeterAttributes = comboReady
    ? `type="button" onclick="useComboFinish()" aria-label="${escapeHtml(comboAriaLabel)}"`
    : `type="button" disabled aria-label="${escapeHtml(comboAriaLabel)}"`;

  const moduleAbilities = getActiveModuleAbilities();
  const moduleIcons = moduleAbilities.length
    ? moduleAbilities
        .map(({ componentId, componentName, ability, ready }) => {
          const iconClass = moduleIconForAbility(ability.type ?? "");
          return `
            <button
              class="module-icon ${ready ? "" : "is-disabled"}"
              title="${escapeHtml(componentName)}"
              onclick="activateModuleAbility('${componentId}')"
              ${ready ? "" : "disabled"}
            >
              <i class="${iconClass}"></i>
            </button>
          `;
        })
        .join("")
    : `<span class="muted">No active modules.</span>`;

  const offenseActions = renderActionColumn(
    "OFFENSE",
    [
      {
        label: "Adaptive Strike",
        action: "useSpecialAction('adaptive_strike')",
        description: "Deliver a steady volley across the battleline.",
        specialActionId: "adaptive_strike"
      },
      {
        label: "Shield Focus",
        action: "useSpecialAction('shield_focus')",
        description: "Hammer the shields before letting hulls bleed.",
        specialActionId: "shield_focus"
      },
      {
        label: "Hull Focus",
        action: "useSpecialAction('hull_focus')",
        description: "Zero in on weakened hulls with precision.",
        specialActionId: "hull_focus"
      }
    ],
    c
  );

  const defenseActions = renderActionColumn(
    "DEFENSE",
    [
      {
        label: "Brace for Impact",
        action: "brace()",
        description: "Tighten hull armor against incoming fire"
      },
      {
        label: "Overcharge Shields",
        action: "useSpecialAction('overcharge_shields')",
        description: "Redirect power into shields at the cost of maneuver",
        specialActionId: "overcharge_shields"
      },
      {
        label: "Flee / Attempt Disengage",
        action: "flee()",
        description: "Try to escape the engagement"
      }
    ],
    c
  );

  const maneuverActions = renderActionColumn(
    "MANEUVER / TACTICS",
    [
      {
        label: "Boost Engines",
        action: "useSpecialAction('boost_engines')",
        description: "Gain temporary agility",
        specialActionId: "boost_engines"
      },
      {
        label: "Focus Fire",
        action: "useSpecialAction('focus_fire')",
        description: "Concentrate fire on one enemy",
        specialActionId: "focus_fire"
      },
      {
        label: "EMP Blast",
        action: "useSpecialAction('emp_blast')",
        description: "Jam enemy batteries",
        specialActionId: "emp_blast"
      },
      {
        label: "Signal Jam",
        action: "useSpecialAction('jam_enemy')",
        description: "Disrupt enemy communications",
        specialActionId: "jam_enemy"
      }
    ],
    c
  );

  const moduleColumn = `
    <div class="action-column">
      <div class="action-column-title">MODULE SYSTEMS</div>
      <div class="module-icon-row">
        ${moduleIcons}
      </div>
      <p class="module-hint">(Tap an icon for ability)</p>
    </div>
  `;

  const actionSection = `
    <div class="action-grid">
      ${offenseActions}
      ${defenseActions}
    </div>
    <div class="action-grid">
      ${maneuverActions}
      ${moduleColumn}
    </div>
    <p class="action-note">Tap any action → modal opens with full description.</p>
  `;

  const playerHeader = `${escapeHtml(ship.name ?? "Starship")}-Class Frigate`;

  const hullStat = renderStatRow("HULL", `${ship.hp}/${ship.maxHp}`, hullPercent);
  const shieldStat = renderStatRow("SHIELD", `${ship.shields}/${ship.maxShields}`, shieldPercent);
  const evasionStat = renderStatRow(
    "EVASION",
    `${evasionValue}/${evasionCap}`,
    evasionPercent
  );

  return `
    <div class="${rootClasses.join(" ")}">
      <div class="combat-container">
        <section class="panel enemy-formation-panel">
          <div class="panel-heading">
            <span>ENEMY FORMATION</span>
            <span>${enemyCount} target${enemyCount === 1 ? "" : "s"}</span>
          </div>
          <div class="lane-grid">
            ${formationHtml}
          </div>
        </section>
        <section class="panel player-ship-panel">
          <div class="panel-heading">
            <span>PLAYER SHIP</span>
          </div>
          <div class="player-ship-identity">
            <span class="ship-icon">[${escapeHtml(ship.name)} Icon]</span>
            <span class="ship-label">${playerHeader}</span>
          </div>
          <div class="player-stats">
            ${hullStat}
            ${shieldStat}
            ${evasionStat}
          </div>
          <div class="player-status">
            <strong>Status:</strong>
            <span class="status-values">${statusLine}</span>
          </div>
          <p
            class="action-note missile-hint"
            title="Missile weapons can target any ship in a lane regardless of cover."
          >
            Missile weapons ignore lane cover.
          </p>
          <button class="${comboMeterClasses.join(" ")}" ${comboMeterAttributes}>
            <span>COMBO METER: ${comboCharge}/${comboMax}</span>
            <div class="combo-meter-bar">
              <div class="combo-meter-fill" style="width:${comboPercent}%;"></div>
            </div>
            <span class="combo-meter-hint">[${comboReadyText}]</span>
          </button>
        </section>
        <section class="panel combat-action-panel">
          <div class="panel-heading">
            <span>ACTIONS (Unified System — No Stances)</span>
          </div>
          ${actionSection}
        </section>
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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
