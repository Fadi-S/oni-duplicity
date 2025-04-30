import { Hair, Head, Eyes } from "@/react-oni-duplicant";
import React from "react";

export interface HeadPortraitProps {
  className?: string;
  clickable?: boolean;
  hairOrdinal: number;
  headOrdinal: number;
  eyesOrdinal: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const HeadPortrait = ({
                        className,
                        hairOrdinal,
                        headOrdinal,
                        eyesOrdinal,
                        clickable,
                        onClick
                      }: HeadPortraitProps) => (
    <div
        className={`relative w-[110px] h-[100px] ${className}`}
        onClick={onClick}
    >
      <div className="absolute top-[85px] left-[56px] w-[250px] h-[250px] scale-[0.4] origin-top-left">
        <div>
          <Head
              className={clickable ? "cursor-pointer" : ""}
              ordinal={headOrdinal}
          />
          <Eyes
              className={clickable ? "cursor-pointer" : ""}
              ordinal={eyesOrdinal}
          />
          <Hair
              className={clickable ? "cursor-pointer" : ""}
              ordinal={hairOrdinal}
          />
        </div>
      </div>
    </div>
);

export default HeadPortrait;