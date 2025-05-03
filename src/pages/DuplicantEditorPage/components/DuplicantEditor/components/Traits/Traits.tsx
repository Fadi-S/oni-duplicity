import { AI_TRAIT_IDS, AITraitsBehavior } from "@/parser/main";
import { difference } from "lodash";
import { useTranslation } from "react-i18next";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import AddTraitButton from "./components/AddTraitButton";
import React from "react";

const CANDIDATE_TRAITS = AI_TRAIT_IDS.filter(x => x !== "None");

export interface TraitsProps {
    gameObjectId: number;
}

const Traits = ({ gameObjectId }: TraitsProps) => {
    const { t } = useTranslation();
    const { templateData, onTemplateDataModify } = useBehavior(gameObjectId, AITraitsBehavior);
    const { TraitIds } = templateData;
    const availableTraits = difference(CANDIDATE_TRAITS, TraitIds);

    return (
        <div className="flex flex-row flex-wrap">
            {TraitIds.map((trait, i) => (
                <div key={trait} className="m-1 inline-flex items-center px-3 py-1 rounded-full bg-gray-100">
          <span className="mr-2">
            {t(`oni:DUPLICANTS.TRAITS.${trait.toUpperCase()}.NAME`, { defaultValue: trait })}
          </span>
                    <button
                        onClick={() => {
                            const newTraitIds = [...TraitIds];
                            newTraitIds.splice(i, 1);
                            onTemplateDataModify({ TraitIds: newTraitIds });
                        }}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ×
                    </button>
                </div>
            ))}
            <AddTraitButton
                className="m-1"
                availableTraits={availableTraits}
                onAddTrait={trait => onTemplateDataModify({ TraitIds: [...TraitIds, trait] })}
            />
        </div>
    );
};

export default Traits;