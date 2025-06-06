import { HashedString, createHashedStringEnum } from "../../data-types";

export const GeyserTypeNames = [
  "steam",
  "hot_steam",
  "hot_water",
  "slush_water",
  "filthy_water",
  "salt_water",
  "small_volcano",
  "big_volcano",
  "liquid_co2",
  "hot_co2",
  "hot_hydrogen",
  "hot_po2",
  "slimy_po2",
  "chlorine_gas",
  "methane",
  "molten_copper",
  "molten_iron",
  "molten_gold",
  "molten_aluminum",
  "molten_tungsten",
  "molten_niobium",
  // "NiobiumGeyser",
  // "MethaneGeyser",
  "molten_cobalt",
  "oil_drip",
  "liquid_sulfur",
  "molten_steel",
  "molten_glass",
  // "liquid_coolant",
  // "liquid_ethanol",
  "slush_salt_water"
] as const;

const GeyserTypeInGameNamesArray = [
  "Cool Steam Vent",
  "Steam Vent",
  "Water Geyser",
  "Cool Slush Geyser",
  "Polluted Water Vent",
  "Salt Water Geyser",
  "Minor Volcano",
  "Volcano",
  "Carbon Dioxide Geyser",
  "Carbon Dioxide Vent",
  "Hydrogen Vent",
  "Hot Polluted Oxygen Vent",
  "Infectious Polluted Oxygen Vent",
  "Chlorine Gas Vent",
  "Natural Gas Vent",
  "Copper Volcano",
  "Iron Volcano",
  "Gold Volcano",
  "Aluminum Volcano",
  "Tungsten Volcano",
  "Niobium Volcano",
  // "NiobiumGeyser",
  // "MethaneGeyser",
  "Cobalt Volcano",
  "Leaky Oil Fissure",
  "Liquid Sulfur Geyser",
  "Steel Volcano",
  "Glass Volcano",
  // "liquid_coolant",
  // "liquid_ethanol",
  "Cool Salt Slush Geyser"
] as const;

export const GeyserTypeInGameNames = Object.fromEntries(
  GeyserTypeNames.map((name, index) => [name, GeyserTypeInGameNamesArray[index]])
);

export type GeyserType = HashedString;

export const GeyserType = createHashedStringEnum(GeyserTypeNames);
