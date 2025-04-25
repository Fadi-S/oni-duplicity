import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import PageContainer from "@/components/PageContainer";
import { E_VERSION_MAJOR, E_VERSION_MINOR } from "@/parser/main";
import { loadOniSave } from "@/services/oni-save/actions/load-onisave";
import {
    loadingErrorSelector,
    loadingFileSelector,
} from "@/services/oni-save/selectors/loading-status";
import {JSX} from "react";

const SaveError: React.FC = () => {
    const dispatch = useDispatch();
    let saveError: any = useSelector(loadingErrorSelector);
    const saveFile = useSelector(loadingFileSelector);

    const onForceLoad = React.useCallback(() => {
        if (saveFile) {
            dispatch(loadOniSave(saveFile, true));
        }
    }, [saveFile, dispatch]);

    let errorContent: JSX.Element;
    if (saveError.code === E_VERSION_MAJOR) {
        errorContent = (
            <>
                <p className="mb-4">
                    This save file indicates it is for a version of the game that is
                    incompatible with this editor.
                </p>
                <div className="border-t border-gray-200 my-4" />
                <p className="text-sm text-gray-600 mt-2">
                    {saveError.message}
                </p>
            </>
        );
    } else if (saveError.code === E_VERSION_MINOR) {
        errorContent = (
            <>
                <p className="mb-2">
                    This save file indicates it is for a version of the game that
                    different than the editor expects.
                </p>
                <p className="mb-4">However, it may still be possible to edit.</p>
                <div className="text-red-600 font-medium mb-4">
                    WARNING: Editing this save file may result in corrupt data, which
                    could lead to crashes and game breaking bugs further down the line.
                    Load this save at your own risk.
                </div>
                <button
                    onClick={onForceLoad}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-4"
                >
                    Override safety checks and load the save
                </button>
                <div className="border-t border-gray-200 my-4" />
                <p className="text-sm text-gray-600 mt-2">
                    {saveError.message}
                </p>
            </>
        );
    } else {
        errorContent = (
            <p className="text-gray-800 mt-2">
                {saveError.message}
            </p>
        );
    }

    return (
        <PageContainer title="Failed to Load">
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Error loading save</h2>
                <div className="border-t border-gray-200 mb-4" />
                {errorContent}
            </div>
        </PageContainer>
    );
};

export default SaveError;