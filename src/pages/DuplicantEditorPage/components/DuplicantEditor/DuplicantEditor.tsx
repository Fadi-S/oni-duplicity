import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PageContainer from '@/components/PageContainer';
import DuplicantPortrait from '@/components/DuplicantPortrait';
import DuplicantName from './components/DuplicantName';
import Traits from './components/Traits';
import Aptitudes from './components/Interests';
import Attributes from './components/Attributes';
import Appearance from './components/Appearance';
import Skills from './components/Skills';
import Effects from './components/Effects';
import Health from './components/Health';
import React from "react";

export interface DuplicantEditorProps {
    gameObjectId: number;
}

const DuplicantEditor = ({ gameObjectId }: DuplicantEditorProps) => {
    const { t } = useTranslation();
    const [tab, setTab] = useState(0);

    const tabs = [
        { label: t("duplicant_attribute.noun_titlecase_plural", { defaultValue: "Attributes" }) },
        { label: t("duplicant_appearance.noun_titlecase", { defaultValue: "Appearance" }) },
        { label: t("duplicant_health.noun_titlecase", { defaultValue: "Health" }) },
        { label: t("duplicant_skills.noun_titlecase_plural", { defaultValue: "Skills" }) },
        { label: t("duplicant_effect.noun_titlecase", { defaultValue: "Effects" }) }
    ];

    return (
        <PageContainer title={t("duplicant.verbs.edit_titlecase")} back>
            <div className="flex flex-col w-full h-full p-4">
                {/* Name Section */}
                <div className="flex-none">
                    <DuplicantName gameObjectId={gameObjectId} />
                </div>
                <div className="border-t border-gray-200 my-4" />

                {/* Portrait and Traits Section */}
                <div className="flex flex-row mb-4">
                    <div className="mr-4 flex-none">
                        <div className="bg-white rounded-lg shadow p-2">
                            <DuplicantPortrait gameObjectId={gameObjectId} scale={0.6} />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">
                                <Trans i18nKey="duplicant_trait.noun_titlecase">Traits</Trans>
                            </h3>
                            <div className="border-t border-gray-200 my-2" />
                            <Traits gameObjectId={gameObjectId} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                <Trans i18nKey="duplicant_interest.noun_titlecase">Interests</Trans>
                            </h3>
                            <div className="border-t border-gray-200 my-2" />
                            <Aptitudes gameObjectId={gameObjectId} />
                        </div>
                    </div>
                </div>

                {/* Tab Section */}
                <div className="flex flex-col flex-grow">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-200">
                        {tabs.map((tabItem, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                                    tab === index
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                                onClick={() => setTab(index)}
                            >
                                {tabItem.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="flex-grow overflow-auto bg-white rounded-b-lg shadow">
                        {tab === 0 && <Attributes gameObjectId={gameObjectId} />}
                        {tab === 1 && <Appearance gameObjectId={gameObjectId} />}
                        {tab === 2 && <Health gameObjectId={gameObjectId} />}
                        {tab === 3 && <Skills gameObjectId={gameObjectId} />}
                        {tab === 4 && <Effects gameObjectId={gameObjectId} />}
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default DuplicantEditor;