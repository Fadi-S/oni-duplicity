import * as React from "react";
import { GeyserTypeNames } from "@/parser/main";

import { WithTranslation, withTranslation } from "react-i18next";

import useGameObjects from "@/services/oni-save/hooks/useGameObjects";

import PageContainer from "@/components/PageContainer";
import RedirectIfNoSave from "@/components/RedirectIfNoSave";
import GeyserListItem from "./components/GeyserListItem";

type Props = WithTranslation;

const GeysersPage: React.FC<Props> = ({ t }) => {
  const gameObjectIds = useGameObjects(
    GeyserTypeNames.map(x => `GeyserGeneric_${x}`)
  );
  return (
    <div title={t("geyser.noun_titlecase_plural")}>
      <div className="grid grid-cols-12 gap-6">
        {gameObjectIds.map(gameObjectId => (
          <GeyserListItem
            key={gameObjectId}
            className="col-span-12 md:col-span-6 lg:col-span-4"
            gameObjectId={gameObjectId}
          />
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(GeysersPage);
