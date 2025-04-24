import { AnyAction } from "redux";
import {GeyserTypeInGameNames, GeyserTypeNames} from "@/parser/main";

export const ACTION_ONISAVE_CHANGE_GEYSER_TYPE = "oni-save/change-geyser-type";

/**
 * Changes the game object type of the given game object id.
 *
 * This is a dangerous operation, and intended only for swapping geysers.
 */
export const changeGeyserType = (gameObjectId: number, geyserType: string) => {
  // @ts-ignore
  const geyserName = GeyserTypeInGameNames[geyserType];

  return ({
    type: ACTION_ONISAVE_CHANGE_GEYSER_TYPE as typeof ACTION_ONISAVE_CHANGE_GEYSER_TYPE,
    payload: {gameObjectId, geyserType, geyserName}
  });
};
export type ChangeGeyserTypeAction = ReturnType<typeof changeGeyserType>;
export function isChangeGeyserTypeAction(
  action: AnyAction
): action is ChangeGeyserTypeAction {
  return action.type === ACTION_ONISAVE_CHANGE_GEYSER_TYPE;
}
