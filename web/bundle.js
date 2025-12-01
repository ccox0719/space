// galaxyGenerator.ts
function seededRandom(seed2) {
  let x = seed2 || Date.now();
  return () => {
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    return (x >>> 0) / 4294967295;
  };
}
function weightedRandom(rng2, weights) {
  let total = 0;
  for (const k in weights) total += weights[k];
  const roll = rng2() * total;
  let cumulative = 0;
  for (const k in weights) {
    cumulative += weights[k];
    if (roll <= cumulative) return k;
  }
  return Object.keys(weights)[0];
}
var GalaxyGenerator = class {
  config;
  rng;
  generatorConfig;
  factionById;
  sectorTypeById;
  constructor(config2, seed2 = Date.now()) {
    this.config = config2;
    this.rng = seededRandom(seed2);
    this.generatorConfig = config2.generatorConfig;
    this.factionById = new Map(
      config2.factions.map((f) => [f.id, f])
    );
    this.sectorTypeById = new Map(
      config2.sectorTypes.map((st) => [st.id, st])
    );
  }
  generate(size) {
    const chosenSize = size || this.generatorConfig.defaultSize;
    const sectorCount = this.generatorConfig.galaxySize[chosenSize].sectors;
    const sectors = [];
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
      const sector = {
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
          events: { ...sectorType.eventWeightModifiers || {} }
        },
        pointsOfInterest: []
      };
      sectors.push(sector);
    }
    this.connectSectors(sectors);
    this.addBasicPointsOfInterest(sectors);
    const galaxy2 = {
      id: `galaxy_seed_${Math.floor(this.rng() * 1e5)}`,
      size: chosenSize,
      sectors,
      factions: this.config.factions
    };
    return galaxy2;
  }
  // ---- Helpers ---------------------------------------------------
  pickFactionForSectorType(sectorTypeId) {
    const spread = this.generatorConfig.factionSpread;
    const weights = {};
    for (const factionId in spread) {
      const map = spread[factionId];
      const w = map[sectorTypeId];
      if (w && w > 0) {
        weights[factionId] = w;
      }
    }
    if (Object.keys(weights).length === 0) {
      return null;
    }
    return weightedRandom(this.rng, weights);
  }
  applyLawDangerOverrides(sectorType, factionId) {
    const overrides = this.generatorConfig.lawDangerOverrides;
    let danger = sectorType.baseDanger;
    let law = sectorType.baseLaw === "none" || sectorType.baseLaw === "very_low" ? sectorType.baseLaw : sectorType.baseLaw;
    if (sectorType.id === "pirate_stronghold") {
      law = overrides.pirateStrongholdLaw;
      danger = "high";
    } else if (sectorType.id === "dead_system") {
      law = overrides.deadSystemLaw;
      danger = "high";
    } else if (sectorType.id === "core_trade_hub") {
      law = overrides.coreTradeHubLaw;
    }
    return { danger, law };
  }
  generateCoords(index, total) {
    const angle = 2 * Math.PI * index / total;
    const radius = 5 + this.rng() * 10;
    const x = Math.round(Math.cos(angle) * radius);
    const y = Math.round(Math.sin(angle) * radius);
    return { x, y };
  }
  generateSectorId(typeId, index) {
    return `${typeId}_${index}`;
  }
  generateSectorName(type, index) {
    const base = type.name.split(" ")[0];
    const suffix = 100 + index;
    return `${base} Sector ${suffix}`;
  }
  connectSectors(sectors) {
    const rules = this.generatorConfig.connectionRules;
    const n = sectors.length;
    const dist = (a, b) => {
      const dx = a.coords.x - b.coords.x;
      const dy = a.coords.y - b.coords.y;
      return Math.sqrt(dx * dx + dy * dy);
    };
    for (let i = 0; i < n; i++) {
      const sector = sectors[i];
      while (sector.connections.length < rules.minConnectionsPerSector) {
        let bestIdx = -1;
        let bestDist = Infinity;
        for (let j = 0; j < n; j++) {
          if (j === i) continue;
          const other2 = sectors[j];
          if (sector.connections.includes(other2.id)) continue;
          const d = dist(sector, other2);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = j;
          }
        }
        if (bestIdx === -1) break;
        const other = sectors[bestIdx];
        this.linkSectors(sector, other);
      }
    }
    for (let i = 0; i < n; i++) {
      const sector = sectors[i];
      const currentConnections = sector.connections.length;
      const maxExtra = rules.maxConnectionsPerSector - currentConnections;
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
  linkSectors(a, b) {
    if (!a.connections.includes(b.id)) a.connections.push(b.id);
    if (!b.connections.includes(a.id)) b.connections.push(a.id);
  }
  addBasicPointsOfInterest(sectors) {
    for (const sector of sectors) {
      if (!sector.pointsOfInterest) sector.pointsOfInterest = [];
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
    }
  }
};

