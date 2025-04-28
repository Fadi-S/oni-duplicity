import React from 'react';
import { DuplicantDirection } from '../types';
import Shape from "@/react-oni-duplicant/dts/components/Shape";

export interface EyesProps {
    className?: string;
    ordinal: number;
    direction?: DuplicantDirection;
}

const Eyes: React.FC<EyesProps> = ({ className, ordinal, direction = DuplicantDirection.Right }) => {
    return (
        <Shape shape="eyes" ordinal={ordinal} direction={direction} className={className} />
    );
};

export default Eyes;
