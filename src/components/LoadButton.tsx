import React from "react";
import { Trans } from "react-i18next";
import Button from "@/components/Button";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

interface LoadButtonProps {
    onLoad: (file: File) => void;
    disabled?: boolean;
}

export default function LoadButton({ onLoad, disabled }: LoadButtonProps) {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const onClick = React.useCallback(() => {
        inputRef.current?.click();
    }, []);

    const onFileChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            file && onLoad(file);
        },
        [onLoad]
    );

    return (
        <>
            <Button
                disabled={disabled}
                icon={CloudArrowUpIcon}
                onClick={onClick}
                className="px-6 py-3 text-lg"
            >
                <Trans i18nKey="save-file.verbs.load_titlecase">Load Save File</Trans>
            </Button>
            <input
                ref={inputRef}
                hidden
                type="file"
                accept=".sav"
                onChange={onFileChange}
            />
        </>
    );
}