// galaxy_generator.json
var galaxy_generator_default = {
  factions: [
    {
      id: "helion_republic",
      name: "Helion Republic",
      type: "government",
      description: "A trade-focused democratic republic controlling many core systems.",
      reputationTrack: "navy",
      primaryAlignments: ["law"],
      tags: ["lawful", "trade", "navy"],
      color: "#4BA3FF"
    },
    {
      id: "rift_syndicate",
      name: "Rift Syndicate",
      type: "criminal",
      description: "A loose coalition of pirate clans, smugglers, and black market brokers.",
      reputationTrack: "syndicate",
      primaryAlignments: ["chaos"],
      tags: ["pirate", "smuggling", "underworld"],
      color: "#D13B3B"
    },
    {
      id: "unity_church",
      name: "Unity Church",
      type: "religious",
      description: "A theocratic order blending biotech and spirituality.",
      reputationTrack: "researcher",
      primaryAlignments: ["law"],
      tags: ["biotech", "pious", "zealots"],
      color: "#F2D15B"
    },
    {
      id: "celestial_directorate",
      name: "Celestial Directorate",
      type: "technocracy",
      description: "An AI-steered technocratic state focused on research and control.",
      reputationTrack: "researcher",
      primaryAlignments: ["law"],
      tags: ["high_tech", "ai", "strict"],
      color: "#9E68FF"
    },
    {
      id: "frontier_clans",
      name: "Frontier Clans",
      type: "frontier",
      description: "Independent miners, haulers, and settlers in the outer belts.",
      reputationTrack: "miner",
      primaryAlignments: ["neutral"],
      tags: ["mining", "frontier", "scrappy"],
      color: "#7BC76E"
    }
  ],
  sectorTypes: [
    {
      id: "core_trade_hub",
      name: "Core Trade Hub",
      description: "Highly populated, safe systems with strong law enforcement and busy markets.",
      baseDanger: "low",
      baseLaw: "high",
      resourceRichness: {
        minerals: "low",
        gas: "low",
        salvage: "low",
        anomalies: "low"
      },
      marketProfile: {
        volume: "very_high",
        priceVolatility: "low",
        illegalTolerance: "very_low"
      },
      preferredFactions: ["helion_republic", "celestial_directorate"],
      eventWeightModifiers: {
        piracy: 0.4,
        law_enforcement: 1.8,
        market: 1.6,
        smuggling: 0.4
      },
      tags: ["core", "trade", "safe"]
    },
    {
      id: "industrial_world",
      name: "Industrial World",
      description: "Manufacturing-focused system with moderate law and strong demand for resources.",
      baseDanger: "medium",
      baseLaw: "medium",
      resourceRichness: {
        minerals: "medium",
        gas: "low",
        salvage: "medium",
        anomalies: "low"
      },
      marketProfile: {
        volume: "high",
        priceVolatility: "medium",
        illegalTolerance: "low"
      },
      preferredFactions: ["helion_republic", "frontier_clans"],
      eventWeightModifiers: {
        piracy: 1.1,
        law_enforcement: 1.2,
        market: 1.3,
        mining: 1.1
      },
      tags: ["industry", "manufacturing"]
    },
    {
      id: "mining_belt",
      name: "Mining Belt",
      description: "Dense asteroid fields and refineries, rich in minerals but risky to traverse.",
      baseDanger: "medium",
      baseLaw: "low",
      resourceRichness: {
        minerals: "very_high",
        gas: "medium",
        salvage: "medium",
        anomalies: "medium"
      },
      marketProfile: {
        volume: "medium",
        priceVolatility: "high",
        illegalTolerance: "medium"
      },
      preferredFactions: ["frontier_clans", "helion_republic"],
      eventWeightModifiers: {
        mining: 2,
        piracy: 1.4,
        salvage: 1.3,
        law_enforcement: 0.7
      },
      tags: ["mining", "frontier"]
    },
    {
      id: "pirate_stronghold",
      name: "Pirate Stronghold",
      description: "Lawless sectors controlled by pirate clans and smugglers.",
      baseDanger: "high",
      baseLaw: "very_low",
      resourceRichness: {
        minerals: "low",
        gas: "low",
        salvage: "high",
        anomalies: "medium"
      },
      marketProfile: {
        volume: "medium",
        priceVolatility: "high",
        illegalTolerance: "very_high"
      },
      preferredFactions: ["rift_syndicate"],
      eventWeightModifiers: {
        piracy: 2.5,
        smuggling: 2,
        law_enforcement: 0.2,
        combat: 1.5,
        salvage: 1.2
      },
      tags: ["pirate", "black_market", "dangerous"]
    },
    {
      id: "research_node",
      name: "Research Node",
      description: "High-tech system full of labs, observatories, and classified projects.",
      baseDanger: "low",
      baseLaw: "high",
      resourceRichness: {
        minerals: "low",
        gas: "low",
        salvage: "low",
        anomalies: "high"
      },
      marketProfile: {
        volume: "medium",
        priceVolatility: "low",
        illegalTolerance: "low"
      },
      preferredFactions: ["celestial_directorate", "unity_church"],
      eventWeightModifiers: {
        exploration: 1.8,
        rare_story: 1.5,
        research_support: 2,
        piracy: 0.6
      },
      tags: ["research", "science", "ai"]
    },
    {
      id: "frontier_outpost",
      name: "Frontier Outpost",
      description: "Sparse but strategic system on the edge of known space.",
      baseDanger: "medium",
      baseLaw: "low",
      resourceRichness: {
        minerals: "medium",
        gas: "medium",
        salvage: "medium",
        anomalies: "medium"
      },
      marketProfile: {
        volume: "low",
        priceVolatility: "high",
        illegalTolerance: "medium"
      },
      preferredFactions: ["frontier_clans"],
      eventWeightModifiers: {
        exploration: 1.4,
        mining: 1.4,
        piracy: 1.3,
        salvage: 1.3
      },
      tags: ["frontier", "outpost"]
    },
    {
      id: "dead_system",
      name: "Dead System",
      description: "An abandoned or dead system with no permanent population.",
      baseDanger: "high",
      baseLaw: "none",
      resourceRichness: {
        minerals: "low",
        gas: "low",
        salvage: "very_high",
        anomalies: "high"
      },
      marketProfile: {
        volume: "none",
        priceVolatility: "none",
        illegalTolerance: "n_a"
      },
      preferredFactions: [],
      eventWeightModifiers: {
        salvage: 2.2,
        exploration: 1.7,
        rare_story: 1.4,
        piracy: 0.8
      },
      tags: ["dead", "derelicts", "anomalies"]
    }
  ],
  generatorConfig: {
    galaxySize: {
      small: { sectors: 16 },
      medium: { sectors: 24 },
      large: { sectors: 36 }
    },
    defaultSize: "medium",
    sectorTypeWeights: {
      core_trade_hub: 3,
      industrial_world: 4,
      mining_belt: 4,
      pirate_stronghold: 3,
      research_node: 2,
      frontier_outpost: 4,
      dead_system: 2
    },
    factionSpread: {
      helion_republic: {
        core_trade_hub: 0.6,
        industrial_world: 0.4,
        frontier_outpost: 0.2
      },
      rift_syndicate: {
        pirate_stronghold: 0.7,
        frontier_outpost: 0.3
      },
      unity_church: {
        research_node: 0.5,
        industrial_world: 0.3,
        core_trade_hub: 0.2
      },
      celestial_directorate: {
        research_node: 0.7,
        core_trade_hub: 0.3
      },
      frontier_clans: {
        mining_belt: 0.6,
        frontier_outpost: 0.6,
        dead_system: 0.2
      }
    },
    connectionRules: {
      minConnectionsPerSector: 2,
      maxConnectionsPerSector: 5,
      coreClusterSize: 4,
      frontierDistanceMin: 3,
      frontierDistanceMax: 6
    },
    lawDangerOverrides: {
      lawLevels: ["none", "very_low", "low", "medium", "high"],
      dangerLevels: ["low", "medium", "high"],
      pirateStrongholdLaw: "very_low",
      deadSystemLaw: "none",
      coreTradeHubLaw: "high"
    }
  },
  exampleGeneratedGalaxy: {
    id: "galaxy_seed_72193",
    size: "medium",
    sectors: [
      {
        id: "helion_prime",
        name: "Helion Prime",
        typeId: "core_trade_hub",
        factionId: "helion_republic",
        danger: "low",
        law: "high",
        coords: { x: 0, y: 0 },
        tags: ["core", "capital"],
        connections: ["unity_station", "keth_gate", "orion_exchange"],
        localModifiers: {
          market: { volume: "very_high" },
          events: { law_enforcement: 2, piracy: 0.3 }
        },
        pointsOfInterest: [
          {
            id: "helion_exchange",
            type: "market",
            name: "Helion Grand Exchange",
            effects: {
              tradeBonus: 0.1,
              missionBoard: ["contract_delivery", "speculation_run"]
            }
          },
          {
            id: "navy_office",
            type: "navy_hq",
            name: "Helion Navy Command",
            effects: {
              missionBoard: ["sector_patrol", "frontline_conflict"]
            }
          }
        ]
      },
      {
        id: "unity_station",
        name: "Unity Station",
        typeId: "research_node",
        factionId: "unity_church",
        danger: "low",
        law: "high",
        coords: { x: 1, y: 2 },
        tags: ["research", "pilgrimage"],
        connections: ["helion_prime", "aurora_belt"],
        localModifiers: {
          events: { exploration: 1.6, rare_story: 1.4 }
        },
        pointsOfInterest: [
          {
            id: "bio_temple",
            type: "lab",
            name: "Temple of Living Code",
            effects: {
              dataSellMultiplier: 1.3
            }
          }
        ]
      },
      {
        id: "aurora_belt",
        name: "Aurora Belt",
        typeId: "mining_belt",
        factionId: "frontier_clans",
        danger: "medium",
        law: "low",
        coords: { x: 3, y: 3 },
        tags: ["mining"],
        connections: ["unity_station", "keth_gate"],
        localModifiers: {
          events: { mining: 2.2, piracy: 1.3 }
        },
        pointsOfInterest: [
          {
            id: "clan_hub",
            type: "station",
            name: "Clan Hub Delta",
            effects: {
              miningContractsBoard: ["mining_contract", "deep_core_mining"]
            }
          }
        ]
      },
      {
        id: "keth_gate",
        name: "Keth Gate",
        typeId: "frontier_outpost",
        factionId: "frontier_clans",
        danger: "medium",
        law: "low",
        coords: { x: -2, y: -1 },
        tags: ["frontier"],
        connections: ["helion_prime", "aurora_belt", "rift_den"],
        localModifiers: {
          events: { salvage: 1.3, piracy: 1.2 }
        },
        pointsOfInterest: [
          {
            id: "transit_bar",
            type: "bar",
            name: "The Last Stable Orbit",
            effects: {
              crewRecruitment: true
            }
          }
        ]
      },
      {
        id: "rift_den",
        name: "Rift Den",
        typeId: "pirate_stronghold",
        factionId: "rift_syndicate",
        danger: "high",
        law: "very_low",
        coords: { x: -5, y: -3 },
        tags: ["pirate", "black_market"],
        connections: ["keth_gate"],
        localModifiers: {
          events: {
            piracy: 2.5,
            smuggling: 2,
            law_enforcement: 0.1
          }
        },
        pointsOfInterest: [
          {
            id: "black_ring",
            type: "black_market",
            name: "The Black Ring",
            effects: {
              blackMarketAccess: ["basic_contraband", "weapon_upgrades"]
            }
          }
        ]
      },
      {
        id: "silent_shroud",
        name: "Silent Shroud",
        typeId: "dead_system",
        factionId: null,
        danger: "high",
        law: "none",
        coords: { x: 6, y: -4 },
        tags: ["dead", "derelicts"],
        connections: ["keth_gate"],
        localModifiers: {
          events: { salvage: 2.4, rare_story: 1.6 }
        },
        pointsOfInterest: [
          {
            id: "derelict_flagship",
            type: "derelict",
            name: "Drifting War Relic",
            effects: {
              missionBoard: ["derelict_flagship"]
            }
          }
        ]
      }
    ]
  }
};

// src/rng/SeededRng.ts
function createRng(seed2) {
  let state = seed2 || Date.now();
  const next = () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967295;
  };
  const int = (min, max) => {
    const n = next();
    return Math.floor(n * (max - min + 1)) + min;
  };
  return { seed: seed2, next, int };
}

