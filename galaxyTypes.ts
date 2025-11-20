// galaxyTypes.ts

export type DangerLevel = "low" | "medium" | "high";
export type LawLevel = "none" | "very_low" | "low" | "medium" | "high";

export interface Faction {
  id: string;
  name: string;
  type: string;
  description: string;
  reputationTrack: string;
  primaryAlignments: string[];
  tags: string[];
  color: string;
}

export interface ResourceRichness {
  minerals: string;
  gas: string;
  salvage: string;
  anomalies: string;
}

export interface MarketProfile {
  volume: string;
  priceVolatility: string;
  illegalTolerance: string;
  isTradeHub?: boolean;
  demandProfile?: {
    byTag?: Record<string, number>;
    byCommodity?: Record<string, number>;
  };
  supplyProfile?: {
    byTag?: Record<string, number>;
    byCommodity?: Record<string, number>;
  };
}

export interface SectorType {
  id: string;
  name: string;
  description: string;
  baseDanger: DangerLevel;
  baseLaw: LawLevel | "none" | "very_low";
  resourceRichness: ResourceRichness;
  marketProfile: MarketProfile;
  preferredFactions: string[];
  eventWeightModifiers: Record<string, number>;
  tags: string[];
}

export interface GalaxySizeConfig {
  sectors: number;
}

export interface FactionSpreadConfig {
  [sectorTypeId: string]: number; // weight
}

export interface FactionSpread {
  [factionId: string]: FactionSpreadConfig;
}

export interface ConnectionRules {
  minConnectionsPerSector: number;
  maxConnectionsPerSector: number;
  coreClusterSize: number;
  frontierDistanceMin: number;
  frontierDistanceMax: number;
}

export interface GalaxySizeMap {
  small: GalaxySizeConfig;
  medium: GalaxySizeConfig;
  large: GalaxySizeConfig;
}

export interface GeneratorConfig {
  galaxySize: GalaxySizeMap;
  defaultSize: keyof GalaxySizeMap;
  sectorTypeWeights: Record<string, number>;
  factionSpread: FactionSpread;
  connectionRules: ConnectionRules;
  lawDangerOverrides: {
    lawLevels: LawLevel[];
    dangerLevels: DangerLevel[];
    pirateStrongholdLaw: LawLevel;
    deadSystemLaw: LawLevel;
    coreTradeHubLaw: LawLevel;
  };
}

export interface GalaxyConfig {
  factions: Faction[];
  sectorTypes: SectorType[];
  generatorConfig: GeneratorConfig;
}

export interface SectorPOI {
  id: string;
  type: string;
  name: string;
  effects?: Record<string, unknown>;
}

export interface Sector {
  id: string;
  name: string;
  typeId: string;
  factionId: string | null;
  danger: DangerLevel;
  law: LawLevel;
  resourceRichness: ResourceRichness;
  marketProfile: MarketProfile;
  coords: { x: number; y: number };
  tags: string[];
  connections: string[];
  localModifiers?: {
    market?: Record<string, unknown>;
    events?: Record<string, number>;
  };
  pointsOfInterest?: SectorPOI[];
}

export interface Galaxy {
  id: string;
  size: keyof GalaxySizeMap;
  sectors: Sector[];
  factions?: Faction[];
}
