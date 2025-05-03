import { Action } from "redux";
import {FileMeta} from "@/services/oni-save/state";

export const ACTION_ONISAVE_LOAD = "oni-save/load";
export function loadOniSave(data: number[], file: FileMeta, bypassVersionCheck = false) {
    return ({
        type: ACTION_ONISAVE_LOAD as typeof ACTION_ONISAVE_LOAD,
        payload: {
            data, bypassVersionCheck, file
        },
    });
};
export type LoadOniSaveAction = ReturnType<typeof loadOniSave>;
export function isLoadOniSaveAction(
  action: Action
): action is LoadOniSaveAction {
  return action.type === ACTION_ONISAVE_LOAD;
}
