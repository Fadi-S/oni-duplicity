import * as React from "react";
import { SaveGame } from "@/parser/main";

import { getSegmentName } from "../../editor-data";

export interface BreadcrumbPathProps {
  saveGame: SaveGame;
  path: string[];
  onChangePath(path: string[]): void;
}

const BreadcrumbPath: React.FC<BreadcrumbPathProps> = ({
  path,
  saveGame,
  onChangePath
}) => {
  return (
    <div>
      {path.map((_, i) => {
        const segmentPath = path.slice(0, i + 1);
        return (
          <div key={i} color="inherit" onClick={() => onChangePath(segmentPath)}>
            {getSegmentName(saveGame, segmentPath)}
          </div>
        );
      })}
    </div>
  );
};

export default BreadcrumbPath;
