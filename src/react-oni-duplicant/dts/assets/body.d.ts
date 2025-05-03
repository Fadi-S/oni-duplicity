import { DuplicantDirection } from "../types";
import { KAnimBuildSymbolFrame } from "./build";
export declare function isValidBody(ordinal: number): boolean;
export declare function requireBody(ordinal: number, direction: DuplicantDirection): any;
export declare function getBodyFrame(ordinal: number): KAnimBuildSymbolFrame | null;
