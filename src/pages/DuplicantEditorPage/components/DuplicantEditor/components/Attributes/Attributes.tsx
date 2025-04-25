import { AIAttributeLevelsBehavior, AttributeLevel } from "@/parser/main";
import { Trans, useTranslation } from "react-i18next";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import AttributeName from "./components/AttributeName";
import AttributeField from "./components/AttributeField";
import React from "react";

const PRIMARY_ATTRIBUTES = [
    "Athletics",
    "Cooking",
    "Digging",
    "Caring",
    "Ranching",
    "Machinery",
    "Construction",
    "Art",
    "Botanist",
    "Learning",
    "Strength"
];

export interface AttributesProps {
    gameObjectId: number;
}

const Attributes = ({ gameObjectId }: AttributesProps) => {
    const { t } = useTranslation();
    const { templateData: { saveLoadLevels } } = useBehavior(gameObjectId, AIAttributeLevelsBehavior);

    return (
        <div className="flex flex-col w-full h-full">
            <h3 className="text-lg font-semibold mt-2 ml-2">
                <Trans i18nKey="duplicant_attribute.primary_titlecase">Primary</Trans>
            </h3>
            <div className="border-t border-gray-200 my-2" />
            <div className="flex flex-col flex-wrap h-40 p-2">
                {PRIMARY_ATTRIBUTES.map(attributeId => (
                    <div key={attributeId} className="flex flex-row m-1">
                        <AttributeField
                            className="w-12 mr-2"
                            gameObjectId={gameObjectId}
                            attributeId={attributeId}
                        />
                        <AttributeName attributeId={attributeId} />
                    </div>
                ))}
            </div>
            <h3 className="text-lg font-semibold mt-2 ml-2">
                <Trans i18nKey="duplicant_attribute.secondary_titlecase">Secondary</Trans>
            </h3>
            <div className="border-t border-gray-200 my-2" />
            <div className="flex flex-col flex-wrap h-40 p-2">
                {nonPrimaryAttributeIds(saveLoadLevels).map(attributeId => (
                    <div key={attributeId} className="flex flex-row m-1">
                        <AttributeField
                            className="w-12 mr-2"
                            gameObjectId={gameObjectId}
                            attributeId={attributeId}
                        />
                        <AttributeName attributeId={attributeId} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Attributes;

function nonPrimaryAttributeIds(attributes: AttributeLevel[]): string[] {
    return attributes
        .map(x => x.attributeId)
        .filter(x => PRIMARY_ATTRIBUTES.indexOf(x) === -1);
}