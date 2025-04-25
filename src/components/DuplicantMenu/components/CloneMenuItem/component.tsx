import React, { useCallback } from 'react';

export interface CloneMenuItemProps {
  onCloneDuplicant(): void;
  onClick(): void;
}

const CloneMenuItem = ({ onCloneDuplicant, onClick }: CloneMenuItemProps) => {
  const handleClick = useCallback(() => {
    onCloneDuplicant();
    onClick();
  }, [onCloneDuplicant, onClick]);

  return (
      <button
          onClick={handleClick}
          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        Clone
      </button>
  );
};

export default CloneMenuItem;