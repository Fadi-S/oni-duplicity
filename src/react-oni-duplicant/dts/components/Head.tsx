import React from 'react';
import { DuplicantDirection } from '../types';
import Shape from "@/react-oni-duplicant/dts/components/Shape";
export interface HeadProps {
    className?: string;
    ordinal: number;
    direction?: DuplicantDirection;
}

const Head: React.FC<HeadProps> = ({ className, ordinal, direction = DuplicantDirection.Right }) => {
    return (
        <Shape shape="headshape" ordinal={ordinal} direction={direction} className={className} />
    );
};

export default Head;
