import React, {ButtonHTMLAttributes, DetailedHTMLProps, JSX} from "react";

type ButtonProps = {
    icon?: JSX.ElementType;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button(props: ButtonProps) {

    return (
        <button
            {...props}
            type={props.type || "button"}
            className={"flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " + props.className}>
            {props.icon && <props.icon className="size-6 mr-2"/>}
            <div>{props.children}</div>
        </button>
    );
}