import * as React from "react";
import { MinionIdentityBehavior } from "@/parser/main";

import useBehavior from "@/services/oni-save/hooks/useBehavior";

export interface DuplicantNameProps {
  gameObjectId: number;
}

const DuplicantName: React.FC<DuplicantNameProps> = ({ gameObjectId }) => {
  const { templateData: { name } } = useBehavior(gameObjectId, MinionIdentityBehavior);
  return (
    <div>{name}</div>
  );
}
export default DuplicantName;
