import React, {AnchorHTMLAttributes, DetailedHTMLProps, JSX} from "react";
import {Link} from "react-router-dom";
import {To} from "react-router";

type LinkProps = {
    icon?: JSX.ElementType;
    to: To;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export default function MyLink(props: LinkProps) {

    return (
        <Link
            {...props}
            to={props.to}
            className={"flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " + props.className}>
            {props.icon && <props.icon className="size-6 mr-2"/>}
            <div>{props.children}</div>
        </Link>
    );
}