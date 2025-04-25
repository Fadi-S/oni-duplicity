import React, { useState, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export interface AddTraitButtonProps {
    availableTraits: string[];
    className?: string;
    onAddTrait(trait: string): void;
}

const AddTraitButton = ({
                            className,
                            availableTraits,
                            onAddTrait
                        }: AddTraitButtonProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`relative ${className}`}>
            <div
                ref={buttonRef}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors"
                onClick={() => setIsOpen(true)}
            >
                {t('duplicant_trait.verbs.add_titlecase')}
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg">
                    {[...availableTraits].sort().map(trait => (
                        <div
                            key={trait}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            title={t(`oni:DUPLICANTS.TRAITS.${trait.toUpperCase()}.DESC`, {
                                defaultValue: ""
                            })}
                            onClick={() => {
                                setIsOpen(false);
                                onAddTrait(trait);
                            }}
                        >
                            <Trans i18nKey={`oni:DUPLICANTS.TRAITS.${trait.toUpperCase()}.NAME`}>
                                {trait}
                            </Trans>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AddTraitButton;