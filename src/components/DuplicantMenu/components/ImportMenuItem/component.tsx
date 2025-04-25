import React, { useRef, useCallback } from 'react';

export interface ImportMenuItemProps {
    onImportDuplicant(file: File): void;
    onClose(): void;
}

const ImportMenuItem = ({ onImportDuplicant, onClose }: ImportMenuItemProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onButtonClick = useCallback(() => {
        inputRef.current?.click();
    }, []);

    const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onImportDuplicant(file);
            onClose();
        }
    }, [onImportDuplicant, onClose]);

    return (
        <>
            <button
                onClick={onButtonClick}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
                Import
            </button>
            <input
                ref={inputRef}
                type="file"
                accept=".json"
                onChange={onFileChange}
                className="hidden"
            />
        </>
    );
};

export default ImportMenuItem;