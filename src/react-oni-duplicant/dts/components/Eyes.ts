import * as React from "react";
export interface EyesProps {
    className?: string;
    ordinal: number;
}
type Eyes = React.FC<EyesProps>;
export default Eyes;
