import React from "react";
// @ts-ignore
import logo from "@/assets/logo.png";

interface LogoProps {
    className?: string;
}

export default function Logo({className} : LogoProps) {
    return (
        <div>
            <img
                className={"rounded-full h-8 w-auto " + className}
                src={logo}
                alt="Duplicity"
            />
        </div>
    );
}