import * as React from "react";
import classnames from "classnames";

import Attribute from "./components/Attribute";

export interface DuplicantAttributesProps {
  className?: string;
  gameObjectId: number;
}

type Props = DuplicantAttributesProps;

const DuplicantAttributes: React.FC<Props> = ({
  className,
  gameObjectId
}) => (
  <div className={classnames(className, "grid grid-cols-2 gap-6")}>
    <Attribute gameObjectId={gameObjectId} attributeId="Athletics" />
    <Attribute gameObjectId={gameObjectId} attributeId="Cooking" />
    <Attribute gameObjectId={gameObjectId} attributeId="Digging" />
    <Attribute gameObjectId={gameObjectId} attributeId="Caring" />
    <Attribute gameObjectId={gameObjectId} attributeId="Ranching" />
    <Attribute gameObjectId={gameObjectId} attributeId="Machinery" />

    <Attribute gameObjectId={gameObjectId} attributeId="Construction" />
    <Attribute gameObjectId={gameObjectId} attributeId="Art" />
    <Attribute gameObjectId={gameObjectId} attributeId="Botanist" />
    <Attribute gameObjectId={gameObjectId} attributeId="Learning" />
    <Attribute gameObjectId={gameObjectId} attributeId="Strength" />
  </div>
);

export default DuplicantAttributes;
