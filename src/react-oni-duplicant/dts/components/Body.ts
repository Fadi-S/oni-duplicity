import * as React from "react";
import { DuplicantDirection } from "../types";
export interface BodyProps {
    className?: string;
    ordinal: number;
    direction?: DuplicantDirection;
}

type Body = React.FC<BodyProps>;
export default Body;