// event_system.json
var event_system_default = {
  events: {
    globalWeights: {
      travel: 0.45,
      dock: 0.25,
      idle: 0.15,
      sleepCycle: 0.05,
      rare: 0.01
    },
    categories: [
      "travel",
      "combat",
      "market",
      "mining",
      "smuggling",
      "piracy",
      "law_enforcement",
      "exploration",
      "salvage",
      "crew",
      "ship",
      "rare_story"
    ],
    roleWeights: {
      trader: {
        market: 2,
        piracy: 1.3,
        law_enforcement: 1,
        combat: 0.7,
        exploration: 0.8,
        salvage: 0.9
      },
      miner: {
        mining: 2,
        piracy: 1.4,
        combat: 0.9,
        exploration: 0.6,
        salvage: 1.3
      },
      smuggler: {
        smuggling: 2.5,
        law_enforcement: 1.8,
        piracy: 1.3,
        market: 0.5,
        combat: 1.4
      },
      pirate: {
        piracy: 2.3,
        law_enforcement: 1.8,
        combat: 1.6,
        trader: 1.4,
        salvage: 1
      },
      bounty_hunter: {
        combat: 2.2,
        piracy: 1.2,
        exploration: 0.8,
        law_enforcement: 1.3
      },
      navy: {
        law_enforcement: 2.2,
        combat: 1.6,
        piracy: 1.2,
        market: 0.7
      },
      explorer: {
        exploration: 2.4,
        rare_story: 1.3,
        salvage: 1,
        mining: 0.8
      },
      salvager: {
        salvage: 2.3,
        combat: 1,
        exploration: 0.9,
        piracy: 1
      }
    },
    eventPool: [
      {
        id: "pirate_ambush",
        category: "piracy",
        description: "A pirate raider decloaks off your bow. They lock weapons and broadcast a demand for tribute.",
        requirements: {
          sectorDanger: "medium_or_high"
        },
        choices: [
          {
            id: "fight",
            text: "Fight the pirate ship.",
            tags: ["combat", "lawful_action"],
            outcomes: {
              success: {
                chance: 0.55,
                effects: {
                  damage: "medium",
                  loot: "small",
                  repChanges: {
                    navy: 1,
                    pirate: -2
                  }
                }
              },
              failure: {
                chance: 0.45,
                effects: {
                  damage: "heavy",
                  cargoLossChance: 0.5
                }
              }
            }
          },
          {
            id: "pay_tribute",
            text: "Pay tribute and avoid a fight.",
            tags: ["piracy"],
            outcomes: {
              success: {
                chance: 1,
                effects: {
                  credits: -250,
                  repChanges: {
                    pirate: 1,
                    merchant: -1
                  }
                }
              }
            }
          },
          {
            id: "attempt_escape",
            text: "Try to outrun the pirate.",
            requirements: { enginePower: 2 },
            outcomes: {
              success: {
                chance: 0.5,
                effects: {
                  fuel: -2
                }
              },
              failure: {
                chance: 0.5,
                effects: {
                  damage: "light",
                  cargoLossChance: 0.2
                }
              }
            }
          }
        ]
      },
      {
        id: "pirate_encounter_lane",
        category: "piracy",
        description: "A pirate raider drops out of FTL alongside your lane, weapons hot. They demand payment to 'ensure your continued safety.'",
        choices: [
          {
            id: "pay_bribe",
            text: "Pay their bribe and hope they leave.",
            tags: ["piracy"],
            outcomes: {
              success: {
                chance: 1,
                effects: {
                  credits: -300,
                  repChanges: {
                    pirate: 1,
                    merchant: -1
                  },
                  riskAdjust: {
                    pirateAttention: -10
                  }
                }
              }
            }
          },
          {
            id: "attack_back",
            text: "Power up your weapons and attack.",
            tags: ["combat", "lawful_action"],
            outcomes: {
              success: {
                chance: 0.55,
                effects: {
                  combat: "forced",
                  repChanges: {
                    pirate: -2,
                    navy: 1
                  },
                  riskAdjust: {
                    pirateAttention: -15
                  }
                }
              },
              failure: {
                chance: 0.45,
                effects: {
                  combat: "forced",
                  flag: "enemy_advantage",
                  riskAdjust: {
                    pirateAttention: 5
                  }
                }
              }
            }
          },
          {
            id: "alert_police",
            text: "Broadcast a distress call to local authorities (risky).",
            tags: ["lawful_action"],
            outcomes: {
              success: {
                chance: 0.5,
                effects: {
                  flag: "navy_intervention",
                  repChanges: {
                    navy: 2,
                    pirate: -1
                  },
                  riskAdjust: {
                    pirateAttention: -20
                  }
                }
              },
              failure: {
                chance: 0.5,
                effects: {
                  flag: "pirate_enraged",
                  repChanges: {
                    pirate: 1
                  },
                  riskAdjust: {
                    pirateAttention: 10
                  }
                }
              }
            }
          },
          {
            id: "run",
            text: "Push your engines and try to run.",
            tags: ["evasion", "flight"],
            outcomes: {
              success: { chance: 1, effects: {} }
            }
          }
        ]
      },
      {
        id: "navy_inspection",
        category: "law_enforcement",
        description: "A Navy patrol hails your vessel for a routine inspection.",
        requirements: {
          sectorLaw: "medium_or_high"
        },
        choices: [
          {
            id: "comply",
            text: "Submit to the inspection.",
            tags: ["lawful_action"],
            outcomes: {
              success: {
                chance: 1,
                effects: {
                  repChanges: {
                    navy: 1
                  }
                }
              }
            }
          },
          {
            id: "bribe",
            text: "Attempt to bribe the officer.",
            tags: ["smuggling"],
            outcomes: {
              success: {
                chance: 0.45,
                effects: {
                  credits: -200,
                  repChanges: {
                    syndicate: 1
                  }
                }
              },
              failure: {
                chance: 0.55,
                effects: {
                  repChanges: {
                    navy: -5
                  },
                  flag: "wanted_status"
                }
              }
            }
          },
          {
            id: "flee",
            text: "Attempt to flee the scene.",
            tags: ["piracy", "chaos_action"],
            outcomes: {
              success: {
                chance: 0.35,
                effects: {
                  fuel: -3,
                  repChanges: {
                    navy: -4
                  }
                }
              },
              failure: {
                chance: 0.65,
                effects: {
                  damage: "medium",
                  combat: "forced"
                }
              }
            }
          }
        ]
      },
      {
        id: "rich_asteroid_field",
        category: "mining",
        description: "Scanners pick up a dense asteroid field with high mineral readings.",
        choices: [
          {
            id: "mine_safely",
            text: "Mine carefully, minimizing risk.",
            tags: ["mining_support"],
            outcomes: {
              success: {
                chance: 0.95,
                effects: {
                  minerals: "small",
                  repChanges: {
                    miner: 1
                  }
                }
              }
            }
          },
          {
            id: "mine_aggressively",
            text: "Push your mining laser to the limit for maximum yield.",
            tags: ["mining_support"],
            outcomes: {
              success: {
                chance: 0.6,
                effects: {
                  minerals: "large"
                }
              },
              failure: {
                chance: 0.4,
                effects: {
                  damage: "medium",
                  pirateAttractionChance: 0.25
                }
              }
            }
          }
        ]
      },
      {
        id: "black_market_signal",
        category: "smuggling",
        description: "You detect an encrypted signal offering a smuggler\u2019s contract.",
        requirements: {
          syndicateRepMin: -10
        },
        choices: [
          {
            id: "accept",
            text: "Accept the clandestine job.",
            tags: ["smuggling"],
            outcomes: {
              success: {
                chance: 1,
                effects: {
                  mission_offer: "contraband_run"
                }
              }
            }
          },
          {
            id: "ignore",
            text: "Ignore the signal.",
            outcomes: {
              success: {
                chance: 1,
                effects: {}
              }
            }
          }
        ]
      },
      {
        id: "ancient_beacon",
        category: "rare_story",
        rarity: 3e-3,
        description: "A faint alien beacon pulses across subspace, calling you closer.",
        choices: [
          {
            id: "approach",
            text: "Move toward the beacon.",
            tags: ["exploration"],
            outcomes: {
              success: {
                chance: 0.6,
                effects: {
                  artifact: "unknown",
                  repChanges: {
                    researcher: 3
                  }
                }
              },
              failure: {
                chance: 0.4,
                effects: {
                  damage: "medium"
                }
              }
            }
          },
          {
            id: "mark_location",
            text: "Record the beacon\u2019s coordinates for later.",
            outcomes: {
              success: {
                chance: 1,
                effects: {
                  log: "beacon_marked"
                }
              }
            }
          },
          {
            id: "leave",
            text: "Leave the anomaly alone.",
            outcomes: {
              success: {
                chance: 1,
                effects: {}
              }
            }
          }
        ]
      }
    ]
  }
};

// reputation_engine.json
var reputation_engine_default = {
  reputationSystem: {
    globalRange: {
      min: -100,
      max: 100,
      neutral: 0
    },
    tracks: [
      {
        id: "merchant",
        name: "Merchant Guilds",
        description: "Represents how trusted you are among traders, corporations, and commercial hubs.",
        visible: true,
        effects: {
          discounts: [
            { threshold: 20, value: 0.05 },
            { threshold: 50, value: 0.1 },
            { threshold: 80, value: 0.2 }
          ],
          pricePenalty: [
            { threshold: -20, value: 0.05 },
            { threshold: -50, value: 0.12 },
            { threshold: -80, value: 0.25 }
          ],
          eventWeights: {
            trade_contract_offers: {
              low: 0.5,
              mid: 1,
              high: 1.5
            }
          }
        },
        tiers: [
          { name: "Blacklisted", min: -100, max: -51 },
          { name: "Distrusted", min: -50, max: -11 },
          { name: "Neutral", min: -10, max: 10 },
          { name: "Preferred Partner", min: 11, max: 49 },
          { name: "Key Supplier", min: 50, max: 79 },
          { name: "Guild Icon", min: 80, max: 100 }
        ]
      },
      {
        id: "navy",
        name: "Navy / Lawful Authorities",
        description: "Measures your standing with lawful governments, patrols, and official militaries.",
        visible: true,
        effects: {
          patrolBehavior: {
            hostileThreshold: -30,
            scanThreshold: -5,
            escortThreshold: 50
          },
          accessLevels: [
            {
              threshold: 20,
              unlocks: ["low_security_docks", "basic_military_contracts"]
            },
            {
              threshold: 50,
              unlocks: ["restricted_weapons", "priority_resupply"]
            },
            {
              threshold: 80,
              unlocks: ["classified_operations", "flagship_support"]
            }
          ]
        },
        tiers: [
          { name: "Enemy of the State", min: -100, max: -51 },
          { name: "Wanted", min: -50, max: -11 },
          { name: "Unregistered", min: -10, max: 10 },
          { name: "Auxiliary", min: 11, max: 49 },
          { name: "Commissioned", min: 50, max: 79 },
          { name: "Decorated Officer", min: 80, max: 100 }
        ]
      },
      {
        id: "pirate",
        name: "Pirate Clans",
        description: "Your infamy and respect among raiders, warlords, and criminal fleets.",
        visible: true,
        effects: {
          pirateBehavior: {
            ignoreThreshold: 40,
            autoAssistThreshold: 70
          },
          raiderEvents: {
            allyChanceAtHighRep: 0.25,
            doubleCrossChanceAtLowRep: 0.35
          }
        },
        tiers: [
          { name: "Spineless Merchant", min: -100, max: -21 },
          { name: "Unknown", min: -20, max: 10 },
          { name: "Small-Time Raider", min: 11, max: 39 },
          { name: "Feared Captain", min: 40, max: 79 },
          { name: "Warlord", min: 80, max: 100 }
        ]
      },
      {
        id: "syndicate",
        name: "Syndicate / Underworld",
        description: "Your relationship with organized crime, smugglers, and black market brokers.",
        visible: true,
        effects: {
          blackMarketAccess: [
            { threshold: 10, unlocks: ["basic_contraband"] },
            { threshold: 40, unlocks: ["weapon_upgrades", "fake_ids"] },
            { threshold: 70, unlocks: ["prototype_tech", "ghost_transponder"] }
          ],
          betrayalRisk: [
            { threshold: -100, chance: 0.4 },
            { threshold: -50, chance: 0.25 },
            { threshold: 0, chance: 0.1 }
          ]
        },
        tiers: [
          { name: "Police Informant", min: -100, max: -51 },
          { name: "Suspect", min: -50, max: -11 },
          { name: "Unknown", min: -10, max: 10 },
          { name: "Associate", min: 11, max: 39 },
          { name: "Trusted Fixer", min: 40, max: 79 },
          { name: "Shadow Broker", min: 80, max: 100 }
        ]
      },
      {
        id: "miner",
        name: "Frontier Miners",
        description: "Rep with mining guilds, frontier clans, and resource cartels.",
        visible: true,
        effects: {
          contractPriority: [
            { threshold: 20, weightMultiplier: 1.25 },
            { threshold: 50, weightMultiplier: 1.6 }
          ],
          dockFeesReduction: [
            { threshold: 30, value: 0.1 }
          ]
        },
        tiers: [
          { name: "Claim Jumper", min: -100, max: -31 },
          { name: "Unwelcome", min: -30, max: -11 },
          { name: "Stranger", min: -10, max: 10 },
          { name: "Reliable Hauler", min: 11, max: 49 },
          { name: "Guild Partner", min: 50, max: 79 },
          { name: "Legend of the Belt", min: 80, max: 100 }
        ]
      },
      {
        id: "researcher",
        name: "Scientific Community",
        description: "Rep with research labs, xenologists, and anomaly study groups.",
        visible: true,
        effects: {
          dataPayoutMultiplier: [
            { threshold: 20, value: 1.15 },
            { threshold: 50, value: 1.35 },
            { threshold: 80, value: 1.7 }
          ],
          specialProjectsChance: [
            { threshold: 40, chance: 0.15 },
            { threshold: 70, chance: 0.3 }
          ]
        },
        tiers: [
          { name: "Crank", min: -100, max: -31 },
          { name: "Discredited", min: -30, max: -11 },
          { name: "Independent", min: -10, max: 10 },
          { name: "Field Contributor", min: 11, max: 49 },
          { name: "Recognized Expert", min: 50, max: 79 },
          { name: "Pioneer of the Unknown", min: 80, max: 100 }
        ]
      }
    ],
    alignmentTracks: [
      {
        id: "law",
        name: "Law",
        description: "Tendency to support order, governments, and official structures.",
        hidden: false,
        range: { min: 0, max: 100 },
        effects: {
          lawfulMissionAccessThreshold: 40,
          smugglerPenaltyThreshold: 60
        }
      },
      {
        id: "chaos",
        name: "Chaos",
        description: "Tendency to support piracy, sabotage, and destabilizing forces.",
        hidden: false,
        range: { min: 0, max: 100 },
        effects: {
          pirateEventBoostThreshold: 40,
          navyAggroThreshold: 60
        }
      }
    ],
    changeRules: {
      decay: {
        enabled: true,
        perTurn: 0,
        perJump: 0,
        perDay: 0.1,
        towardNeutralOnly: true
      },
      hardLocks: [
        {
          condition: "navy <= -80",
          effects: ["no_navy_contracts", "navy_shoot_on_sight"]
        },
        {
          condition: "pirate >= 80 && law >= 60",
          effects: ["internal_conflict_events"]
        }
      ],
      roleTags: [
        {
          tag: "lawful_action",
          reputationDeltas: {
            navy: 2,
            pirate: -1,
            syndicate: -1
          },
          alignmentDeltas: {
            law: 2,
            chaos: -1
          }
        },
        {
          tag: "piracy",
          reputationDeltas: {
            navy: -4,
            merchant: -2,
            pirate: 3,
            syndicate: 1
          },
          alignmentDeltas: {
            law: -3,
            chaos: 3
          }
        },
        {
          tag: "smuggling",
          reputationDeltas: {
            navy: -3,
            merchant: -1,
            syndicate: 3
          },
          alignmentDeltas: {
            law: -2,
            chaos: 2
          }
        },
        {
          tag: "trade_support",
          reputationDeltas: {
            merchant: 2
          },
          alignmentDeltas: {}
        },
        {
          tag: "mining_support",
          reputationDeltas: {
            miner: 2,
            merchant: 1
          },
          alignmentDeltas: {}
        },
        {
          tag: "research_support",
          reputationDeltas: {
            researcher: 3
          },
          alignmentDeltas: {}
        }
      ]
    }
  }
};

