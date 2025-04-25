import * as React from "react";

import PageContainer from "@/components/PageContainer";
import Difficulty from "./components/Difficulty";
import { useStateProps } from "./state-props";

export interface SaveOverviewProps {
    className?: string;
}

const SaveOverview: React.FC<SaveOverviewProps> = ({ className }) => {
    const { saveName, cycleCount } = useStateProps();

    return (
        <PageContainer title="Overview">
            <div className={`p-4 ${className}`}>
                <h1 className="text-3xl font-bold mb-4">{saveName}</h1>
                <div className="border-t border-gray-200 mb-4" />
                <p className="text-lg mb-6">{cycleCount} cycles.</p>
                <div className="mt-4">
                    <Difficulty />
                </div>
            </div>
        </PageContainer>
    );
};

export default SaveOverview;