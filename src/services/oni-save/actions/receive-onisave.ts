import { createAction } from "@reduxjs/toolkit";
import { SaveGame } from "@/parser/main";
import { LoadingStatus } from "../state";

// Action creators using createAction
export const receiveOniSaveBegin = createAction(
    "oni-save/receive:begin",
    (operation: LoadingStatus.Loading | LoadingStatus.Saving, clearExisting?: boolean) => ({
      payload: { clearExisting },
      meta: { operation }
    })
);

export const receiveOniSaveError = createAction(
    "oni-save/receive:error",
    (error: Error, operation: LoadingStatus.Loading | LoadingStatus.Saving) => ({
      payload: error,
      meta: { operation }
    })
);

export const receiveOniSaveSuccess = createAction(
    "oni-save/receive:success",
    (oniSave: SaveGame, operation: LoadingStatus.Loading | LoadingStatus.Saving) => ({
      payload: oniSave,
      meta: { operation }
    })
);

// Type for all receive actions
export type ReceiveOniSaveAction =
    | ReturnType<typeof receiveOniSaveBegin>
    | ReturnType<typeof receiveOniSaveError>
    | ReturnType<typeof receiveOniSaveSuccess>;

// Type guard (optional - Redux Toolkit's matchers are usually sufficient)
export function isReceiveOniSaveAction(action: any): action is ReceiveOniSaveAction {
  return [
    receiveOniSaveBegin.type,
    receiveOniSaveError.type,
    receiveOniSaveSuccess.type
  ].includes(action?.type);
}