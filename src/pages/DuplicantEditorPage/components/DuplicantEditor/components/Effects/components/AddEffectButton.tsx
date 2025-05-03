import { useState } from "react";
import { AI_EFFECT_IDS, AIEffectsBehavior } from "@/parser/main";
import { difference } from "lodash";
import { Trans } from "react-i18next";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import AddEffectDialog from "./AddEffectDialog";
import React from "react";

export interface AddEffectButtonProps {
    gameObjectId: number;
}

const AddEffectButton = ({ gameObjectId }: AddEffectButtonProps) => {
    const [isAddingEffect, setIsAddingEffect] = useState(false);
    const { templateData, onTemplateDataModify } = useBehavior(gameObjectId, AIEffectsBehavior);

    const currentEffects = templateData.saveLoadEffects.map(x => x.id);
    const availableEffects = difference(AI_EFFECT_IDS, currentEffects);

    return (
        <>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => setIsAddingEffect(true)}
            >
                <Trans i18nKey="duplicant_effects.verbs.add_titlecase">Add Effect</Trans>
            </button>
            <AddEffectDialog
                open={isAddingEffect}
                availableEffects={availableEffects}
                onClose={() => setIsAddingEffect(false)}
                onAddEffect={(id : string, timeRemaining: number) => {
                    setIsAddingEffect(false);
                    onTemplateDataModify({
                        saveLoadEffects: [
                            ...templateData.saveLoadEffects,
                            { id, timeRemaining }
                        ]
                    });
                }}
            />
        </>
    );
};

export default AddEffectButton;