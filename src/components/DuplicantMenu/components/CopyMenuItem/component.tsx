import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MinionExportableBehaviors } from '@/exportable-behaviors';
import BehaviorChooserDialog from '@/components/BehaviorChooserDialog';

export interface CopyMenuItemProps {
    onCopyBehaviors(behaviors: string[]): void;
    onClose(): void;
}

const CopyMenuItem = ({ onCopyBehaviors, onClose }: CopyMenuItemProps) => {
    const { t } = useTranslation();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const onClick = useCallback(() => setDialogOpen(true), []);
    const onDialogApply = useCallback((behaviors: string[]) => {
        onCopyBehaviors(behaviors);
        onClose();
    }, [onCopyBehaviors, onClose]);

    const copyText = t("data.verbs.copy_titlecase");

    return (
        <>
            <button
                onClick={onClick}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
                {copyText}
            </button>
            <BehaviorChooserDialog
                open={isDialogOpen}
                title={copyText}
                applyText={copyText}
                choices={MinionExportableBehaviors}
                onApply={onDialogApply}
                onCancel={onClose}
            />
        </>
    );
};

export default CopyMenuItem;