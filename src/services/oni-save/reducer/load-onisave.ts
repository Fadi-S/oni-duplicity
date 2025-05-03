import { Action } from "redux";

import { OniSaveState, defaultOniSaveState, LoadingStatus } from "../state";
import { isLoadOniSaveAction } from "../actions/load-onisave";

export default function loadExampleSaveReducer(
  state: OniSaveState = defaultOniSaveState,
  action: Action
): OniSaveState {
  if (!isLoadOniSaveAction(action)) {
    return state;
  }

  const { file } = action.payload;

  return {
    ...state,
    loadingFile: {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
    },
  };
}
