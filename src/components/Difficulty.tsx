import * as React from "react";
import { QualityLevelSettingValues } from "@/parser/main";
import useDifficulty from "@/services/oni-save/hooks/useDifficulty";
import { keysOfType } from "@/utils";

export interface DifficultyProps {
    className?: string;
}

const Difficulty: React.FC<DifficultyProps> = ({ className }) => {
    const { difficulty, onModifyDifficulty } = useDifficulty();

    return (
        <div className={className}>
            <h2 className="text-xl font-semibold mb-2">Difficulty</h2>
            <div className="border-t border-gray-200 mb-4"></div>

            <div className="grid grid-cols-[minmax(min-content,200px)_auto] gap-4">
                {keysOfType(difficulty).map(name => (
                    <React.Fragment key={name}>
                        <label className="flex items-center text-gray-700">
                            {name}
                        </label>
                        <select
                            value={difficulty[name]}
                            onChange={(e) => onModifyDifficulty(name, e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            {QualityLevelSettingValues[name].map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Difficulty;