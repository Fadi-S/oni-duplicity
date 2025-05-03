import {AccessorizerBehavior, getAccessoryOfType} from "@/parser/main";
import {Eyes, Hair, Head} from "@/react-oni-duplicant";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import React from "react";
import {DuplicantDirection} from "@/react-oni-duplicant/dts/types";

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
        <div>
            <Head
                ordinal={ordinalFromAccessory(
                    getAccessoryOfType(templateData.accessories, "headshape")!.guid.Guid
                )}
                className="absolute"
            />
            <Eyes
                ordinal={ordinalFromAccessory(
                    getAccessoryOfType(templateData.accessories, "eyes")!.guid.Guid
                )}
                className="absolute top-6 left-6"
            />
            <Hair
                ordinal={ordinalFromAccessory(
                    getAccessoryOfType(templateData.accessories, "hair")!.guid.Guid
                )}
                className="absolute -top-5 -left-6"
            />
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