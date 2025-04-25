import useBehavior from "@/services/oni-save/hooks/useBehavior";
import { AIAttributeLevelsBehavior } from "@/parser/main";
import { findIndex } from "lodash";
import CommitTextField from "@/components/CommitTextField";
import React from "react";

export interface AttributeFieldProps {
    className?: string;
    gameObjectId: number;
    attributeId: string;
}

const AttributeField = ({ className, gameObjectId, attributeId }: AttributeFieldProps) => {
    const { templateData: { saveLoadLevels }, onTemplateDataModify } = useBehavior(gameObjectId, AIAttributeLevelsBehavior);

    const attrIndex = findIndex(
        saveLoadLevels,
        x => x.attributeId === attributeId
    );

    if (attrIndex === -1) {
        return <div className="text-red-500">Attribute Not Found</div>;
    }

    const attr = saveLoadLevels[attrIndex];
    const { level } = attr;

    return (
        <CommitTextField
            className={className}
            type="number"
            value={level}
            onCommit={value => {
                const newLevels = [...saveLoadLevels];
                newLevels[attrIndex] = { ...attr, level: Number(value) };
                onTemplateDataModify({
                    saveLoadLevels: newLevels
                });
            }}
        />
    );
};

export default AttributeField;