// src/systems/PlayerState.ts
var STARTING_SHIP = {
  ship: {
    hull: 100,
    maxHull: 100,
    shields: 50,
    maxShields: 50,
    fuel: 0,
    maxFuel: 0,
    evasion: 10,
    sensorStrength: 10,
    enginePower: 10,
    mass: 8,
    agility: 6,
    pilotSkill: 2,
    weaponDamage: 10,
    cargoCapacity: 20
  },
  modules: {
    engines: ["basic_thrusters"],
    scanners: ["short_range_scanner"],
    weapons: ["civilian_lasers"],
    utilities: []
  },
  cargo: [],
  inventory: [],
  crew: [],
  statuses: [],
  risk: {
    pirateAttention: 0
  }
};
function createPlayerState(galaxy2, options) {
  const reputation = seedReputation(galaxy2, 0);
  const fuel = options.startingFuel ?? 10;
  const maxFuel = 15;
  return {
    name: options.name,
    roleId: options.roleId,
    credits: options.startingCredits ?? 500,
    fuel,
    maxFuel,
    ...STARTING_SHIP,
    reputation,
    ship: {
      ...STARTING_SHIP.ship,
      fuel,
      maxFuel
    }
  };
}
function seedReputation(galaxy2, baseline) {
  const rep = {};
  for (const faction of galaxy2.factions || []) rep[faction.id] = baseline;
  const tracks = reputation_engine_default.reputationSystem.tracks;
  for (const track of tracks) rep[track.id] = baseline;
  return rep;
}
function adjustCredits(player, delta) {
  player.credits = Math.max(0, player.credits + delta);
}
function adjustFuel(player, delta) {
  const newFuel = Math.max(0, Math.min(player.maxFuel, player.fuel + delta));
  player.fuel = newFuel;
  player.ship.fuel = Math.min(player.ship.maxFuel, newFuel);
}
function applyDamage(player, severity) {
  const map = { light: 10, medium: 25, heavy: 40 };
  const dmg = map[severity] ?? 0;
  const preShield = player.ship.shields;
  player.ship.shields = Math.max(0, preShield - dmg);
  const spill = Math.max(0, dmg - preShield);
  player.ship.hull = Math.max(0, player.ship.hull - spill);
}
function adjustReputation(player, delta) {
  for (const k of Object.keys(delta)) {
    if (!(k in player.reputation)) continue;
    player.reputation[k] += delta[k];
  }
}
function addStatus(player, status) {
  if (!player.statuses.includes(status)) player.statuses.push(status);
}
function addCargo(player, item) {
  const used = player.cargo.reduce((sum, c) => sum + c.quantity, 0);
  if (used + item.quantity > player.ship.cargoCapacity) return false;
  const existing = player.cargo.find((c) => c.commodityId === item.commodityId);
  if (existing) existing.quantity += item.quantity;
  else player.cargo.push({ ...item });
  return true;
}
function removeCargo(player, commodityId, quantity) {
  const existing = player.cargo.find((c) => c.commodityId === commodityId);
  if (!existing || existing.quantity < quantity) return false;
  existing.quantity -= quantity;
  if (existing.quantity === 0) {
    player.cargo = player.cargo.filter((c) => c.commodityId !== commodityId);
  }
  return true;
}
function removeRandomCargo(player, rng2) {
  if (!player.cargo.length) return;
  const idx = Math.floor(rng2() * player.cargo.length);
  const target = player.cargo[idx];
  if (target.quantity > 1) target.quantity -= 1;
  else player.cargo.splice(idx, 1);
}
function appendLog(game2, message, data) {
  game2.log.push({
    cycle: game2.time.cycle,
    sectorId: game2.currentSectorId,
    message,
    data
  });
}

