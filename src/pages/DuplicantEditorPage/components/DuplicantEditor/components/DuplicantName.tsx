import { MinionIdentityBehavior } from "@/parser/main";
import useBehavior from "@/services/oni-save/hooks/useBehavior";
import React from "react";

export interface DuplicantNameProps {
  gameObjectId: number;
}

const DuplicantName = ({ gameObjectId }: DuplicantNameProps) => {
  const { templateData: { name } } = useBehavior(gameObjectId, MinionIdentityBehavior);
  return <h2 className="text-xl font-medium">{name}</h2>;
};

export default DuplicantName;