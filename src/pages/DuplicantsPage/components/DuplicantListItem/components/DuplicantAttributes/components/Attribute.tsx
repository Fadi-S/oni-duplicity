import useBehavior from "@/services/oni-save/hooks/useBehavior";
import { AIAttributeLevelsBehavior } from "@/parser/main";
import { find } from "lodash";
import { Trans, useTranslation } from "react-i18next";
import React from "react";

export interface AttributeNameProps {
  gameObjectId: number;
  attributeId: string;
  className?: string;
}

const AttributeName = ({ gameObjectId, attributeId, className }: AttributeNameProps) => {
  const { t } = useTranslation();
  const { templateData } = useBehavior(gameObjectId, AIAttributeLevelsBehavior);

  if (!templateData) {
    return <div className="text-red-500">Error: No Data</div>;
  }

  const attribute = find(
      templateData.saveLoadLevels,
      x => x.attributeId === attributeId
  );

  const signPrefix = (x: number): string => {
    if (x > 0) return `+${x}`;
    if (x < 0) return `${x}`;
    return String(x);
  };

  return (
      <span
          className={`inline-flex items-center gap-1 text-sm ${className}`}
          title={t(`oni:DUPLICANTS.ATTRIBUTES.${attributeId}.DESC`, {
            defaultValue: ""
          })}
      >
      {attribute ? (
          <span className="font-medium">{signPrefix(attribute.level)}</span>
      ) : (
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
          >
            <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
            />
          </svg>
      )}
        <Trans i18nKey={`oni:DUPLICANTS.ATTRIBUTES.${attributeId}.NAME`}>
        {attributeId}
      </Trans>
    </span>
  );
};

export default AttributeName;