// career_system.json
var career_system_default = {
  careers: [
    {
      id: "trader",
      name: "Trader",
      description: "Buy low, sell high. Manipulate markets, move goods, and build commercial influence.",
      coreStats: {
        relevant: ["merchantSkill", "sensorStrength", "cargoSpace"],
        riskStats: ["evasion", "shieldStrength"]
      },
      actions: [
        "buy_goods",
        "sell_goods",
        "take_trade_contract",
        "check_market_trends",
        "negotiate_prices"
      ],
      missions: [
        {
          id: "contract_delivery",
          name: "Delivery Contract",
          description: "Deliver goods to another system within a time limit.",
          riskLevel: "low",
          baseReward: 350,
          reputationEffects: {
            merchant: 2,
            navy: 0,
            pirate: -1,
            syndicate: 0,
            miner: 0,
            researcher: 0
          }
        },
        {
          id: "speculation_run",
          name: "Speculation Run",
          description: "Buy a trending commodity and sell it before the price crashes.",
          riskLevel: "medium",
          baseReward: 0,
          dynamicReward: "market_surge_multiplier"
        }
      ],
      illegal: false,
      alignment: "neutral"
    },
    {
      id: "miner",
      name: "Miner",
      description: "Extract resources from asteroids, gas giants, ruins, and anomalies.",
      coreStats: {
        relevant: ["miningYield", "enginePower", "sensorStrength"],
        riskStats: ["shieldStrength", "repairRate"]
      },
      actions: [
        "mine_asteroids",
        "deploy_drones",
        "harvest_gas",
        "survey_rich_fields"
      ],
      missions: [
        {
          id: "mining_contract",
          name: "Mining Contract",
          description: "Mine specific minerals for a faction.",
          riskLevel: "low",
          baseReward: 200,
          reputationEffects: {
            merchant: 0,
            navy: 0,
            pirate: 0,
            syndicate: 0,
            miner: 3,
            researcher: 0
          }
        },
        {
          id: "deep_core_mining",
          name: "Deep-Core Extraction",
          description: "Risky mining of rare minerals in a dangerous zone.",
          riskLevel: "high",
          baseReward: 700,
          dangerModifiers: ["radiation", "unstable_rocks"]
        }
      ],
      illegal: false,
      alignment: "neutral"
    },
    {
      id: "smuggler",
      name: "Smuggler",
      description: "Run illegal goods past law enforcement, use stealth, and make massive profit with high risk.",
      coreStats: {
        relevant: ["stealth", "evasion", "merchantSkill"],
        riskStats: ["shieldStrength", "morale"]
      },
      actions: [
        "run_blockade",
        "bribe_official",
        "hide_cargo",
        "enter_black_market"
      ],
      missions: [
        {
          id: "contraband_run",
          name: "Contraband Run",
          description: "Deliver illegal goods to a black market.",
          riskLevel: "high",
          baseReward: 1200,
          reputationEffects: {
            merchant: -1,
            navy: -4,
            pirate: 3,
            syndicate: 4,
            miner: 0,
            researcher: 0
          }
        },
        {
          id: "undercover_delivery",
          name: "Undercover Drop",
          description: "Deliver encrypted package to a Syndicate contact.",
          riskLevel: "medium",
          baseReward: 700
        }
      ],
      illegal: true,
      alignment: "chaos"
    },
    {
      id: "pirate",
      name: "Pirate",
      description: "Attack civilian ships, steal cargo, demand tribute, and carve out a violent life.",
      coreStats: {
        relevant: ["weaponDamage", "boardingSkill", "intimidation"],
        riskStats: ["hullIntegrity", "shieldStrength"]
      },
      actions: [
        "scan_for_targets",
        "ambush_trader",
        "board_ship",
        "demand_tribute"
      ],
      missions: [
        {
          id: "raid_caravan",
          name: "Raid Supply Caravan",
          description: "Ambush a merchant convoy.",
          riskLevel: "high",
          baseReward: "loot_based",
          dangerModifiers: ["navy_response"]
        },
        {
          id: "intimidation_run",
          name: "Tribute Demand",
          description: "Force a small ship to surrender goods.",
          riskLevel: "low",
          baseReward: 150
        }
      ],
      illegal: true,
      alignment: "chaos"
    },
    {
      id: "bounty_hunter",
      name: "Bounty Hunter",
      description: "Hunt criminals, track fugitives, and bring targets in dead or alive.",
      coreStats: {
        relevant: ["weaponDamage", "sensorStrength", "enginePower"],
        riskStats: ["hullIntegrity", "repairRate"]
      },
      actions: [
        "check_bounty_board",
        "track_target",
        "engage_criminal",
        "bring_in_target"
      ],
      missions: [
        {
          id: "low_value_bounty",
          name: "Low-Value Target",
          description: "Capture a small-time smuggler.",
          riskLevel: "low",
          baseReward: 200,
          reputationEffects: {
            navy: 2,
            merchant: 1,
            pirate: -2
          }
        },
        {
          id: "high_value_fugitive",
          name: "High-Value Fugitive",
          description: "Track and eliminate a dangerous war criminal.",
          riskLevel: "very_high",
          baseReward: 1200,
          dangerModifiers: ["target_ship_upgrades", "escape_attempts"]
        }
      ],
      illegal: false,
      alignment: "law"
    },
    {
      id: "navy",
      name: "Navy Officer",
      description: "Serve the government, patrol borders, escort fleets, and uphold the law.",
      coreStats: {
        relevant: ["weaponDamage", "shieldStrength", "enginePower"],
        riskStats: ["hullIntegrity", "morale"]
      },
      actions: [
        "patrol_sector",
        "inspect_ship",
        "escort_convoy",
        "fight_pirates"
      ],
      missions: [
        {
          id: "sector_patrol",
          name: "Sector Patrol",
          description: "Scan ships and enforce the law.",
          riskLevel: "medium",
          baseReward: 300,
          reputationEffects: {
            navy: 3,
            merchant: 1,
            pirate: -3
          }
        },
        {
          id: "frontline_conflict",
          name: "Frontline Conflict",
          description: "Join a battle in a contested sector.",
          riskLevel: "very_high",
          baseReward: 800
        }
      ],
      illegal: false,
      alignment: "law"
    },
    {
      id: "explorer",
      name: "Explorer",
      description: "Chart the unknown, study anomalies, and uncover ancient ruins.",
      coreStats: {
        relevant: ["sensorStrength", "scienceSkill", "enginePower"],
        riskStats: ["hullIntegrity", "repairRate"]
      },
      actions: [
        "scan_anomaly",
        "chart_sector",
        "investigate_signal",
        "study_ruin"
      ],
      missions: [
        {
          id: "scan_wormhole",
          name: "Wormhole Survey",
          description: "Analyze a newly opened wormhole.",
          riskLevel: "high",
          baseReward: 500,
          reputationEffects: {
            researcher: 4
          }
        },
        {
          id: "ancient_ruin",
          name: "Ancient Ruin Dive",
          description: "Explore the remnants of a lost civilization.",
          riskLevel: "very_high",
          baseReward: 1e3,
          rareFindChance: 0.2
        }
      ],
      illegal: false,
      alignment: "neutral"
    },
    {
      id: "salvager",
      name: "Salvager",
      description: "Scour the galaxy for derelicts, wrecks, and hidden tech.",
      coreStats: {
        relevant: ["tractorBeamPower", "sensorStrength", "repairRate"],
        riskStats: ["hullIntegrity"]
      },
      actions: [
        "scan_for_wrecks",
        "board_derelict",
        "salvage_components",
        "tow_ship"
      ],
      missions: [
        {
          id: "wreck_salvage",
          name: "Wreck Salvage",
          description: "Strip components from a destroyed freighter.",
          riskLevel: "medium",
          baseReward: 350
        },
        {
          id: "derelict_flagship",
          name: "Derelict Flagship",
          description: "Explore a massive drifting warship.",
          riskLevel: "very_high",
          baseReward: 900,
          hazards: ["rogue_ai", "electrical_arcs", "unstable_hull"]
        }
      ],
      illegal: false,
      alignment: "neutral"
    }
  ]
};

// src/systems/MissionSystem.ts
var CAREER_DATA = career_system_default;
var MISSION_CONFIG = {
  durationByRisk: {
    low: 6,
    medium: 10,
    high: 14,
    very_high: 18
  },
  lootBasedReward: 450,
  dynamicRewardBase: {
    market_surge_multiplier: 400
  },
  riskRewardMultiplier: {
    low: 1,
    medium: 1.2,
    high: 1.5,
    very_high: 1.8
  }
};
function getMissionDefinition(missionId) {
  for (const career of CAREER_DATA.careers) {
    const found = career.missions.find((m) => m.id === missionId);
    if (found) return { definition: found, careerId: career.id };
  }
  return null;
}
function createMissionOffer(game2, missionId, sectorId, rng2, autoAccept = true) {
  const found = getMissionDefinition(missionId);
  if (!found) return null;
  const { definition, careerId } = found;
  const reward = calculateReward(definition);
  const instance = {
    instanceId: `${missionId}_${Math.floor(rng2.next() * 1e6)}`,
    missionId,
    careerId,
    sectorId,
    status: autoAccept ? "accepted" : "offered",
    expiresIn: MISSION_CONFIG.durationByRisk[definition.riskLevel],
    reward,
    reputationEffects: definition.reputationEffects,
    notes: []
  };
  game2.activeMissions.push(instance);
  appendLog(game2, `Mission ${autoAccept ? "accepted" : "offered"}: ${definition.name}`, {
    missionId,
    reward,
    expiresIn: instance.expiresIn
  });
  return instance;
}
function failMission(game2, instanceId, reason) {
  const idx = game2.activeMissions.findIndex((m) => m.instanceId === instanceId);
  if (idx === -1) return null;
  const mission = game2.activeMissions[idx];
  game2.activeMissions.splice(idx, 1);
  mission.status = "failed";
  game2.failedMissions.push(mission);
  appendLog(game2, `Mission failed: ${mission.missionId}`, { reason, instanceId });
  return mission;
}
function tickMissions(game2) {
  for (const mission of game2.activeMissions) {
    if (typeof mission.expiresIn === "number") {
      mission.expiresIn = Math.max(0, mission.expiresIn - 1);
    }
  }
  const expired = game2.activeMissions.filter((m) => m.expiresIn === 0);
  for (const mission of expired) {
    failMission(game2, mission.instanceId, "expired");
  }
}
function calculateReward(definition) {
  let reward = 0;
  if (typeof definition.baseReward === "number") {
    reward = definition.baseReward;
  } else if (definition.baseReward === "loot_based") {
    reward = MISSION_CONFIG.lootBasedReward;
  }
  if (definition.dynamicReward) {
    const extra = MISSION_CONFIG.dynamicRewardBase[definition.dynamicReward] ?? 0;
    reward += extra;
  }
  const riskMultiplier = MISSION_CONFIG.riskRewardMultiplier[definition.riskLevel] ?? 1;
  return Math.round(reward * riskMultiplier);
}

// src/systems/RiskSystem.ts
function applyMiningRisk(player, sector, mode) {
  const base = mode === "safe" ? 3 : 7;
  const dangerMod = sector.danger === "high" ? 2 : sector.danger === "medium" ? 1.3 : 1;
  player.risk.pirateAttention = Math.min(100, player.risk.pirateAttention + base * dangerMod);
}
function applyTravelRisk(player, sector) {
  const travelBump = sector.danger === "high" ? 4 : sector.danger === "medium" ? 2 : 1;
  player.risk.pirateAttention = Math.min(100, player.risk.pirateAttention + travelBump);
}
function pirateEncounterChance(player, sector) {
  const base = sector.danger === "high" ? 0.25 : sector.danger === "medium" ? 0.15 : 0.05;
  const riskBonus = player.risk.pirateAttention / 200;
  return Math.min(0.9, base + riskBonus);
}
function decayPirateAttention(player, amount) {
  player.risk.pirateAttention = Math.max(0, player.risk.pirateAttention - amount);
}

// src/systems/math.ts
function clamp(min, max, v) {
  return Math.max(min, Math.min(max, v));
}

// src/systems/EscapeSystem.ts
function calculateFleeChance(ctx) {
  const { playerShip, enemySpeedRating, sectorDanger, pirateAttention } = ctx;
  const engine = playerShip.enginePower;
  const agility = playerShip.agility;
  const mass = playerShip.mass;
  const pilot = playerShip.pilotSkill ?? 0;
  const speedScore = (engine + agility * 0.7 + pilot * 0.5) / Math.max(1, mass);
  const enemyScore = enemySpeedRating;
  let base = 0.5 + (speedScore - enemyScore) * 0.05;
  const hullRatio = playerShip.hull / Math.max(1, playerShip.maxHull);
  const damagePenalty = (1 - hullRatio) * 0.2;
  const dangerPenalty = sectorDanger === "high" ? 0.15 : sectorDanger === "medium" ? 0.07 : 0;
  const riskPenalty = pirateAttention / 100 * 0.15;
  return clamp(0.1, 0.9, base - damagePenalty - dangerPenalty - riskPenalty);
}

