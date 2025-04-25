import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { GeyserType, GeyserTypeInGameNames } from '@/parser/main';
import useGeyser from '@/services/oni-save/hooks/useGeyser';
import { keysOfType } from '@/utils';
import React from "react";

export interface GeyserListItemProps {
    gameObjectId: number;
    className?: string;
}

const GeyserListItem = ({ className, gameObjectId }: GeyserListItemProps) => {
    const { t } = useTranslation();
    const {
        geyserType,
        emitRate,
        yearLength,
        yearActive,
        emitActive,
        onChangeEmitRate,
        onChangeGeyserType,
        onChangeYearLength,
        onChangeYearActive,
        onChangeEmitActive
    } = useGeyser(gameObjectId);

    const handleSliderChange = (handler: (value: number) => void) =>
        (value: number) => handler(value / 100);

    return (
        <div className={classnames(className, 'shadow-md rounded-lg p-4 bg-white')}>
            <div className="flex flex-row items-center mb-4">
                <h3 className="text-lg font-semibold">
                    {GeyserTypeInGameNames[geyserType ?? ''] ?? ''}
                </h3>
            </div>

            <hr className="border-t border-gray-200 mb-4" />

            <select
                value={geyserType || ''}
                onChange={(e) => onChangeGeyserType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
            >
                {keysOfType(GeyserType).map(typeName => (
                    <option key={typeName} value={typeName}>
                        {GeyserTypeInGameNames[typeName]}
                    </option>
                ))}
            </select>

            <SliderSection
                label={t('geyser.total_lifecycle_time')}
                value={(yearLength || 0) * 100}
                onChange={handleSliderChange(onChangeYearLength)}
            />

            <SliderSection
                label={t('geyser.active_time')}
                value={(yearActive || 0) * 100}
                onChange={handleSliderChange(onChangeYearActive)}
            />

            <SliderSection
                label={t('geyser.emission_length')}
                value={(emitActive || 0) * 100}
                onChange={handleSliderChange(onChangeEmitActive)}
            />

            <SliderSection
                label={t('geyser.emission_rate')}
                value={(emitRate || 0) * 100}
                onChange={handleSliderChange(onChangeEmitRate)}
            />
        </div>
    );
};

const SliderSection = ({ label, value, onChange }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
}) => (
    <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        <div className="flex items-center gap-4">
            <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600 w-12">{value}%</span>
        </div>
    </div>
);

export default GeyserListItem;