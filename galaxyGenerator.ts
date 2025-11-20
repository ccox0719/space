// galaxyGenerator.ts
import {
  GalaxyConfig,
  Galaxy,
  Sector,
  SectorType,
  Faction,
  GeneratorConfig,
  DangerLevel,
  LawLevel
} from "./galaxyTypes";

function seededRandom(seed: number): () => number {
  // Simple deterministic PRNG (xorshift-like)
  let x = seed || Date.now();
  return () => {
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    // force positive and normalize
    return (x >>> 0) / 0xffffffff;
  };
}

function weightedRandom<T extends string | number>(
  rng: () => number,
  weights: Record<T, number>
): T {
  let total = 0;
  for (const k in weights) total += weights[k];
  const roll = rng() * total;
  let cumulative = 0;
  for (const k in weights) {
    cumulative += weights[k];
    if (roll <= cumulative) return k;
  }
  // fallback (shouldn't happen)
  return Object.keys(weights)[0] as T;
}

export class GalaxyGenerator {
  private config: GalaxyConfig;
  private rng: () => number;
  private generatorConfig: GeneratorConfig;
  private factionById: Map<string, Faction>;
  private sectorTypeById: Map<string, SectorType>;

  constructor(config: GalaxyConfig, seed: number = Date.now()) {
    this.config = config;
    this.rng = seededRandom(seed);
    this.generatorConfig = config.generatorConfig;

    this.factionById = new Map(
      config.factions.map((f) => [f.id, f])
    );
    this.sectorTypeById = new Map(
      config.sectorTypes.map((st) => [st.id, st])
    );
  }

  generate(size?: keyof GeneratorConfig["galaxySize"]): Galaxy {
    const chosenSize = size || this.generatorConfig.defaultSize;
    const sectorCount =
      this.generatorConfig.galaxySize[chosenSize].sectors;

    const sectors: Sector[] = [];

    // 1) Create base sectors with random types + factions + coords
    for (let i = 0; i < sectorCount; i++) {
      const sectorTypeId = weightedRandom(
        this.rng,
        this.generatorConfig.sectorTypeWeights
      );
      const sectorType = this.sectorTypeById.get(sectorTypeId);
      if (!sectorType) {
        throw new Error(`Unknown sector type: ${sectorTypeId}`);
      }

      const factionId = this.pickFactionForSectorType(sectorTypeId);
      const { danger, law } = this.applyLawDangerOverrides(
        sectorType,
        factionId
      );

      const coords = this.generateCoords(i, sectorCount);

      const sector: Sector = {
        id: this.generateSectorId(sectorTypeId, i),
        name: this.generateSectorName(sectorType, i),
        typeId: sectorTypeId,
        factionId,
        danger,
        law,
        resourceRichness: sectorType.resourceRichness,
        marketProfile: sectorType.marketProfile,
        coords,
        tags: [...sectorType.tags],
        connections: [],
        localModifiers: {
          events: { ...(sectorType.eventWeightModifiers || {}) }
        },
        pointsOfInterest: []
      };

      sectors.push(sector);
    }

    // 2) Wire up sector connections (graph edges)
    this.connectSectors(sectors);

    // 3) Optionally, add a few POIs based on type
    this.addBasicPointsOfInterest(sectors);

    // 4) Create final galaxy object
    const galaxy: Galaxy = {
      id: `galaxy_seed_${Math.floor(this.rng() * 100000)}`,
      size: chosenSize,
      sectors,
      factions: this.config.factions
    };

    return galaxy;
  }

  // ---- Helpers ---------------------------------------------------

  private pickFactionForSectorType(sectorTypeId: string): string | null {
    const spread = this.generatorConfig.factionSpread;
    const weights: Record<string, number> = {};

    for (const factionId in spread) {
      const map = spread[factionId];
      const w = map[sectorTypeId];
      if (w && w > 0) {
        weights[factionId] = w;
      }
    }

    if (Object.keys(weights).length === 0) {
      return null; // unclaimed
    }

    return weightedRandom(this.rng, weights);
  }

