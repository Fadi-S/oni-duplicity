import { useState } from "react";
import {
  AccessorizerBehavior,
  getAccessoryOfType,
  Accessory,
  AccessoryType,
  getAccessoryName,
  getIndexOfAccessoryType,
} from "@/parser/main";
import { merge, padStart } from "lodash";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import HeadPortrait from "./components/HeadPortrait";
import React from "react";

export interface AppearanceProps {
  gameObjectId: number;
}

const Appearance = ({ gameObjectId }: AppearanceProps) => {
  const [tab, setTab] = useState(0);
  const {
    templateData: { accessories },
    onTemplateDataModify,
  } = useBehavior(gameObjectId, AccessorizerBehavior);

  const hairOrdinal = getOrdinalOfType(accessories, "hair");
  const headOrdinal = getOrdinalOfType(accessories, "headshape");
  const eyesOrdinal = getOrdinalOfType(accessories, "eyes");

  function setAccessory(type: AccessoryType, ordinal: number) {
    const index = getIndexOfAccessoryType(accessories, type);
    if (index === -1) return;

    const accessoryMod: Record<number, Accessory> = {
      [index]: Accessory(`${type}_${padStart(String(ordinal), 3, "0")}`),
    };

    if (type === "hair") {
      const hatHair = getIndexOfAccessoryType(accessories, "hat_hair");
      if (hatHair !== -1) {
        accessoryMod[hatHair] = Accessory(`hat_hair_${padStart(String(ordinal), 3, "0")}`);
      }
      const hairAlways = getIndexOfAccessoryType(accessories, "hair_always");
      if (hairAlways !== -1) {
        accessoryMod[hairAlways] = Accessory(`hair_always_${padStart(String(ordinal), 3, "0")}`);
      }
    }

    if (type === "body") {
      const arm = getIndexOfAccessoryType(accessories, "arm");
      accessoryMod[arm] = Accessory(`arm_${padStart(String(ordinal), 3, "0")}`);
    }

    onTemplateDataModify({
      accessories: merge([], accessories, accessoryMod),
    });
  }

  function makeSetAccessory(type: AccessoryType, ordinal: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setAccessory(type, ordinal);
    };
  }

  return (
      <div className="flex flex-col w-full h-full">
        <div className="flex border-b border-gray-200">
          {["Hair", "Head", "Eyes"].map((label, index) => (
              <button
                  key={label}
                  className={`px-4 py-2 font-medium text-sm ${
                      tab === index
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setTab(index)}
              >
                {label}
              </button>
          ))}
        </div>

        <div className="flex-grow overflow-auto">
          {tab === 0 && (
              <div className="flex flex-wrap">
                {ordinalRange(33).map((ordinal) => (
                    <HeadPortrait
                        key={ordinal}
                        className="m-1"
                        hairOrdinal={ordinal}
                        headOrdinal={headOrdinal}
                        eyesOrdinal={eyesOrdinal}
                        clickable
                        onClick={makeSetAccessory("hair", ordinal)}
                    />
                ))}
              </div>
          )}
          {tab === 1 && (
              <div className="flex flex-wrap">
                {ordinalRange(4).map((ordinal) => (
                    <HeadPortrait
                        key={ordinal}
                        className="m-1"
                        hairOrdinal={hairOrdinal}
                        headOrdinal={ordinal}
                        eyesOrdinal={eyesOrdinal}
                        clickable
                        onClick={makeSetAccessory("headshape", ordinal)}
                    />
                ))}
              </div>
          )}
          {tab === 2 && (
              <div className="flex flex-wrap">
                {ordinalRange(5).map((ordinal) => (
                    <HeadPortrait
                        key={ordinal}
                        className="m-1"
                        hairOrdinal={hairOrdinal}
                        headOrdinal={headOrdinal}
                        eyesOrdinal={ordinal}
                        clickable
                        onClick={makeSetAccessory("eyes", ordinal)}
                    />
                ))}
              </div>
          )}
        </div>
      </div>
  );
};

export default Appearance;

function getOrdinalOfType(accessories: Accessory[], type: AccessoryType): number {
  const accessory = getAccessoryOfType(accessories, type);
  return accessory ? ordinalFromAccessory(accessory.guid.Guid) : 1;
}

function ordinalFromAccessory(guid: string) {
  const name = getAccessoryName(guid);
  return name ? Number(name.split("_").pop()) : 1;
}

function ordinalRange(length: number): number[] {
  return Array.from({ length }, (_, i) => i + 1);
}