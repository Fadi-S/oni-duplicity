import { Action } from "redux";
import { SimHashName } from "@/parser/main";

export const ACTION_ONISAVE_DELETE_LOOSE_MATERIAL =
  "oni-save/delete-loose-material";
export const deleteLooseMaterial = (materialType?: SimHashName) => ({
  type: ACTION_ONISAVE_DELETE_LOOSE_MATERIAL as typeof ACTION_ONISAVE_DELETE_LOOSE_MATERIAL,
  payload: { materialType }
});
export type DeleteLooseMaterialAction = ReturnType<typeof deleteLooseMaterial>;
export function isDeleteLooseMaterialAction(
  action: Action
): action is DeleteLooseMaterialAction {
  return action.type === ACTION_ONISAVE_DELETE_LOOSE_MATERIAL;
}
