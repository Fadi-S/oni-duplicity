import React from 'react';
import { DuplicantDirection } from '../types';
import Shape from "@/react-oni-duplicant/dts/components/Shape";

export interface HairProps {
    className?: string;
    ordinal: number;
    direction?: DuplicantDirection;
}

const Hair: React.FC<HairProps> = ({ className, ordinal, direction = DuplicantDirection.Right }) => {
    return (
        <Shape shape="hair" ordinal={ordinal} direction={direction} className={className} />
    );
};

export default Hair;