// src/systems/EventEngine.ts
var config = event_system_default.events;
var EFFECT_CONFIG = {
  lootCredits: { small: 200, medium: 400, large: 800 },
  mineralsYield: { small: 3, large: 6 }
};
var EventEngine = class {
  constructor(galaxy2) {
    this.galaxy = galaxy2;
  }
  rollEvent(game2, sector, rng2, choiceId) {
    const pool = this.filterEligibleEvents(game2, sector);
    if (!pool.length) return null;
    const picked = this.weightedPick(pool, game2.player, sector, rng2);
    if (!picked) return null;
    const choice = this.pickChoice(picked, game2.player, rng2, choiceId);
    if (!choice) return null;
    const handled = this.handleRunIfNeeded(picked, choice, game2, sector, rng2);
    if (handled) return handled;
    const outcomeType = this.pickOutcomeBranch(choice, rng2);
    const branch = choice.outcomes[outcomeType];
    if (!branch) return null;
    this.applyEffects(game2, branch.effects, rng2);
    return {
      eventId: picked.id,
      category: picked.category,
      description: picked.description,
      choiceId: choice.id,
      outcome: outcomeType,
      delta: branch.effects
    };
  }
  rollSpecificEvent(game2, eventId, sector, rng2, choiceId) {
    const evt = config.eventPool.find((e) => e.id === eventId);
    if (!evt || !this.meetsRequirements(evt.requirements, game2, sector)) return null;
    const choice = this.pickChoice(evt, game2.player, rng2, choiceId);
    if (!choice) return null;
    const handled = this.handleRunIfNeeded(evt, choice, game2, sector, rng2);
    if (handled) return handled;
    const outcomeType = this.pickOutcomeBranch(choice, rng2);
    const branch = choice.outcomes[outcomeType];
    if (!branch) return null;
    this.applyEffects(game2, branch.effects, rng2);
    return {
      eventId: evt.id,
      category: evt.category,
      description: evt.description,
      choiceId: choice.id,
      outcome: outcomeType,
      delta: branch.effects
    };
  }
  filterEligibleEvents(game2, sector) {
    return config.eventPool.filter((evt) => this.meetsRequirements(evt.requirements, game2, sector));
  }
  meetsRequirements(req, game2, sector) {
    if (!req) return true;
    if (sector && req.sectorDanger === "medium_or_high" && !(sector.danger === "medium" || sector.danger === "high")) {
      return false;
    }
    if (sector && req.sectorLaw === "medium_or_high" && !(sector.law === "medium" || sector.law === "high")) {
      return false;
    }
    if (typeof req.enginePower === "number" && game2.player.ship.enginePower < req.enginePower) {
      return false;
    }
    if (typeof req.syndicateRepMin === "number" && (game2.player.reputation["syndicate"] ?? 0) < req.syndicateRepMin) {
      return false;
    }
    return true;
  }
  weightedPick(events, player, sector, rng2) {
    const weights = events.map((evt) => this.computeWeight(evt, player, sector));
    const total = weights.reduce((a, b) => a + b, 0);
    if (total <= 0) return null;
    let roll = rng2.next() * total;
    for (let i = 0; i < events.length; i++) {
      roll -= weights[i];
      if (roll <= 0) return events[i];
    }
    return events[events.length - 1];
  }
  computeWeight(evt, player, sector) {
    const base = config.globalWeights[evt.category] ?? 1;
    const roleWeight = config.roleWeights[player.roleId]?.[evt.category] ?? 1;
    const sectorMod = sector.localModifiers?.events?.[evt.category] ?? 1;
    const rarityMod = evt.rarity ? 1 / evt.rarity : 1;
    return base * roleWeight * sectorMod * rarityMod;
  }
  handleRunIfNeeded(evt, choice, game2, sector, rng2) {
    if (evt.id !== "pirate_encounter_lane" || choice.id !== "run") return null;
    const fleeChance = calculateFleeChance({
      playerShip: game2.player.ship,
      enemySpeedRating: 7,
      sectorDanger: sector.danger,
      pirateAttention: game2.player.risk.pirateAttention
    });
    const roll = rng2.next();
    const success = roll < fleeChance;
    if (success) {
      game2.player.ship.fuel = Math.max(0, game2.player.ship.fuel - 1);
      decayPirateAttention(game2.player, 15);
      this.applyEffects(
        game2,
        {
          log: `You burn hard, engines screaming. The pirate falls behind. (Escape ${(fleeChance * 100).toFixed(0)}%)`
        },
        rng2
      );
    } else {
      game2.player.ship.hull = Math.max(0, game2.player.ship.hull - 5);
      game2.player.risk.pirateAttention = Math.min(100, game2.player.risk.pirateAttention + 5);
      this.applyEffects(
        game2,
        {
          log: `You try to run, but the pirate tags you as you fail to break away. (Escape ${(fleeChance * 100).toFixed(0)}%)`,
          flag: "enemy_advantage"
        },
        rng2
      );
    }
    return {
      eventId: evt.id,
      category: evt.category,
      description: evt.description,
      choiceId: choice.id,
      outcome: success ? "success" : "failure",
      delta: { fleeChance, roll, success }
    };
  }
  pickChoice(evt, player, rng2, choiceId) {
    const fakeGame = { player };
    const eligible = evt.choices.filter((c) => this.meetsRequirements(c.requirements, fakeGame, null));
    if (!eligible.length) return null;
    if (choiceId) {
      const found = eligible.find((c) => c.id === choiceId);
      if (found) return found;
    }
    const idx = Math.floor(rng2.next() * eligible.length);
    return eligible[idx];
  }
  pickOutcomeBranch(choice, rng2) {
    const successChance = choice.outcomes.success.chance;
    const failureChance = choice.outcomes.failure?.chance ?? 0;
    const total = successChance + failureChance;
    const roll = rng2.next() * total;
    return roll <= successChance ? "success" : "failure";
  }
  applyEffects(game2, effects, rng2) {
    if (typeof effects.credits === "number") {
      adjustCredits(game2.player, effects.credits);
    }
    if (typeof effects.fuel === "number") {
      adjustFuel(game2.player, effects.fuel);
    }
    if (effects.damage) {
      applyDamage(game2.player, effects.damage);
    }
    if (typeof effects.cargoLossChance === "number" && rng2.next() <= effects.cargoLossChance) {
      removeRandomCargo(game2.player, rng2.next);
    }
    if (effects.repChanges) {
      adjustReputation(game2.player, effects.repChanges);
    }
    if (effects.loot) {
      adjustCredits(game2.player, EFFECT_CONFIG.lootCredits[effects.loot] ?? 0);
    }
    if (effects.minerals) {
      adjustCredits(game2.player, EFFECT_CONFIG.mineralsYield[effects.minerals] * 20);
    }
    if (effects.mission_offer) {
      createMissionOffer(game2, effects.mission_offer, game2.currentSectorId, rng2);
    }
    if (effects.flag) {
      addStatus(game2.player, effects.flag);
    }
    if (effects.log) {
      game2.log.push({
        cycle: game2.time.cycle,
        sectorId: game2.currentSectorId,
        message: effects.log
      });
    }
    if (typeof effects.riskAdjust?.pirateAttention === "number") {
      game2.player.risk.pirateAttention = Math.max(
        0,
        Math.min(100, game2.player.risk.pirateAttention + effects.riskAdjust.pirateAttention)
      );
    }
  }
};

// src/systems/TravelSystem.ts
function createNewGame(galaxy2, options, seed2) {
  const startingSector = galaxy2.sectors[0];
  const player = createPlayerState(galaxy2, {
    name: options.name,
    roleId: options.roleId,
    startingCredits: options.startingCredits,
    startingFuel: options.startingFuel
  });
  return {
    seed: seed2,
    galaxy: galaxy2,
    currentSectorId: startingSector.id,
    player,
    time: { cycle: 0 },
    activeMissions: [],
    completedMissions: [],
    failedMissions: [],
    log: []
  };
}
function travelToSector(game2, destinationId, rng2, eventEngine2) {
  const current = findSector(game2.galaxy, game2.currentSectorId);
  const dest = findSector(game2.galaxy, destinationId);
  const path = findPath(game2.galaxy, current.id, dest.id);
  if (!path.length) throw new Error(`No route from ${current.id} to ${dest.id}`);
  let fuelSpent = 0;
  const segments = [];
  let lastEvent = null;
  for (let i = 0; i < path.length - 1; i++) {
    const fromId = path[i];
    const toId = path[i + 1];
    const fromSector = findSector(game2.galaxy, fromId);
    const toSector = findSector(game2.galaxy, toId);
    adjustFuel(game2.player, -1);
    fuelSpent += 1;
    game2.currentSectorId = toSector.id;
    game2.time.cycle += 1;
    applyTravelRisk(game2.player, toSector);
    tickMissions(game2);
    let segmentEvent = null;
    const pirateChance = pirateEncounterChance(game2.player, toSector);
    if (rng2.next() < pirateChance) {
      segmentEvent = eventEngine2.rollSpecificEvent(game2, "pirate_encounter_lane", toSector, rng2);
      decayPirateAttention(game2.player, 20);
    } else {
      segmentEvent = eventEngine2.rollEvent(game2, toSector, rng2) || null;
    }
    if (segmentEvent) lastEvent = segmentEvent;
    segments.push({ fromId, toId, event: segmentEvent });
  }
  appendLog(game2, `Traveled to ${dest.name}`, {
    from: current.id,
    to: dest.id,
    event: lastEvent?.eventId ?? null
  });
  return {
    path: { from: current, to: dest },
    fuelSpent,
    event: lastEvent || void 0,
    segments
  };
}
function findSector(galaxy2, sectorId) {
  const sector = galaxy2.sectors.find((s) => s.id === sectorId);
  if (!sector) {
    throw new Error(`Unknown sector ${sectorId}`);
  }
  return sector;
}
function findPath(galaxy2, startId, destId) {
  if (startId === destId) return [startId];
  const queue = [startId];
  const visited = /* @__PURE__ */ new Set([startId]);
  const prev = /* @__PURE__ */ new Map();
  while (queue.length) {
    const current = queue.shift();
    const sector = findSector(galaxy2, current);
    for (const neighbor of sector.connections) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      prev.set(neighbor, current);
      queue.push(neighbor);
      if (neighbor === destId) break;
    }
  }
  if (!visited.has(destId)) return [];
  const path = [];
  let at = destId;
  while (at) {
    path.push(at);
    const p = prev.get(at);
    if (!p) break;
    at = p;
  }
  return path.reverse();
}

// src/data/commodities.json
var commodities_default = {
  commodities: [
    { id: "ore_aurite", name: "Aurite Ore", basePrice: 40, tags: ["mineral", "industrial"], legality: "legal", category: "minerals" },
    { id: "ore_ironite", name: "Ironite Ore", basePrice: 10, tags: ["mineral", "common"], legality: "legal", category: "minerals" },
    { id: "food_rations", name: "Food Rations", basePrice: 8, tags: ["food", "basic"], legality: "legal", category: "food" },
    { id: "med_supplies", name: "Medical Supplies", basePrice: 30, tags: ["medical"], legality: "restricted", category: "medical" },
    { id: "ai_cores", name: "AI Cores", basePrice: 120, tags: ["high_tech", "illegal"], legality: "illegal", category: "tech" }
  ]
};

