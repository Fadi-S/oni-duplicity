import React from 'react';
import { DuplicantDirection } from '../types';
import Shape from "@/react-oni-duplicant/dts/components/Shape";

export interface BodyProps {
    className?: string;
    ordinal: number;
    direction?: DuplicantDirection;
}

const Body: React.FC<BodyProps> = ({ className, ordinal, direction = DuplicantDirection.Right }) => {
    return (
        <Shape shape="body" ordinal={ordinal} direction={direction} className={className} />
    );
};

export default Body;
