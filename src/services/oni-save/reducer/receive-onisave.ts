import { LoadingStatus, OniSaveState, defaultOniSaveState } from "../state";
import {
  receiveOniSaveBegin,
  receiveOniSaveError,
  receiveOniSaveSuccess,
} from "../actions/receive-onisave";
import { Action } from "@reduxjs/toolkit";

export default function receiveOniSaveReducer(
    state: OniSaveState = defaultOniSaveState,
    action: Action
): OniSaveState {
  if (receiveOniSaveBegin.match(action)) {
    return {
      ...state,
      loadError: null,
      loadingStatus: action.meta.operation,
      loadingProgressMessage: null,
      saveGame: action.payload.clearExisting ? null : state.saveGame,
      isMock: false,
    };
  }

  if (receiveOniSaveError.match(action)) {
    return {
      ...state,
      loadingStatus: LoadingStatus.Error,
      loadError: action.payload,
    };
  }

  if (receiveOniSaveSuccess.match(action)) {
    return {
      ...state,
      loadingStatus: LoadingStatus.Ready,
      loadingFile: null,
      loadingProgressMessage: null,
      loadError: null,
      saveGame: action.payload,
      isModified:
          action.meta.operation === LoadingStatus.Saving
              ? false
              : state.isModified,
    };
  }

  return state;
}