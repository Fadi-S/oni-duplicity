import React, {HTMLInputTypeAttribute} from "react";

interface InputProps {
    id: string;
    name: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    label: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
    const type = props.type || "text";

    return (
        <div>
            <label htmlFor={props.id} className="block text-sm/6 font-medium text-gray-900">
                {props.label}
            </label>
            <div className="mt-2">
                <input
                    {...props}
                    id={props.id}
                    name={props.name}
                    type={type}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    )
}
