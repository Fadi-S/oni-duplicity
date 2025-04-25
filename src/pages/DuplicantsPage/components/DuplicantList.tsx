import useGameObjects from "@/services/oni-save/hooks/useGameObjects";
import DuplicantListItem from "./DuplicantListItem";
import React from "react";

export interface DuplicantListProps {
  className?: string;
}

const DuplicantList = ({ className }: DuplicantListProps) => {
  const gameObjectIds = useGameObjects("Minion");

  return (
      <div className={`flex flex-row flex-wrap m-4 gap-2 ${className}`}>
        {gameObjectIds.map(id => (
            <DuplicantListItem
                key={id}
                className="m-1"
                gameObjectId={id}
            />
        ))}
      </div>
  );
};

export default DuplicantList;