import React, {useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {BehaviorName} from '@/parser/main';

export interface BehaviorChoice {
    name: string;
    i18nKey: string;
    behavior: BehaviorName<any>;
}

export interface BehaviorChooserDialogProps {
    title: string;
    applyText: string;
    open: boolean;
    choices: BehaviorChoice[];

    onApply(behaviors: string[]): void;

    onCancel(): void;
}

const BehaviorChooserDialog = ({
                                   title,
                                   applyText,
                                   open,
                                   choices,
                                   onApply,
                                   onCancel,
                               }: BehaviorChooserDialogProps) => {
    const {t} = useTranslation();
    const [selectedTargets, setSelectedTargets] = useState<string[]>([]);

    const onCheckboxChange = useCallback((behavior: string, checked: boolean) => {
        setSelectedTargets(prev =>
            checked ? [...prev, behavior] : prev.filter(x => x !== behavior))
    }, []);

    const onApplyClick = useCallback(() => {
        onApply(selectedTargets);
    }, [selectedTargets, onApply]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-96">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-medium">{title}</h2>
                </div>
                <div className="p-4 max-h-96 overflow-y-auto">
                    {choices.map(({name, i18nKey, behavior}) => (
                        <label key={behavior} className="flex items-center space-x-2 p-2 hover:bg-gray-50">
                            <input
                                type="checkbox"
                                checked={selectedTargets.includes(behavior)}
                                onChange={(e) => onCheckboxChange(behavior, e.target.checked)}
                                className="h-4 w-4 text-blue-600 rounded"
                            />
                            <span>{t(i18nKey, {defaultValue: name})}</span>
                        </label>
                    ))}
                </div>
                <div className="p-4 border-t flex justify-end space-x-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                        {t("dialog.verbs.cancel_titlecase", {defaultValue: "Cancel"})}
                    </button>
                    <button
                        onClick={onApplyClick}
                        className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded"
                    >
                        {applyText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BehaviorChooserDialog;