// src/systems/EconomySystem.ts
var ECONOMY_CONFIG = {
  volumePriceAdjust: {
    none: 0,
    low: 0.04,
    medium: 0,
    high: -0.05,
    very_high: -0.1
  },
  volatilityRange: {
    none: 0,
    low: 0.05,
    medium: 0.12,
    high: 0.22
  },
  illegalMarkup: {
    n_a: 0.05,
    very_low: 0.25,
    low: 0.18,
    medium: 0.12,
    high: 0.05,
    very_high: -0.05
  },
  supplyMultiplier: 0.85,
  demandMultiplier: 1.2,
  sellSpread: 0.9,
  availabilityBase: 4,
  availabilityVolumeBonus: {
    none: -2,
    low: -1,
    medium: 0,
    high: 1,
    very_high: 2
  },
  miningYieldByRichness: {
    low: 2,
    medium: 4,
    high: 6,
    very_high: 8
  },
  miningCreditPerUnit: 40,
  miningFuelCost: 1,
  smuggling: {
    basePayoutPerUnit: 120,
    detectionByLaw: {
      none: 0.05,
      very_low: 0.08,
      low: 0.15,
      medium: 0.28,
      high: 0.4
    },
    toleranceModifier: {
      n_a: -0.02,
      very_low: 0.08,
      low: 0.05,
      medium: 0,
      high: -0.05,
      very_high: -0.1
    },
    repEffect: {
      threshold: 30,
      reduction: 0.08
      // detection reduction if syndicate rep high
    },
    penalties: {
      navyRep: -4,
      creditsFine: 200
    },
    rewards: {
      syndicateRep: 2,
      pirateRep: 1
    }
  }
};
var CATALOG = commodities_default.commodities;
var COMMODITY_BY_ID = new Map(CATALOG.map((c) => [c.id, c]));
function getMarketQuotes(game2, sector, cycleOverride) {
  if (!sector.marketProfile || !sector.marketProfile.isTradeHub) return [];
  const cycle = cycleOverride ?? game2.time.cycle;
  return CATALOG.map((commodity) => {
    const priceRng = makePriceRng(game2.seed, sector.id, commodity.id, cycle);
    return deriveQuote(commodity, sector, priceRng);
  });
}
function tradeCommodity(game2, sector, order) {
  const quotes = getMarketQuotes(game2, sector);
  if (!quotes.length) {
    return {
      commodity: { id: order.commodityId, name: "Unknown", basePrice: 0, legality: "legal", category: "", tags: [] },
      unitPrice: 0,
      total: 0,
      success: false,
      reason: "no_market"
    };
  }
  const quote = quotes.find((q) => q.commodity.id === order.commodityId);
  if (!quote) {
    return {
      commodity: { id: order.commodityId, name: "Unknown", basePrice: 0, legality: "legal", category: "", tags: [] },
      unitPrice: 0,
      total: 0,
      success: false,
      reason: "unknown_commodity"
    };
  }
  const total = quote.buyPrice * order.quantity;
  if (order.type === "buy") {
    if (game2.player.credits < total) {
      return { commodity: quote.commodity, unitPrice: quote.buyPrice, total, success: false, reason: "insufficient_credits" };
    }
    const added = addCargo(game2.player, {
      id: quote.commodity.id,
      name: quote.commodity.name,
      quantity: order.quantity,
      legality: quote.commodity.legality
    });
    if (!added) {
      return { commodity: quote.commodity, unitPrice: quote.buyPrice, total, success: false, reason: "insufficient_cargo_space" };
    }
    adjustCredits(game2.player, -total);
  } else {
    const removed = removeCargo(game2.player, order.commodityId, order.quantity);
    if (!removed) {
      return { commodity: quote.commodity, unitPrice: quote.sellPrice, total: quote.sellPrice * order.quantity, success: false, reason: "insufficient_inventory" };
    }
    adjustCredits(game2.player, quote.sellPrice * order.quantity);
  }
  appendLog(game2, `Trade ${order.type}`, {
    commodity: order.commodityId,
    quantity: order.quantity,
    unitPrice: order.type === "buy" ? quote.buyPrice : quote.sellPrice,
    total: order.type === "buy" ? total : quote.sellPrice * order.quantity
  });
  return {
    commodity: quote.commodity,
    unitPrice: order.type === "buy" ? quote.buyPrice : quote.sellPrice,
    total: order.type === "buy" ? total : quote.sellPrice * order.quantity,
    success: true,
    notes: quote.notes
  };
}
function resolveMining(game2, sector, rng2, mode = "safe") {
  const richness = sector.resourceRichness.minerals;
  const yieldUnits = ECONOMY_CONFIG.miningYieldByRichness[richness] ?? 0;
  const variance = rng2.next() * 0.3 + 0.85;
  const finalYield = Math.max(1, Math.round(yieldUnits * variance));
  const commodityId = richness === "very_high" || richness === "high" ? "ore_aurite" : "ore_ironite";
  adjustFuel(game2.player, -ECONOMY_CONFIG.miningFuelCost);
  applyMiningRisk(game2.player, sector, mode);
  const used = game2.player.cargo.reduce((sum, c) => sum + c.quantity, 0);
  const free = Math.max(0, game2.player.ship.cargoCapacity - used);
  const collected = Math.min(finalYield, free);
  const overflow = finalYield - collected;
  if (collected > 0) {
    addCargo(game2.player, { commodityId, quantity: collected });
  }
  appendLog(game2, "Mining operation", {
    sector: sector.id,
    richness,
    collected,
    overflow,
    commodityId
  });
  return {
    commodityId,
    collected,
    overflow,
    fuelSpent: ECONOMY_CONFIG.miningFuelCost
  };
}
function deriveQuote(commodity, sector, rng2) {
  const demandMulti = computeDemandMultiplier(commodity, sector);
  const supplyMulti = computeSupplyMultiplier(commodity, sector);
  const priceMultiplier = computePriceMultiplier(
    commodity,
    sector,
    sector.marketProfile.volume,
    sector.marketProfile.priceVolatility,
    sector.marketProfile.illegalTolerance,
    rng2
  );
  const buyPrice = Math.max(1, Math.round(commodity.basePrice * priceMultiplier * demandMulti * supplyMulti));
  const sellPrice = Math.max(1, Math.round(buyPrice * ECONOMY_CONFIG.sellSpread));
  const notes = [];
  if (demandMulti > 1) notes.push("Local demand raises price");
  if (supplyMulti < 1) notes.push("Local supply lowers price");
  if (commodity.legality !== "legal") notes.push("Risk: restricted/illegal cargo");
  const availability = ECONOMY_CONFIG.availabilityBase + (ECONOMY_CONFIG.availabilityVolumeBonus[sector.marketProfile.volume] ?? 0) + (supplyMulti < 1 ? 1 : 0) - (commodity.legality !== "legal" ? 1 : 0);
  return {
    commodity,
    buyPrice,
    sellPrice,
    availability: Math.max(1, availability),
    legality: commodity.legality,
    notes
  };
}
function computePriceMultiplier(commodity, sector, volume, volatility, tolerance, rng2) {
  const volumeAdj = ECONOMY_CONFIG.volumePriceAdjust[volume] ?? 0;
  const swing = ECONOMY_CONFIG.volatilityRange[volatility] ?? 0;
  const variance = swing ? rng2.next() * swing * 2 - swing : 0;
  const illegalAdj = commodity.legality === "illegal" || commodity.legality === "restricted" ? ECONOMY_CONFIG.illegalMarkup[tolerance] ?? 0 : 0;
  return 1 + volumeAdj + variance + illegalAdj;
}
function computeDemandMultiplier(commodity, sector) {
  const demand = sector.marketProfile?.demandProfile;
  if (!demand) return 1;
  let multiplier = 1;
  if (demand.byTag) {
    for (const tag of commodity.tags) {
      multiplier *= demand.byTag[tag] ?? 1;
    }
  }
  if (demand.byCommodity && demand.byCommodity[commodity.id]) {
    multiplier *= demand.byCommodity[commodity.id];
  }
  return multiplier;
}
function computeSupplyMultiplier(commodity, sector) {
  const supply = sector.marketProfile?.supplyProfile;
  if (!supply) return 1;
  let multiplier = 1;
  if (supply.byTag) {
    for (const tag of commodity.tags) {
      multiplier *= supply.byTag[tag] ?? 1;
    }
  }
  if (supply.byCommodity && supply.byCommodity[commodity.id]) {
    multiplier *= supply.byCommodity[commodity.id];
  }
  return multiplier > 1 ? 1 / multiplier : multiplier;
}
function makePriceRng(baseSeed, sectorId, commodityId, cycle) {
  const combined = hashSeed(`${baseSeed}:${sectorId}:${commodityId}:${cycle}`);
  return createRng(combined);
}
function hashSeed(input) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h) || 1;
}

