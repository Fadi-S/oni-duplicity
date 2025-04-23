import { GeyserType } from "@/parser/main";

import { GameObjectBehavior } from "@/parser/main";

import { BehaviorName } from "./types";

export const GeyserBehavior: BehaviorName<GeyserBehavior> = "Geyser";
export interface GeyserBehavior extends GameObjectBehavior {
  name: "Geyser";
  templateData: {
    configuration?: {
      typeId: GeyserType;
      rateRoll: number;
      iterationLengthRoll: number;
      iterationPercentRoll: number;
      yearLengthRoll: number;
      yearPercentRoll: number;
    };
  };
}

export interface GeyserName extends GameObjectBehavior {
  name: "UserNameable";
  templateData: {
    savedName: string;
  };
}

export const GeyserName: BehaviorName<GeyserName> = "UserNameable";