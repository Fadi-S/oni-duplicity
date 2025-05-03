import { DuplicantContainer, Hair, Head, Eyes, Body } from "@/react-oni-duplicant";
import React from "react";

export interface PortraitProps {
  className?: string;
  clickable?: boolean;
  hairOrdinal: number;
  headOrdinal: number;
  eyesOrdinal: number;
  bodyOrdinal: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Portrait = ({
                    className,
                    hairOrdinal,
                    headOrdinal,
                    eyesOrdinal,
                    bodyOrdinal,
                    clickable,
                    onClick
                  }: PortraitProps) => (
    <div
        className={`relative w-[110px] h-[140px] ${className}`}
        onClick={onClick}
    >
      <div className="absolute top-[85px] left-[56px] w-[250px] h-[250px] scale-[0.4] origin-top-left">
        <DuplicantContainer>
          <Body className={clickable ? "cursor-pointer" : ""} ordinal={bodyOrdinal} />
          <Head className={clickable ? "cursor-pointer" : ""} ordinal={headOrdinal} />
          <Eyes className={clickable ? "cursor-pointer" : ""} ordinal={eyesOrdinal} />
          <Hair className={clickable ? "cursor-pointer" : ""} ordinal={hairOrdinal} />
        </DuplicantContainer>
      </div>
    </div>
);

export default Portrait;