  private applyLawDangerOverrides(
    sectorType: SectorType,
    factionId: string | null
  ): { danger: DangerLevel; law: LawLevel } {
    const overrides = this.generatorConfig.lawDangerOverrides;
    let danger = sectorType.baseDanger as DangerLevel;
    let law =
      sectorType.baseLaw === "none" || sectorType.baseLaw === "very_low"
        ? (sectorType.baseLaw as LawLevel)
        : (sectorType.baseLaw as LawLevel);

    if (sectorType.id === "pirate_stronghold") {
      law = overrides.pirateStrongholdLaw;
      danger = "high";
    } else if (sectorType.id === "dead_system") {
      law = overrides.deadSystemLaw;
      danger = "high";
    } else if (sectorType.id === "core_trade_hub") {
      law = overrides.coreTradeHubLaw;
    }

    // You could further tweak danger/law by faction if you want

    return { danger, law };
  }

  private generateCoords(
    index: number,
    total: number
  ): { x: number; y: number } {
    // Rough radial layout
    const angle = (2 * Math.PI * index) / total;
    const radius = 5 + this.rng() * 10;
    const x = Math.round(Math.cos(angle) * radius);
    const y = Math.round(Math.sin(angle) * radius);
    return { x, y };
  }

  private generateSectorId(typeId: string, index: number): string {
    return `${typeId}_${index}`;
  }

  private generateSectorName(type: SectorType, index: number): string {
    // Placeholder naming scheme; you can swap for something cooler
    const base = type.name.split(" ")[0]; // e.g. "Core", "Mining", etc.
    const suffix = 100 + index;
    return `${base} Sector ${suffix}`;
  }

  private connectSectors(sectors: Sector[]): void {
    const rules = this.generatorConfig.connectionRules;
    const n = sectors.length;

    // Helper: distance between two sectors
    const dist = (a: Sector, b: Sector) => {
      const dx = a.coords.x - b.coords.x;
      const dy = a.coords.y - b.coords.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // First pass: ensure each sector has at least minConnectionsPerSector
    for (let i = 0; i < n; i++) {
      const sector = sectors[i];
      while (sector.connections.length < rules.minConnectionsPerSector) {
        // Find the nearest sector not already connected
        let bestIdx = -1;
        let bestDist = Infinity;
        for (let j = 0; j < n; j++) {
          if (j === i) continue;
          const other = sectors[j];
          if (sector.connections.includes(other.id)) continue;
          const d = dist(sector, other);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = j;
          }
        }
        if (bestIdx === -1) break; // shouldn't happen
        const other = sectors[bestIdx];
        this.linkSectors(sector, other);
      }
    }

    // Second pass: randomly add extra connections up to maxConnectionsPerSector
    for (let i = 0; i < n; i++) {
      const sector = sectors[i];
      const currentConnections = sector.connections.length;
      const maxExtra =
        rules.maxConnectionsPerSector - currentConnections;
      if (maxExtra <= 0) continue;
      const extras = Math.floor(this.rng() * (maxExtra + 1));
      for (let e = 0; e < extras; e++) {
        const j = Math.floor(this.rng() * n);
        if (j === i) continue;
        const other = sectors[j];
        if (sector.connections.includes(other.id)) continue;
        this.linkSectors(sector, other);
      }
    }
  }

  private linkSectors(a: Sector, b: Sector): void {
    if (!a.connections.includes(b.id)) a.connections.push(b.id);
    if (!b.connections.includes(a.id)) b.connections.push(a.id);
  }

  private addBasicPointsOfInterest(sectors: Sector[]): void {
    for (const sector of sectors) {
      if (!sector.pointsOfInterest) sector.pointsOfInterest = [];
      // Very simple example: add POIs based on type
      if (sector.typeId === "core_trade_hub") {
        sector.pointsOfInterest.push({
          id: `${sector.id}_exchange`,
          type: "market",
          name: `${sector.name} Exchange`,
          effects: {
            tradeBonus: 0.1,
            missionBoard: ["contract_delivery", "speculation_run"]
          }
        });
      } else if (sector.typeId === "mining_belt") {
        sector.pointsOfInterest.push({
          id: `${sector.id}_mining_hub`,
          type: "station",
          name: `${sector.name} Mining Hub`,
          effects: {
            miningContractsBoard: [
              "mining_contract",
              "deep_core_mining"
            ]
          }
        });
      } else if (sector.typeId === "pirate_stronghold") {
        sector.pointsOfInterest.push({
          id: `${sector.id}_black_market`,
          type: "black_market",
          name: `${sector.name} Black Ring`,
          effects: {
            blackMarketAccess: [
              "basic_contraband",
              "weapon_upgrades"
            ]
          }
        });
      }
      // You can extend this with more rules per type or faction
    }
  }
}
