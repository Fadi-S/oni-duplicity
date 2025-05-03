import * as React from "react";
import { AITraitsBehavior } from "@/parser/main";

import { WithTranslation, withTranslation } from "react-i18next";


import useBehavior from "@/services/oni-save/hooks/useBehavior";

export interface DuplicantTraitsProps {
  gameObjectId: number;
}

type Props = DuplicantTraitsProps  & WithTranslation;

const DuplicantTraits: React.FC<Props> = ({ gameObjectId, t }) => {
  const { templateData } = useBehavior(gameObjectId, AITraitsBehavior);
  return (
    <div className="flex flex-col">
      {(templateData || { TraitIds: [] }).TraitIds.map(trait => (
        <div
          key={trait}
          className=""
          title={t(`oni:DUPLICANTS.TRAITS.${trait.toUpperCase()}.DESC`, {
            defaultValue: ""
          })}
        >
          {t(`oni:DUPLICANTS.TRAITS.${trait.toUpperCase()}.NAME`, {
            defaultValue: trait
          })}
        </div>
      ))}
    </div>
  );
}

export default withTranslation()(DuplicantTraits);
