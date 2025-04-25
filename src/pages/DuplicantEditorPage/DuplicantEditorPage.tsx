import * as React from "react";
import { useParams } from "react-router-dom";

import useGameObject from "@/services/oni-save/hooks/useGameObject";

import RedirectIfNoSave from "@/components/RedirectIfNoSave";
import DuplicantEditor from "./components/DuplicantEditor";
import DuplicantNotFound from "./components/DuplicantNotFound";

const DuplicantEditorPage: React.FC = () => {
  const { gameObjectId } = useParams<{ gameObjectId?: string }>();

  const goid = gameObjectId ? Number(gameObjectId) : NaN;
  const { gameObjectType } = useGameObject(goid);

  return (
      <>
        <RedirectIfNoSave />
        {gameObjectType === "Minion" ? (
            <DuplicantEditor gameObjectId={goid} />
        ) : (
            <DuplicantNotFound />
        )}
      </>
  );
};

export default DuplicantEditorPage;
