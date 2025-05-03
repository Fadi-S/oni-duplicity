import React, { useState, useCallback } from "react";
import { MinionModifiersBehavior } from "@/parser/main";
import { find, findIndex, merge } from "lodash";
import { Trans } from "react-i18next";
import useBehavior from "@/services/oni-save/hooks/useBehavior";

export interface ValueProps {
  className?: string;
  gameObjectId: number;
  modifier: string;
  max?: number;
}

const Value = ({
                 className,
                 gameObjectId,
                 modifier,
                 max = 100
               }: ValueProps) => {
  const [transientValue, setTransientValue] = useState(-1);
  const { extraData: { amounts }, onExtraDataModify } = useBehavior(gameObjectId, MinionModifiersBehavior);

  const amount = find(amounts, x => x.name === modifier);
  const value = (amount && amount.value.value) || 0;

  const setAmount = useCallback((value: number) => {
    const i = findIndex(amounts, x => x.name === modifier);
    if (i === -1) return;
    onExtraDataModify({
      amounts: merge([], amounts, {
        [i]: { name: modifier, value: { value } }
      })
    });
  }, [onExtraDataModify, amounts, modifier]);

  return (
      <div className={className}>
        <label className="block mb-2 text-sm font-medium" id={`${modifier}-label`}>
          <Trans i18nKey={`oni:todo-trans.modifiers.${modifier}`}>
            {modifier}
          </Trans>
          {": "}
          {String(transientValue !== -1 ? transientValue : value)}
        </label>
        <input
            type="range"
            aria-labelledby={`${modifier}-label`}
            value={transientValue !== -1 ? transientValue : value}
            min={0}
            max={max}
            onChange={(e) => setTransientValue(Number(e.target.value))}
            onMouseUp={(e) => setAmount(Number((e.target as HTMLInputElement).value))}
            onTouchEnd={(e) => setAmount(Number((e.target as HTMLInputElement).value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
  );
};

export default Value;