import DuplicantMenu from "@/components/DuplicantMenu";
import DuplicantPortrait from "@/components/DuplicantPortrait";
import DuplicantName from "./components/DuplicantName";
import DuplicantTraits from "./components/DuplicantTraits";
import DuplicantAttributes from "./components/DuplicantAttributes";
import EditButton from "./components/EditButton";
import React from "react";

export interface DuplicantListItemProps {
  className?: string;
  gameObjectId: number;
}

const DuplicantListItem = ({ className, gameObjectId }: DuplicantListItemProps) => {
  return (
      <div className={`flex flex-col p-4 rounded-lg shadow-md bg-white ${className}`}>
        {/* Header Row */}
        <div className="flex flex-row items-center mb-2">
          <DuplicantName gameObjectId={gameObjectId} />
          <div className="flex flex-row ml-auto gap-2">
            <EditButton gameObjectId={gameObjectId} className="ml-auto" />
            <DuplicantMenu gameObjectId={gameObjectId} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2" />

        {/* Content Row */}
        <div className="flex flex-row mt-3">
          {/* Left Column - Portrait and Traits */}
          <div className="mr-4">
            <DuplicantPortrait gameObjectId={gameObjectId} scale={0.3} />
            <DuplicantTraits gameObjectId={gameObjectId} />
          </div>

          {/* Right Column - Attributes */}
          <DuplicantAttributes
              gameObjectId={gameObjectId}
              className="ml-auto"
          />
        </div>
      </div>
  );
};

export default DuplicantListItem;