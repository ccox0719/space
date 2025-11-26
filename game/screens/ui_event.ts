import { getEventById, applyConsequence } from "../systems/eventSystem";
import { navigation } from "../core/navigation";
import { startCombat } from "../systems/combatSystem";
import { startMiningSession } from "../systems/miningSystem";
import { gameState } from "../core/state";
import type { EventChoice } from "../core/contentTypes";

const EVENT_HINTS: Record<string, string> = {
  pirate: "Sensors report kinetic and explosive signatures—brace for hull rakes ahead.",
  disruptive: "Disruptive arcs detected; expect jammed systems if shields fall.",
  energy: "Energy harmonics in the signal mean shields will sponge the incoming fire.",
  ghost: "Ghost fleet scouts favor shield-cracking pulses; bring hull-focused damage."
};

function getEventHint(tags?: string[]): string {
  if (!tags) return "";
  for (const tag of tags) {
    if (EVENT_HINTS[tag]) {
      return EVENT_HINTS[tag];
    }
  }
  return "";
}

declare const nav: (screen: string, params?: Record<string, unknown>) => void;
declare const pickChoice: (choiceIdx: number) => void;
declare const beginMiningSession: (beltId?: string, resourceId?: string) => void;

export function EventScreen(params: Record<string, unknown> = {}): string {
  const eventId = typeof params.eventId === "string" ? params.eventId : "";
  const ev = getEventById(eventId);

  if (!ev) {
    return `
      <div class="screen event">
        <h1>No Event</h1>
        <p>No events available here.</p>
      </div>
    `;
  }

  if (ev.type === "mining") {
    const flavorHint = getEventHint(ev.tags);
    return `
      <div class="screen event">
        <header class="event-header">
          <h1>${ev.name}</h1>
          ${ev.description ? `<p class="event-description">${ev.description}</p>` : ""}
          ${flavorHint ? `<p class="event-hint">${flavorHint}</p>` : ""}
        </header>
        <p>Secure your mining rig and hope the pirates stay away.</p>
        <div class="screen-actions">
          <button onclick='beginMiningSession(${JSON.stringify(
            ev.beltId ?? ""
          )}, ${JSON.stringify(ev.miningCommodityId ?? "")})'>Enter Mining Belt</button>
        </div>
      </div>
    `;
  }

  const choiceSection = renderChoices(ev.choices);
  const flavorHint = getEventHint(ev.tags);

  return `
    <div class="screen event">
      <header class="event-header">
        <h1>${ev.name}</h1>
        <p class="event-type">Type: ${titleCase(ev.type)}</p>
          ${ev.description ? `<p class="event-description">${ev.description}</p>` : ""}
          ${flavorHint ? `<p class="event-hint">${flavorHint}</p>` : ""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${choiceSection}
      </section>
    </div>
  `;
}

function renderChoices(choices?: EventChoice[]): string {
  if (!choices || !choices.length) {
    return `<p>No choices; this event resolves on its own.</p>`;
  }
  const blocks = choices
    .map((choice, idx) => {
      const desc = choice.description ? `<p class="choice-desc">${choice.description}</p>` : "";
      const riskText = choice.risk
        ? `<span class="choice-risk">Risk: ${formatPercent(choice.risk.dangerChance)}</span>`
        : "";
      return `
        <article class="choice-card" onclick="pickChoice(${idx})">
          <div class="choice-title">
            <strong>${choice.label}</strong>
            ${riskText}
          </div>
          ${desc}
        </article>
      `;
    })
    .join("");
  return `<div class="choice-list">${blocks}</div>`;
}

function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function formatPercent(value?: number): string {
  if (typeof value !== "number") return "0%";
  return `${Math.round(value * 100)}%`;
}

declare global {
  interface Window {
    pickChoice: (choiceIdx: number) => void;
    beginMiningSession: (beltId?: string, resourceId?: string) => void;
  }
}

window.pickChoice = (choiceIdx: number) => {
  const params = navigation.params;
  const eventId = typeof params.eventId === "string" ? params.eventId : "";
  const ev = getEventById(eventId);
  if (!ev) {
    nav("main");
    return;
  }
  const choice = ev.choices?.[choiceIdx];
  if (choice) {
    const resolution = applyConsequence(choice);
    if (resolution.triggerCombat?.enemyId) {
      startCombat(resolution.triggerCombat.enemyId);
      return;
    }
  }
  nav("main", { message: `Outcome: ${choice?.label || ev.name}` });
};

window.beginMiningSession = (beltId?: string, resourceId?: string) => {
  const started = startMiningSession(
    gameState,
    gameState.location.systemId,
    beltId || undefined,
    resourceId || undefined
  );
  if (started) {
    navigation.go("mining");
  } else {
    navigation.go("main", { message: "Travel to a new system before mining again." });
  }
};
