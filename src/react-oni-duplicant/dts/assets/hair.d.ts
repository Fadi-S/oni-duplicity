import { DuplicantDirection } from "../types";
import { KAnimBuildSymbolFrame } from "./build";
export declare function isValidHair(ordinal: number): boolean;
export declare function requireHair(ordinal: number, direction: DuplicantDirection): any;
export declare function getHairFrame(ordinal: number, direction: DuplicantDirection): KAnimBuildSymbolFrame | null;
