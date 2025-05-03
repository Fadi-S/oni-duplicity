import { Action } from "redux";
import {Vector3} from "@/parser/main";

export const ACTION_ONISAVE_MODIFY_POSITION = "oni-save/modify-position";
export const modifyPosition = (
  gameObjectId: number,
  position: Vector3,
) => ({
  type: ACTION_ONISAVE_MODIFY_POSITION as typeof ACTION_ONISAVE_MODIFY_POSITION,
  payload: { gameObjectId, position }
});
export type ModifyPositionAction = ReturnType<typeof modifyPosition>;

export function isModifyPositionAction(
  action: Action
): action is ModifyPositionAction {
  return action.type === ACTION_ONISAVE_MODIFY_POSITION;
}
