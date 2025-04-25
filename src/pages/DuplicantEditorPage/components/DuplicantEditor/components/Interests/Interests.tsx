import { MinionSkillGroupNames, MinionResumeBehavior, getHashedString, HashedString } from "@/parser/main";
import { findIndex, find, difference } from "lodash";
import { useTranslation } from "react-i18next";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import AddAptitudeButton from "./components/AddAptitudeButton";
import React from "react";

export interface InterestsProps {
  gameObjectId: number;
}

const Interests = ({ gameObjectId }: InterestsProps) => {
  const { t } = useTranslation();
  const { templateData: { AptitudeBySkillGroup }, onTemplateDataModify } = useBehavior(gameObjectId, MinionResumeBehavior);

  const availableAptitudes = MinionSkillGroupNames.filter(
      aptitudeName => aptitudeValue(AptitudeBySkillGroup, aptitudeName) === 0
  );

  const selectedAptitudes = difference(MinionSkillGroupNames, availableAptitudes);

  function removeAptitude(aptitudeName: string) {
    const hashStr = getHashedString(aptitudeName);
    const index = findIndex(AptitudeBySkillGroup, x => x[0].hash === hashStr.hash);
    if (index === -1) return;

    onTemplateDataModify({
      AptitudeBySkillGroup: [
        ...AptitudeBySkillGroup.slice(0, index),
        ...AptitudeBySkillGroup.slice(index + 1)
      ]
    });
  }

  function addAptitude(aptitudeName: string) {
    const hashStr = getHashedString(aptitudeName);
    const index = findIndex(AptitudeBySkillGroup, x => x[0].hash === hashStr.hash);

    if (index === -1) {
      onTemplateDataModify({
        AptitudeBySkillGroup: [...AptitudeBySkillGroup, [hashStr, 1]]
      });
    } else {
      onTemplateDataModify({
        AptitudeBySkillGroup: [
          ...AptitudeBySkillGroup.slice(0, index),
          [hashStr, 1],
          ...AptitudeBySkillGroup.slice(index + 1)
        ]
      });
    }
  }

  return (
      <div className="flex flex-row flex-wrap">
        {selectedAptitudes.map((aptitudeName, i) => (
            <div key={i} className="m-1 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800">
          <span className="mr-2">
            {t(`oni:todo-trans.aptitudes.${aptitudeName}`, { defaultValue: aptitudeName })}
          </span>
              <button
                  onClick={() => removeAptitude(aptitudeName)}
                  className="text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </div>
        ))}
        <AddAptitudeButton
            className="m-1"
            availableAptitudes={availableAptitudes}
            onAddAptitude={addAptitude}
        />
      </div>
  );
};

export default Interests;

function aptitudeValue(aptitudes: [HashedString, number][], aptitudeName: string): number {
  const hash = getHashedString(aptitudeName).hash;
  const aptitude = find(aptitudes, x => x[0].hash === hash);
  return aptitude ? aptitude[1] : 0;
}