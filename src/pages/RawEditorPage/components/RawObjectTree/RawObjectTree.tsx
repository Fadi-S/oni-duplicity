import * as React from "react";
import { get } from "lodash";
import { SaveGame } from "@/parser/main";
import { getSegmentName } from "../../editor-data";

export interface RawObjectTreeProps {
  className?: string;
  saveGame: SaveGame;
  onChangePath(path: string[]): void;
}

const RawObjectTree: React.FC<RawObjectTreeProps> = ({
                                                       className,
                                                       saveGame,
                                                       onChangePath
                                                     }) => {
  return (
      <div className={className}>
        <RawTreeChildren saveGame={saveGame} path={[]} onChangePath={onChangePath} />
      </div>
  );
};

export default RawObjectTree;

interface RawTreeChildrenProps {
  saveGame: SaveGame;
  path: string[];
  onChangePath(path: string[]): void;
}
const RawTreeChildren: React.FC<RawTreeChildrenProps> = ({
                                                           saveGame,
                                                           path,
                                                           onChangePath
                                                         }) => {
  const target = path.length === 0 ? saveGame : get(saveGame, path);
  const childrenKeys = Object.keys(target).filter(key =>
      isObjectKey(target, key)
  );

  return (
      <ul style={{ listStyleType: "none", paddingLeft: "1em" }}>
        {childrenKeys.map(key => {
          const childPath = [...path, key];
          return (
              <RawTreeChild
                  key={childPath.join(".")}
                  saveGame={saveGame}
                  path={childPath}
                  onChangePath={onChangePath}
              />
          );
        })}
      </ul>
  );
};

interface RawTreeChildProps {
  saveGame: SaveGame;
  path: string[];
  onChangePath(path: string[]): void;
}
const RawTreeChild: React.FC<RawTreeChildProps> = ({
                                                     saveGame,
                                                     path,
                                                     onChangePath
                                                   }) => {
  const segmentName = getSegmentName(saveGame, path);
  const handleClick = () => onChangePath(path);

  return (
      <li>
        <div
            onClick={handleClick}
            style={{
              cursor: "pointer",
              padding: "2px 4px",
              borderRadius: "4px",
              userSelect: "none",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#f0f0f0")}
            onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
        >
          {segmentName}
        </div>
        <RawTreeChildren saveGame={saveGame} path={path} onChangePath={onChangePath} />
      </li>
  );
};

function isObjectKey(obj: any, key: string): boolean {
  return obj[key] != null && typeof obj[key] === "object";
}
