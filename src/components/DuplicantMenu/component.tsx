import React, { useState } from 'react';
import CopyMenuItem from "./components/CopyMenuItem";
import ImportMenuItem from "./components/ImportMenuItem";
import ExportMenuItem from "./components/ExportMenuItem";
import PasteMenuItem from "./components/PasteMenuItem";
import CloneMenuItem from "./components/CloneMenuItem";

export interface DuplicantMenuProps {
    gameObjectId: number;
}

const DuplicantMenu = ({ gameObjectId }: DuplicantMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuRef, setMenuRef] = useState<HTMLButtonElement | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="relative">
            <button
                ref={setMenuRef}
                onClick={toggleMenu}
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
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <CopyMenuItem gameObjectId={gameObjectId} onClose={closeMenu} />
                        <PasteMenuItem gameObjectId={gameObjectId} onClose={closeMenu} />
                        <div className="border-t border-gray-200 my-1"></div>
                        <ImportMenuItem gameObjectId={gameObjectId} onClose={closeMenu} />
                        <ExportMenuItem gameObjectId={gameObjectId} onClose={closeMenu} />
                        <div className="border-t border-gray-200 my-1"></div>
                        <CloneMenuItem gameObjectId={gameObjectId} onClick={closeMenu} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DuplicantMenu;