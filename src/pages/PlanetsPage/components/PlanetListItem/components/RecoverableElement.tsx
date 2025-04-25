import * as React from "react";
import { SimHashes } from "@/parser/main";
import usePlanet from "@/services/oni-save/hooks/usePlanet";

export interface RecoverableElementProps {
    planetId: number;
    resourceId: number;
}

export const RecoverableElement: React.FC<RecoverableElementProps> = ({planetId, resourceId,}) => {
    const { planet, onModifyPlanet } = usePlanet(planetId);

    const [transientValue, setTransientValue] = React.useState(-1);
    const setTransientMass = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setTransientValue(parseFloat(e.target.value));
        },
        []
    );

    const setMass = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseFloat(e.target.value);
            const newRecoverables = [...(planet?.recoverableElements ?? [])];
            newRecoverables[resourceId] = [
                newRecoverables[resourceId][0],
                value,
            ];
            onModifyPlanet({
                recoverableElements: newRecoverables,
            });
            setTransientValue(-1);
        },
        [planet?.recoverableElements, onModifyPlanet, planetId]
    );

    if (!planet) {
        return null;
    }

    const resource = planet.recoverableElements[resourceId];
    if (!resource) {
        return null;
    }
    const [hash, mass] = resource;

    const id = `planet-${planetId}-recoverable-${hash}`;
    const currentMass = transientValue !== -1 ? transientValue : mass;

    return (
        <div className="mb-4 space-y-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
                {SimHashes[hash]} ({Math.round(currentMass * 100)}% mass)
            </label>

            <div className="flex items-center gap-3">
                <input
                    id={id}
                    type="range"
                    value={currentMass}
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={setTransientMass}
                    // @ts-ignore
                    onMouseUp={setMass}
                    // @ts-ignore
                    onTouchEnd={setMass}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 w-12">
          {Math.round(currentMass * 100)}%
        </span>
            </div>
        </div>
    );
};

export default RecoverableElement;