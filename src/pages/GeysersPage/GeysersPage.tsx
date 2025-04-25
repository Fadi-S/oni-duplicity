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
    <PageContainer title={t("geyser.noun_titlecase_plural")}>
      <RedirectIfNoSave />
      <div className="">
        {gameObjectIds.map(gameObjectId => (
          <GeyserListItem
            key={gameObjectId}
            className=""
            gameObjectId={gameObjectId}
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default withTranslation()(GeysersPage);
