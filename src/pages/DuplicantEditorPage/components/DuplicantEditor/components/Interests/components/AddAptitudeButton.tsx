import React, { useState, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

export interface AddAptitudeButtonProps {
    availableAptitudes: string[];
    className?: string;
    onAddAptitude(aptitude: string): void;
}

const AddAptitudeButton = ({
                               className,
                               availableAptitudes,
                               onAddAptitude
                           }: AddAptitudeButtonProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div className={className}>
            <button
                ref={buttonRef}
                className="px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                onClick={() => setIsOpen(true)}
            >
                {t(`duplicant_interest.verbs.add_titlecase`)}
            </button>

            {isOpen && (
                <div className="fixed z-50 mt-1 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                        {[...availableAptitudes].sort().map(trait => (
                            <button
                                key={trait}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                title={t(`oni:DUPLICANTS.APTITUDES.${trait.toUpperCase()}.DESC`, {
                                    defaultValue: ""
                                })}
                                onClick={() => {
                                    setIsOpen(false);
                                    onAddAptitude(trait);
                                }}
                            >
                                <Trans i18nKey={`oni:DUPLICANTS.APTITUDES.${trait.toUpperCase()}.NAME`}>
                                    {trait}
                                </Trans>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddAptitudeButton;