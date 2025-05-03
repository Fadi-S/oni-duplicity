import { SaveGame } from "@/parser/main";
import React, { useState } from "react";
import PageContainer from "@/components/PageContainer";
import RedirectIfNoSave from "@/components/RedirectIfNoSave";
import RawObjectTree from "./components/RawObjectTree";
import BreadcrumbPath from "./components/BreadcrumbPath";
import ObjectEditor from "./components/ObjectEditor";

export interface RawEditorPageProps {
  saveGame: SaveGame | null;
}

const RawEditorPage = ({ saveGame }: RawEditorPageProps) => {
  const [path, setPath] = useState(["header"]);

  return (
      <PageContainer title="Raw Editor">
        <RedirectIfNoSave />
        <div className="flex flex-row w-full h-full">
          {saveGame && (
              <>
                <RawObjectTree
                    className="w-[500px] overflow-auto"
                    saveGame={saveGame}
                    onChangePath={setPath}
                />
                <div className="flex flex-col w-full h-full p-4">
                  <BreadcrumbPath
                      path={path}
                      saveGame={saveGame}
                      onChangePath={setPath}
                  />
                  <ObjectEditor path={path} saveGame={saveGame} />
                </div>
              </>
          )}
        </div>
      </PageContainer>
  );
};

export default RawEditorPage;