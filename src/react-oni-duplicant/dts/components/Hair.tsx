// import * as React from "react";
// export interface HairProps {
//     className?: string;
//     ordinal: number;
// }
// type Hair = React.FC<HairProps>;
// export default Hair;

// src/react-oni-duplicant/Hair.tsx
import React from 'react';
import { DuplicantDirection } from '../types';

export interface HairProps {
    className?: string;
    ordinal: number;
    direction?: DuplicantDirection;
}

const Hair: React.FC<HairProps> = ({ className, ordinal, direction = 'Right' }) => {
    // TODO: replace with your actual Hair‑rendering logic or sprite lookup
    return (
        <div
            className={className}
            data-ordinal={ordinal}
            data-direction={direction}
        >
            {/* placeholder graphic */}
            <svg width="64" height="96" viewBox="0 0 64 96">
                <rect x="8" y="8" width="48" height="80" rx="8" ry="8" fill="#8c8c8c" />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#fff"
                >
                    Hair {ordinal}
                </text>
            </svg>
        </div>
    );
};

export default Hair;
