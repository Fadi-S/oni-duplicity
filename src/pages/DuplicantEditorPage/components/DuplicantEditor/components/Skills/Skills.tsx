import Experience from "./components/Experience";
import Masteries from "./components/Masteries";
import React from "react";

export interface SkillsProps {
    gameObjectId: number;
}

const Skills = ({ gameObjectId }: SkillsProps) => (
    <div className="flex flex-col p-4">
        <Experience gameObjectId={gameObjectId} />
        <Masteries gameObjectId={gameObjectId} />
    </div>
);

export default Skills;