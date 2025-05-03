import { useTranslation } from "react-i18next";
import React from "react";

export interface AttributeNameProps {
    attributeId: string;
}

const AttributeName = ({ attributeId }: AttributeNameProps) => {
    const { t } = useTranslation();

    return (
        <span
            className="text-base"
            title={t(`oni:DUPLICANTS.ATTRIBUTES.${attributeId}.DESC`, {
                defaultValue: ""
            })}
        >
      {t(`oni:DUPLICANTS.ATTRIBUTES.${attributeId}.NAME`, {
          defaultValue: attributeId
      })}
    </span>
    );
};

export default AttributeName;