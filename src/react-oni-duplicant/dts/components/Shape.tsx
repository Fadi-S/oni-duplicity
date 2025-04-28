import React, {useEffect, useState} from 'react';
import { DuplicantDirection } from '../types';
import {requireShape} from "@/react-oni-duplicant/dts/utils";
import classnames from "classnames";
export interface ShapeProps {
    className?: string;
    ordinal: number;
    shape: string;
    direction?: DuplicantDirection;
}

const Shape: React.FC<ShapeProps> = ({ shape, className, ordinal, direction = DuplicantDirection.Right }) => {
    const loadImage = async () => {
        const image = await import(requireShape(shape, ordinal, direction));

        return image.default;
    };
    const [imageSrc, setImageSrc] = useState<string | undefined>();

    useEffect(() => {
        loadImage().then(setImageSrc);
    }, []);

    return (
        <div
            className={classnames(className, "size-64")}
            data-ordinal={ordinal}
            data-direction={direction}
        >
            <img src={imageSrc} />
        </div>
    );
};

export default Shape;
