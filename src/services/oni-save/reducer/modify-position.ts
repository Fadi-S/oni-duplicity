import {Action} from "redux";
import {SaveGame, Vector3} from "@/parser/main";

import {OniSaveState, defaultOniSaveState} from "../state";

import {
    isModifyPositionAction
} from "../actions/modify-position";

import {
    requireGameObject,
    replaceGameObject,
    tryModifySaveGame, changeStatePosition
} from "./utils";

export default function modifyPositionReducer(
    state: OniSaveState = defaultOniSaveState,
    action: Action
): OniSaveState {
    if (!isModifyPositionAction(action)) {
        return state;
    }

    let {gameObjectId, position} = action.payload;

    return tryModifySaveGame(state, saveGame =>
        performModifyPosition(
            saveGame,
            gameObjectId,
            position
        )
    );
}

function performModifyPosition(
    saveGame: SaveGame,
    gameObjectId: number,
    position: Vector3
) {
    let gameObject = requireGameObject(saveGame, gameObjectId);

    gameObject = changeStatePosition(gameObject, position);

    saveGame = replaceGameObject(saveGame, gameObject);
    return saveGame;
}
