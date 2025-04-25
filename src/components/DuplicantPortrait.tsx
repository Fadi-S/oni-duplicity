import { AccessorizerBehavior, getAccessoryOfType } from "@/parser/main";
import { DuplicantContainer, Hair, Head, Eyes } from "@/react-oni-duplicant";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import React from "react";

export interface DuplicantPortraitProps {
  gameObjectId: number;
  scale: number;
}

const DuplicantPortrait = ({ gameObjectId, scale }: DuplicantPortraitProps) => {
  const { templateData } = useBehavior(gameObjectId, AccessorizerBehavior);
  if (!templateData) {
    return <div>Error: No Data</div>;
  }

  return (
      <div
          className="relative"
          style={{ width: 240 * scale, height: 270 * scale }}
      >
        <div
            className="absolute"
            style={{
              left: 126 * scale,
              top: 150 * scale,
              width: 0,
              height: 0,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
        >
          <DuplicantContainer>
            <Head
                ordinal={ordinalFromAccessory(
                    getAccessoryOfType(templateData.accessories, "headshape")!.guid.Guid
                )}
            />
            <Eyes
                ordinal={ordinalFromAccessory(
                    getAccessoryOfType(templateData.accessories, "eyes")!.guid.Guid
                )}
            />
            <Hair
                ordinal={ordinalFromAccessory(
                    getAccessoryOfType(templateData.accessories, "hair")!.guid.Guid
                )}
            />
          </DuplicantContainer>
        </div>
      </div>
  );
};

function ordinalFromAccessory(guid: string) {
  const parts = guid.split(".");
  const name = parts[parts.length - 1];
  const lastParts = name.split("_");
  return Number(lastParts[lastParts.length - 1]);
}

export default DuplicantPortrait;