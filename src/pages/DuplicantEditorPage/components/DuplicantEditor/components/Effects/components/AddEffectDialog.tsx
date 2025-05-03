import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export interface AddEffectDialogProps {
  open: boolean;
  availableEffects: string[];
  onClose(): void;
  onAddEffect(effect: string, time: number): void;
}

const AddEffectDialog = ({
                           open,
                           availableEffects,
                           onClose,
                           onAddEffect
                         }: AddEffectDialogProps) => {
  const { t } = useTranslation();
  const [selectedEffect, setSelectedEffect] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);

  return (
      <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl w-96">
          <div className="p-4 border-b">
            <h3 className="text-lg font-medium">
              <Trans i18nKey="duplicant_effects.verbs.add_titlecase">Add Effect</Trans>
            </h3>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Trans i18nKey="duplicant_effect.noun_titlecase">Effect</Trans>
              </label>
              <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedEffect}
                  onChange={(e) => setSelectedEffect(e.target.value)}
              >
                <option value="">Select an effect</option>
                {availableEffects.map(effect => (
                    <option key={effect} value={effect}>
                      <Trans i18nKey={`oni:todo-trans.effects.${effect}`}>
                        {effect}
                      </Trans>
                    </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Trans i18nKey="time_cycles.noun_titlecase">Time Cycles</Trans>
              </label>
              <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={timeRemaining}
                  onChange={(e) => setTimeRemaining(Number(e.target.value))}
                  min="1"
              />
            </div>
          </div>
          <div className="p-4 border-t flex justify-end space-x-2">
            <button
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={onClose}
            >
              <Trans i18nKey="dialog.verbs.cancel_titlecase">Cancel</Trans>
            </button>
            <button
                className={`px-4 py-2 rounded ${selectedEffect && timeRemaining > 0 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                disabled={!selectedEffect || timeRemaining <= 0}
                onClick={() => {
                  setSelectedEffect("");
                  onAddEffect(selectedEffect, timeRemaining * 200);
                }}
            >
              <Trans i18nKey="duplicant_effects.verbs.add_titlecase">Add Effect</Trans>
            </button>
          </div>
        </div>
      </div>
  );
};

export default AddEffectDialog;