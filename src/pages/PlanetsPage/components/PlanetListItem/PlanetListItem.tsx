import * as React from "react";
import classnames from "classnames";

export interface PlanetListItemProps {
    planetId: number;
    className?: string;
}

interface Planet {
    type: string;
    recoverableElements: any[];
}

const usePlanet = (planetId: number): { planet: Planet | null } => {
    // Mock implementation - replace with your actual hook
    return {
        planet: {
            type: `Planet ${planetId}`,
            recoverableElements: Array(3).fill(null)
        }
    };
};

const PlanetListItem: React.FC<PlanetListItemProps> = ({ className, planetId }) => {
    const { planet } = usePlanet(planetId);

    if (!planet) {
        return <div className="text-base">No Data</div>;
    }

    const { type } = planet;

    return (
        <div className={classnames(className, "w-72 flex flex-col p-4 shadow-md rounded")}>
            <div className="flex flex-row mb-2">
                <div className="text-xl font-semibold">{type}</div>
                <div className="flex flex-row ml-auto" />
            </div>
            <div className="border-t border-gray-300 mb-2" />
            <div className="flex flex-row">
                <div className="ml-2 mr-2">
                    <svg
                        viewBox="0 0 70 70"
                        width={70}
                        height={70}
                        className="ml-2 mr-2"
                    >
                        <circle cx={35} cy={35} r={35} fill="red" />
                    </svg>
                </div>
                <div>
                    {planet.recoverableElements.map((_, index) => (
                        <div key={index}>
                            Resource {index}
                            {/* <RecoverableElement
                planetId={planetId}
                resourceId={index}
              /> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanetListItem;