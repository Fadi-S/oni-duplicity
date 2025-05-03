import { MinionResumeBehavior, MinionSkillNames } from "@/parser/main";
import { find, findIndex } from "lodash";
import { Trans } from "react-i18next";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import React from "react";

export interface MasteriesProps {
  gameObjectId: number;
}

const Masteries = ({ gameObjectId }: MasteriesProps) => {
  const { templateData: { MasteryBySkillID }, onTemplateDataModify } = useBehavior(gameObjectId, MinionResumeBehavior);

  function onChangeMastery(skillName: string, value: boolean) {
    const index = findIndex(MasteryBySkillID, x => x[0] === skillName);
    if (value) {
      if (index !== -1) {
        onTemplateDataModify({
          MasteryBySkillID: [
            ...MasteryBySkillID.slice(0, index),
            [skillName, true],
            ...MasteryBySkillID.slice(index + 1)
          ]
        });
      } else {
        onTemplateDataModify({
          MasteryBySkillID: [...MasteryBySkillID, [skillName, true]]
        });
      }
    } else if (index !== -1) {
      onTemplateDataModify({
        MasteryBySkillID: [
          ...MasteryBySkillID.slice(0, index),
          ...MasteryBySkillID.slice(index + 1)
        ]
      });
    }
  }

  return (
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Trans i18nKey="duplicant_skills.noun_titlecase">Skill</Trans>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Trans i18nKey="duplicant_skills.mastery_titlecase">Mastery</Trans>
            </th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {MinionSkillNames.map(skillName => (
              <tr key={skillName}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {skillName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                      type="checkbox"
                      checked={getMastery(MasteryBySkillID, skillName)}
                      onChange={(e) => onChangeMastery(skillName, e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default Masteries;

function getMastery(masteries: [string, boolean][], mastery: string): boolean {
  const entry = find(masteries, x => x[0] === mastery);
  return entry ? entry[1] : false;
}