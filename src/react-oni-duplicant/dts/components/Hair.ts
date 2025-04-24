import * as React from "react";
import { DuplicantDirection } from "../types";
export interface HairProps {
    className?: string;
    ordinal: number;
    direction?: DuplicantDirection;
}
type Hair = React.FC<HairProps>;
export default Hair;
