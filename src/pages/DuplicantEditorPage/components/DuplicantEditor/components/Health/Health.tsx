import { Trans } from "react-i18next";
import Value from "./components/Value";
import React from "react";

export interface HealthProps {
    gameObjectId: number;
}

const Health = ({ gameObjectId }: HealthProps) => (
    <div className="flex flex-col w-full h-full">
        <h3 className="mt-2 ml-2 text-lg font-semibold">
            <Trans>Fitness</Trans>
        </h3>
        <div className="border-t border-gray-200 my-2" />
        <div className="flex flex-row flex-wrap p-2">
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="HitPoints"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Stamina"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Calories"
                max={4000000}
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Breath"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Bladder"
            />
        </div>

        <h3 className="mt-2 ml-2 text-lg font-semibold">
            <Trans>Mind</Trans>
        </h3>
        <div className="border-t border-gray-200 my-2" />
        <div className="flex flex-row flex-wrap p-2">
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Stress"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Decor"
            />
        </div>

        <h3 className="mt-2 ml-2 text-lg font-semibold">
            <Trans>Disease</Trans>
        </h3>
        <div className="border-t border-gray-200 my-2" />
        <div className="flex flex-row flex-wrap p-2">
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="ImmuneLevel"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Toxicity"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="FoodPoisoning"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="ColdBrain"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="HeatRash"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="SlimeLung"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Sunburn"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="PutridOdour"
            />
            <Value
                className="w-72 mt-2 mx-2"
                gameObjectId={gameObjectId}
                modifier="Spores"
            />
        </div>
    </div>
);

export default Health;