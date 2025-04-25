import * as React from "react";
import classnames from "classnames";

import usePlanets from "@/services/oni-save/hooks/usePlanets";
import PlanetListItem from "./PlanetListItem";

export interface PlanetListProps {
    className?: string;
}

const PlanetList: React.FC<PlanetListProps> = ({ className }) => {
    const { planetIds } = usePlanets();

    return (
        <div className={classnames(className, "flex flex-row flex-wrap m-4")}>
            {planetIds.map(id => (
                <PlanetListItem key={id} className="m-2" planetId={id} />
            ))}
        </div>
    );
};

export default PlanetList;