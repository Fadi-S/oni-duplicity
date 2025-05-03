import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { pasteBehaviors } from "@/services/oni-save/actions/paste-behaviors";
import { gameObjectTypesByIdSelector } from "@/services/oni-save/selectors/game-objects";
import { MinionExportableBehaviors } from "@/exportable-behaviors";
import BehaviorChooserDialog from "@/components/BehaviorChooserDialog";

export interface DuplicantMenuProps {
    gameObjectId: number;
}

const DuplicantMenu = ({ gameObjectId }: DuplicantMenuProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // Redux state selectors
    const typesById = useSelector(gameObjectTypesByIdSelector);
    // const copyPasteType = useSelector(copyPasteGameObjectTypeSelect);

    // Derived state
    // const isPasteDisabled =
    //     !typesById[gameObjectId] || copyPasteType !== typesById[gameObjectId];

    // Local state for dialogs
    const [isCopyDialogOpen, setCopyDialogOpen] = useState(false);

    // Handlers
    const handleCopyBehaviors = useCallback(
        (behaviors: string[]) => {
            console.log("Copied behaviors:", behaviors);
            setCopyDialogOpen(false);
        },
        []
    );

    const handlePasteBehaviors = useCallback(() => {
        dispatch(pasteBehaviors(gameObjectId));
    }, [dispatch, gameObjectId]);

    return (
        <Menu as="div" className="relative">
            <MenuButton
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
                aria-label="Menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </MenuButton>

            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {/* Copy Menu Item */}
                    <MenuItem>
                        <button
                            onClick={() => setCopyDialogOpen(true)}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {t("data.verbs.copy_titlecase")}
                        </button>
                    </MenuItem>

                    {/* Paste Menu Item */}
                    {/*<MenuItem>*/}
                    {/*    <button*/}
                    {/*        onClick={handlePasteBehaviors}*/}
                    {/*        disabled={isPasteDisabled}*/}
                    {/*        className={`block w-full px-4 py-2 text-left text-sm ${*/}
                    {/*            isPasteDisabled*/}
                    {/*                ? "text-gray-400 cursor-not-allowed"*/}
                    {/*                : "text-gray-700 hover:bg-gray-100"*/}
                    {/*        }`}*/}
                    {/*    >*/}
                    {/*        {t("data.verbs.paste_titlecase")}*/}
                    {/*    </button>*/}
                    {/*</MenuItem>*/}

                    <div className="border-t border-gray-200 my-1"></div>

                    {/* Import Menu Item */}
                    <MenuItem>
                        <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                            {t("data.verbs.import_titlecase")}
                        </button>
                    </MenuItem>

                    {/* Export Menu Item */}
                    <MenuItem>
                        <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                            {t("data.verbs.export_titlecase")}
                        </button>
                    </MenuItem>

                    <div className="border-t border-gray-200 my-1"></div>

                    {/* Clone Menu Item */}
                    <MenuItem>
                        <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                            {t("data.verbs.clone_titlecase", "Clone")}
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>

            {/* Copy Dialog */}
            <BehaviorChooserDialog
                open={isCopyDialogOpen}
                title={t("data.verbs.copy_titlecase")}
                applyText={t("data.verbs.copy_titlecase")}
                choices={MinionExportableBehaviors}
                onApply={handleCopyBehaviors}
                onCancel={() => setCopyDialogOpen(false)}
            />
        </Menu>
    );
};

export default DuplicantMenu;