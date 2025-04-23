import { GameObjectBehavior } from "../game-object-behavior";
import { BehaviorName } from "./types";
export declare const KPrefabIDBehavior: BehaviorName<KPrefabIDBehavior>;
export interface KPrefabIDBehavior extends GameObjectBehavior {
    name: "KPrefabID";
    templateData: {
        InstanceID: KPrefabID;
    };
}
export type KPrefabID = number;
