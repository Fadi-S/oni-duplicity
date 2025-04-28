import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { OSType } from "@/runtime-env";
import LoadButton from "@/components/LoadButton";
import useLoadFile from "@/services/oni-save/hooks/useLoadFile";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import {loadingStatusMessageSelector, loadingStatusSelector} from "@/services/oni-save/selectors/loading-status";
import {useAppSelector} from "@/services/oni-save/hooks/useSaveGame";

const SaveFilePaths: Record<OSType, string | null> = {
    windows: "Documents/Klei/OxygenNotIncluded/save_files",
    mac: null,
    linux: "~/.config/unity3d/Klei/Oxygen Not Included/save_files",
    unknown: null,
};

export default function HomePage() {
    const { t } = useTranslation();
    const saveFilePath = SaveFilePaths[OSType];
    const { disabled, onLoadSave } = useLoadFile();
    const loadingStatus = useAppSelector(loadingStatusSelector);
    const loadingStatusMessage = useAppSelector(loadingStatusMessageSelector);
    const [isDragging, setIsDragging] = React.useState(false);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragOver = (e: React.DragEvent) => {
        handleDrag(e);
        if (disabled) return;
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        handleDrag(e);
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        handleDrag(e);
        setIsDragging(false);

        if (disabled) return;

        const files = e.dataTransfer.files;
        if (files.length === 0) return;

        const file = files[0];
        if (file.name.endsWith(".sav")) {
            onLoadSave(file);
        }
    };

    return (
        <div
            className={`relative min-h-screen p-8 transition-all duration-200 ${
                isDragging ? "bg-blue-50" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {isDragging && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-50/90 z-10 space-y-4">
                    <CloudArrowUpIcon className="h-16 w-16 text-blue-500" />
                    <div className="text-2xl font-semibold text-blue-600">
                        <Trans i18nKey="overview-page.drop-file-prompt">
                            Drop your save file here
                        </Trans>
                    </div>
                </div>
            )}

            <div className="max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900">
                        <Trans i18nKey="overview-page.title">ONI Save Manager</Trans>
                    </h1>

                    <p className="text-lg text-gray-600">
                        <Trans i18nKey="overview-page.no-save.prompt">
                            No save file has been loaded.
                        </Trans>
                    </p>
                </div>

                {SaveFilePaths[OSType] && (
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <div
                            className="prose text-center"
                        >
                            {t("overview-page.no-save.save-location")}
                            <code className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
                                {saveFilePath}
                            </code>
                        </div>
                    </div>
                )}

                <div className="pt-6">
                    {loadingStatus === "loading" ? "Loading..." : <LoadButton onLoad={onLoadSave} disabled={disabled} />}
                </div>
            </div>
        </div>
    );
}