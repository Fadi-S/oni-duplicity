import * as React from "react";
import { DuplicantDirection } from "../types";
export interface HeadProps {
    className?: string;
    ordinal: number;
    direction?: DuplicantDirection;
}
type Head = React.FC<HeadProps>;
export default Head;
