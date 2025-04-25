import React, { useCallback } from 'react';

export interface PasteMenuItemProps {
  gameObjectId: number;
  disabled: boolean;
  onPasteBehaviors(): void;
  onClose(): void;
}

const PasteMenuItem = ({ disabled, onPasteBehaviors, onClose }: PasteMenuItemProps) => {
  const onClick = useCallback(() => {
    onClose();
    onPasteBehaviors();
  }, [onClose, onPasteBehaviors]);

  return (
      <button
          onClick={onClick}
          disabled={disabled}
          className={`block w-full px-4 py-2 text-left text-sm ${
              disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
          }`}
      >
        Paste
      </button>
  );
};

export default PasteMenuItem;