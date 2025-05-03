import { Action } from "redux";
import { SaveGame } from "@/parser/main";
import { set as setFp } from "lodash/fp";

import { OniSaveState, defaultOniSaveState } from "../state";

import { isModifyRawAction } from "../actions/modify-raw";

import { tryModifySaveGame } from "./utils";

export default function modifyRawReducer(
  state: OniSaveState = defaultOniSaveState,
  action: Action
): OniSaveState {
  if (!isModifyRawAction(action)) {
    return state;
  }

  let { path, data } = action.payload;

  return tryModifySaveGame(state, saveGame =>
    performModifyRaw(saveGame, path, data)
  );
}

function performModifyRaw(saveGame: SaveGame, path: string[], data: any) {
  return setFp(path, data, saveGame);
}
