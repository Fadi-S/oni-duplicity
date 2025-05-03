import Difficulty from "@/components/Difficulty";
import * as React from "react";
import {useGameInfo} from "@/services/oni-save/hooks/useGameInfo";

export default function OverviewPage() {
    const { saveName, cycleCount } = useGameInfo();

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{saveName}</h1>
            <div className="border-t border-gray-200 mb-4"/>
            <p className="text-lg mb-6">{cycleCount} cycles.</p>
            <div className="mt-4">
                <Difficulty/>
            </div>
        </div>
    );
}