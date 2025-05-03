import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MinionExportableBehaviors } from '@/exportable-behaviors';
import BehaviorChooserDialog from '@/components/BehaviorChooserDialog';

export interface ExportMenuItemProps {
    onExportBehaviors(behaviors: string[]): void;
    onClose(): void;
}

const ExportMenuItem = ({ onExportBehaviors, onClose }: ExportMenuItemProps) => {
    const { t } = useTranslation();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const onClick = useCallback(() => setDialogOpen(true), []);
    const onDialogApply = useCallback((behaviors: string[]) => {
        onExportBehaviors(behaviors);
        onClose();
    }, [onExportBehaviors, onClose]);

    const exportText = t("data.verbs.export_titlecase");

    return (
        <>
            <button
                onClick={onClick}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
                {exportText}
            </button>
            <BehaviorChooserDialog
                open={isDialogOpen}
                title={exportText}
                applyText={exportText}
                choices={MinionExportableBehaviors}
                onApply={onDialogApply}
                onCancel={onClose}
            />
        </>
    );
};

export default ExportMenuItem;