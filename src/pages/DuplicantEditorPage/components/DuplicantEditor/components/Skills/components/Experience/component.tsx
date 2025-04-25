import { Trans } from "react-i18next";
import React from "react";
import {
    useExperience
} from "@/pages/DuplicantEditorPage/components/DuplicantEditor/components/Skills/components/Experience/connector";

export interface ExperienceProps {
    experience: number;
    setExperience(experience: number): void;
}

const Experience = ({gameObjectId}: {gameObjectId : number}) => {

    const { experience, setExperience }: ExperienceProps = useExperience(gameObjectId);

    return (
        <div>
            <label className="block text-sm font-medium">
                <Trans i18nKey="duplicant_skills.experience_titlecase">Experience</Trans>
            </label>
            <input
                type="number"
                value={experience}
                onChange={(e) => setExperience(Number(e.target.value))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
};

export default Experience;