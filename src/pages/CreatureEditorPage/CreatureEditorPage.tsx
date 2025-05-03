import * as React from "react";
import { useParams } from "react-router-dom";
import { includes } from "lodash";

import useGameObject from "@/services/oni-save/hooks/useGameObject";
import { CREATURE_GAMEOBJECT_TYPES } from "@/services/oni-save/creatures";

import RedirectIfNoSave from "@/components/RedirectIfNoSave";
import CreatureNotFound from "./components/CreatureNotFound";
import CreatureEditor from "./components/CreatureEditor";

const CreatureEditorPage: React.FC = () => {
  const params = useParams<{ gameObjectId?: string }>();
  const gameObjectId = params.gameObjectId;

  const goid = gameObjectId ? Number(gameObjectId) : NaN;
  const { gameObjectType } = useGameObject(goid);

  const supportedCreature = includes(CREATURE_GAMEOBJECT_TYPES, gameObjectType);

  return (
      <>
        <RedirectIfNoSave />
        {supportedCreature ? (
            <CreatureEditor gameObjectId={goid} />
        ) : (
            <CreatureNotFound />
        )}
      </>
  );
};

export default CreatureEditorPage;
