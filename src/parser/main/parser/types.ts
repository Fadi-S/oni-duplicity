import {isObject} from "lodash";

export interface ParserInstruction {
  type: string;
  isMeta?: boolean;
}

export function isMetaInstruction(inst: ParserInstruction): boolean {
  return isObject(inst) && !!inst.isMeta;
}
