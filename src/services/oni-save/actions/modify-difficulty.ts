import { Action } from "redux";
import { QualityLevelSettings } from "@/parser/main";

export const ACTION_ONISAVE_MODIFY_DIFFICULTY = "oni-save/modify-difficulty";
export const modifyDifficulty = (
  difficultyType: QualityLevelSettings[0],
  value: string
) => ({
  type: ACTION_ONISAVE_MODIFY_DIFFICULTY as typeof ACTION_ONISAVE_MODIFY_DIFFICULTY,
  payload: { difficultyType, value }
});
export type ModifyDifficultyAction = ReturnType<typeof modifyDifficulty>;
export function isModifyDifficultyAction(
  action: Action
): action is ModifyDifficultyAction {
  return action.type === ACTION_ONISAVE_MODIFY_DIFFICULTY;
}
