import { DuplicantDirection } from "../types";
import { KAnimBuildSymbolFrame } from "./build";
export declare function isValidHead(ordinal: number): boolean;
export declare function requireHead(ordinal: number, direction: DuplicantDirection): any;
export declare function getHeadFrame(ordinal: number, direction: DuplicantDirection): KAnimBuildSymbolFrame | null;