// src/systems/CombatSystem.ts
var COMBAT_CONFIG = {
  baseEnemyByDanger: {
    low: { attack: 12, defense: 10 },
    medium: { attack: 18, defense: 16 },
    high: { attack: 24, defense: 20 }
  },
  strengthModifier: {
    light: -4,
    standard: 0,
    elite: 6
  },
  enemyTypeAggression: {
    pirate: 4,
    navy: 6,
    smuggler: -2,
    bounty_target: 2
  },
  roleBonuses: {
    navy: { attack: 4, defense: 4 },
    bounty_hunter: { attack: 4, defense: 2 },
    pirate: { attack: 3, defense: 1 },
    smuggler: { attack: 1, defense: 1 },
    trader: { attack: 0, defense: 0 },
    miner: { attack: 0, defense: 1 },
    explorer: { attack: 1, defense: 1 },
    salvager: { attack: 1, defense: 2 }
  },
  moduleBonuses: {
    weapons: {
      civilian_lasers: 2
    },
    engines: {
      basic_thrusters: 1
    },
    scanners: {
      short_range_scanner: 1
    }
  },
  defenseMitigationFactor: 0.25,
  playerDefenseBoost: 0.1,
  repAggression: {
    pirate: { threshold: 40, attackMod: -4 },
    navy: { threshold: -30, attackMod: 4 }
  },
  lootByStrength: {
    light: 120,
    standard: 260,
    elite: 520
  },
  repOnWin: {
    pirate: { pirate: -3, navy: 1 },
    navy: { pirate: -1, navy: 2 },
    smuggler: { merchant: 1, pirate: -1 },
    bounty_target: { navy: 1, merchant: 1 }
  }
};
function resolveCombat(game2, scenario, rng2) {
  const strength = scenario.strength ?? "standard";
  const baseEnemy = COMBAT_CONFIG.baseEnemyByDanger[scenario.sector.danger] ?? COMBAT_CONFIG.baseEnemyByDanger.medium;
  const enemyAttack = baseEnemy.attack + COMBAT_CONFIG.strengthModifier[strength] + (COMBAT_CONFIG.enemyTypeAggression[scenario.enemyType] ?? 0) + reputationAggressionMod(game2, scenario.enemyType);
  const enemyDefense = baseEnemy.defense + COMBAT_CONFIG.strengthModifier[strength];
  const playerAttack = computePlayerAttack(game2);
  const playerDefense = computePlayerDefense(game2);
  const playerRoll = rng2.int(1, 100) + playerAttack + Math.floor(playerDefense * COMBAT_CONFIG.playerDefenseBoost);
  const enemyRoll = rng2.int(1, 100) + enemyAttack - Math.floor(playerDefense * COMBAT_CONFIG.defenseMitigationFactor);
  let outcome = "win";
  let damageTaken;
  let creditsDelta = 0;
  let repChanges;
  if (playerRoll >= enemyRoll) {
    creditsDelta = COMBAT_CONFIG.lootByStrength[strength] ?? 0;
    adjustCredits(game2.player, creditsDelta);
    repChanges = COMBAT_CONFIG.repOnWin[scenario.enemyType];
    if (repChanges) adjustReputation(game2.player, repChanges);
  } else {
    outcome = "loss";
    const margin = enemyRoll - playerRoll;
    damageTaken = margin > 25 ? "heavy" : margin > 12 ? "medium" : "light";
    applyDamage(game2.player, damageTaken);
    creditsDelta = 0;
  }
  appendLog(game2, "Combat resolved", {
    enemyType: scenario.enemyType,
    strength,
    outcome,
    playerRoll,
    enemyRoll,
    damageTaken,
    creditsDelta
  });
  return { outcome, playerRoll, enemyRoll, damageTaken, creditsDelta, repChanges };
}
function computePlayerAttack(game2) {
  const ship = game2.player.ship;
  const base = ship.weaponDamage + Math.floor(ship.enginePower / 2);
  const roleBonus = COMBAT_CONFIG.roleBonuses[game2.player.roleId]?.attack ?? 0;
  const moduleBonus = (game2.player.modules.weapons ?? []).reduce(
    (sum, mod) => sum + (COMBAT_CONFIG.moduleBonuses.weapons[mod] ?? 0),
    0
  ) + (game2.player.modules.engines ?? []).reduce(
    (sum, mod) => sum + (COMBAT_CONFIG.moduleBonuses.engines[mod] ?? 0),
    0
  );
  return base + roleBonus + moduleBonus;
}
function computePlayerDefense(game2) {
  const ship = game2.player.ship;
  const base = ship.shields + Math.floor(ship.evasion / 2);
  const roleBonus = COMBAT_CONFIG.roleBonuses[game2.player.roleId]?.defense ?? 0;
  const moduleBonus = (game2.player.modules.scanners ?? []).reduce(
    (sum, mod) => sum + (COMBAT_CONFIG.moduleBonuses.scanners[mod] ?? 0),
    0
  );
  return base + roleBonus + moduleBonus;
}
function reputationAggressionMod(game2, enemyType) {
  if (enemyType === "pirate") {
    const rep = game2.player.reputation["pirate"] ?? 0;
    if (rep >= COMBAT_CONFIG.repAggression.pirate.threshold) {
      return COMBAT_CONFIG.repAggression.pirate.attackMod;
    }
  }
  if (enemyType === "navy") {
    const rep = game2.player.reputation["navy"] ?? 0;
    if (rep <= COMBAT_CONFIG.repAggression.navy.threshold) {
      return COMBAT_CONFIG.repAggression.navy.attackMod;
    }
  }
  return 0;
}

// web/client.ts
var galaxyConfig = galaxy_generator_default;
var seed = 1337;
var rng = createRng(seed);
var galaxy = new GalaxyGenerator(galaxyConfig, seed).generate("medium");
var game = createNewGame(galaxy, { name: "Browser Captain", roleId: "trader" }, seed);
var eventEngine = new EventEngine(galaxy);
var dom = {
  sectorName: getEl("sector-name"),
  sectorMeta: getEl("sector-meta"),
  connections: getEl("connections"),
  playerStats: getEl("player-stats"),
  log: getEl("log"),
  missions: getEl("missions"),
  guidance: getEl("guidance"),
  marketList: getEl("market-list")
};
function getEl(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el;
}
function travel(toId) {
  try {
    const res = travelToSector(game, toId, rng, eventEngine);
    const sector = findSector2(toId);
    if (res.event) {
      appendLogLine(
        `Event: ${res.event.eventId} (${res.event.category}) outcome=${res.event.outcome}`
      );
    }
    appendLogLine(`Travelled to ${sector.name}`);
  } catch (err) {
    appendLogLine(`Travel failed: ${err.message}`);
  }
  render();
}
function mine() {
  const sector = findSector2(game.currentSectorId);
  const result = resolveMining(game, sector, rng, "safe");
  appendLogLine(`Mined ${result.collected} ${result.commodityId}${result.overflow ? ` (overflow ${result.overflow})` : ""}`);
  render();
}
function buyCommodity(commodityId) {
  const sector = findSector2(game.currentSectorId);
  const result = tradeCommodity(game, sector, { type: "buy", commodityId, quantity: 1 });
  appendLogLine(
    result.success ? `Bought ${commodityId} @ ${result.unitPrice}` : `Buy failed: ${result.reason}`
  );
  render();
}
function sellCommodity(commodityId) {
  const sector = findSector2(game.currentSectorId);
  const result = tradeCommodity(game, sector, { type: "sell", commodityId, quantity: 1 });
  appendLogLine(
    result.success ? `Sold ${commodityId} @ ${result.unitPrice}` : `Sell failed: ${result.reason}`
  );
  render();
}
function combatSample() {
  const sector = findSector2(game.currentSectorId);
  const result = resolveCombat(game, { sector, enemyType: "pirate" }, rng);
  appendLogLine(
    `Combat vs pirate: ${result.outcome} (you ${result.playerRoll} / foe ${result.enemyRoll})`
  );
  render();
}
function findSector2(id) {
  const sector = galaxy.sectors.find((s) => s.id === id);
  if (!sector) throw new Error(`Unknown sector ${id}`);
  return sector;
}
function appendLogLine(line) {
  game.log.push({
    cycle: game.time.cycle,
    sectorId: game.currentSectorId,
    message: line
  });
}
function render() {
  const sector = findSector2(game.currentSectorId);
  dom.sectorName.textContent = sector.name;
  dom.sectorMeta.textContent = [
    `Type: ${sector.typeId}`,
    `Faction: ${sector.factionId ?? "Unclaimed"}`,
    `Danger: ${sector.danger}`,
    `Law: ${sector.law}`
  ].join(" | ");
  dom.connections.innerHTML = "";
  sector.connections.forEach((connId) => {
    const connSector = findSector2(connId);
    const button = document.createElement("button");
    button.textContent = connSector.name;
    button.onclick = () => travel(connId);
    dom.connections.appendChild(button);
  });
  dom.playerStats.textContent = [
    `Credits: ${game.player.credits}`,
    `Fuel: ${game.player.fuel}/${game.player.maxFuel}`,
    `Hull: ${game.player.ship.hull}/${game.player.ship.maxHull}`,
    `Shields: ${game.player.ship.shields}/${game.player.ship.maxShields}`,
    `Role: ${game.player.roleId}`
  ].join(" | ");
  dom.missions.textContent = game.activeMissions.map((m) => `${m.missionId} (${m.status}) exp:${m.expiresIn ?? "-"} reward:${m.reward}`).join("\n");
  renderMarket(sector);
  dom.log.textContent = game.log.slice(-10).map((l) => `[c${l.cycle}] ${l.message}`).join("\n");
  dom.guidance.textContent = buildGuidance(sector);
}
function wireControls() {
  getEl("btn-mine").addEventListener("click", () => mine());
  getEl("btn-combat").addEventListener("click", () => combatSample());
}
wireControls();
render();
function renderMarket(sector) {
  dom.marketList.innerHTML = "";
  const quotes = getMarketQuotes(game, sector);
  if (!quotes.length) {
    dom.marketList.textContent = "No market in this sector.";
    return;
  }
  quotes.forEach((q) => {
    const row = document.createElement("div");
    row.textContent = `${q.commodity.name}: buy ${q.buyPrice} / sell ${q.sellPrice}`;
    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Buy +1";
    buyBtn.onclick = () => buyCommodity(q.commodity.id);
    const sellBtn = document.createElement("button");
    sellBtn.textContent = "Sell -1";
    sellBtn.onclick = () => sellCommodity(q.commodity.id);
    row.appendChild(buyBtn);
    row.appendChild(sellBtn);
    dom.marketList.appendChild(row);
  });
}
function buildGuidance(sector) {
  const messages = [];
  messages.push("Click a connection to travel. Each jump advances time and can trigger events.");
  if (sector.tags.includes("mining")) messages.push("This is a mining sector; run Mine for steady credits.");
  if (sector.tags.includes("black_market")) messages.push("Black market here: smuggling pays, but law/rep risks rise.");
  if (sector.tags.includes("core")) messages.push("Core systems: safer travel, better markets, fewer pirate events.");
  if (game.player.fuel / game.player.maxFuel < 0.3) messages.push("Fuel is low; travel sparingly until you reach a safer hub.");
  if (game.player.ship.hull < game.player.ship.maxHull * 0.5) messages.push("Hull is damaged; avoid combat until repaired.");
  if (!messages.length) messages.push("Explore freely: travel, mine, trade, or test combat.");
  return messages.join("\n\u2022 ");
}
//# sourceMappingURL=bundle.js.map
