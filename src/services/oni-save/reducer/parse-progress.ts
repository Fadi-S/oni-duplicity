import { Action } from "redux";

import { isParseProgressAction } from "../actions/parse-progress";

import { OniSaveState, defaultOniSaveState } from "../state";

export default function parseProgressReducer(
  state: OniSaveState = defaultOniSaveState,
  action: Action
): OniSaveState {
  if (!isParseProgressAction(action)) {
    return state;
  }

  return {
    ...state,
    loadingProgressMessage: action.payload.message
  };
}
