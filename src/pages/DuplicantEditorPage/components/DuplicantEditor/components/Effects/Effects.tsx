import { AIEffectsBehavior } from "@/parser/main";
import { merge } from "lodash";
import { Trans } from "react-i18next";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import CommitTextField from "@/components/CommitTextField";
import AddEffectButton from "./components/AddEffectButton";
import React from "react";

export interface EffectsProps {
  gameObjectId: number;
}

const Effects = ({ gameObjectId }: EffectsProps) => {
  const { templateData, onTemplateDataModify } = useBehavior(gameObjectId, AIEffectsBehavior);

  return (
      <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Trans i18nKey="duplicant_effect.noun_titlecase">Effect</Trans>
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Trans i18nKey="time_cycles.noun_titlecase">Time (cycles)</Trans>
            </th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {templateData.saveLoadEffects.map(({ id, timeRemaining }, i) => (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Trans i18nKey={`oni:todo-trans.effects.${id}`}>{id}</Trans>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                  <CommitTextField
                      type="number"
                      value={timeRemaining / 200}
                      onCommit={value =>
                          onTemplateDataModify({
                            saveLoadEffects: merge(
                                [],
                                templateData.saveLoadEffects,
                                {
                                  [i]: { id, timeRemaining: Number(value) * 200 }
                                }
                            )
                          })
                      }
                  />
                </td>
              </tr>
          ))}
          <tr>
            <td colSpan={2} className="px-6 py-4 text-right">
              <AddEffectButton gameObjectId={gameObjectId} />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  );
};

export default Effects;