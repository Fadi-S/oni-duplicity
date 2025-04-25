import { Action } from "redux";
import { HashedString, GeyserBehavior, GeyserName, SaveGame } from "@/parser/main";

import { OniSaveState, defaultOniSaveState } from "../state";

import { isChangeGeyserTypeAction } from "../actions/change-geyser-type";

import {
  addGameObject,
  removeGameObject,
  changeStateBehaviorData,
  requireGameObject,
  tryModifySaveGame
} from "./utils";

export default function changeGeyserTypeReducer(
  state: OniSaveState = defaultOniSaveState,
  action: Action
): OniSaveState {
  if (!isChangeGeyserTypeAction(action)) {
    return state;
  }

  const { gameObjectId, geyserType, geyserName } = action.payload;

  return tryModifySaveGame(state, saveGame =>
    changeGeyserType(saveGame, gameObjectId, geyserType, geyserName)
  );
}

function changeGeyserType(
  saveGame: SaveGame,
  gameObjectId: number,
  geyserType: string,
  geyserName: string
): SaveGame {
  let gameObject = requireGameObject(saveGame, gameObjectId);

  gameObject = changeStateBehaviorData(
    gameObject,
    GeyserBehavior,
    "templateData",
    templateData => ({
      ...templateData,
      configuration: {
        ...templateData.configuration!,
        typeId: HashedString(geyserType)
      }
    })
  );

  gameObject = changeStateBehaviorData(
      gameObject,
      GeyserName,
      "templateData",
      templateData => {
        const lastPart = templateData.savedName.split(" ").slice(-1)[0];
        return ({
          ...templateData,
          savedName: geyserName + " " + lastPart,
        });
      }
  );

  saveGame = removeGameObject(saveGame, gameObjectId);
  saveGame = addGameObject(saveGame, `GeyserGeneric_${geyserType}`, gameObject);

  return saveGame;
}
