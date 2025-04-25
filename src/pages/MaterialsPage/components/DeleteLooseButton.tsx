import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SimHashName } from '@/parser/main';
import { useDeleteMaterials } from '@/services/oni-save/hooks/useMaterials';
import ConfirmationDialog from '@/components/ConfirmationDialog';
import React from "react";

export interface DeleteLooseButtonProps {
  className?: string;
  materialType?: SimHashName;
}

const DeleteLooseButton = ({ className, materialType }: DeleteLooseButtonProps) => {
  const { t } = useTranslation();
  const onDeleteMaterial = useDeleteMaterials();

  const onDeleteConfirm = useCallback(() => {
    onDeleteMaterial(materialType);
  }, [onDeleteMaterial, materialType]);

  return (
      <ConfirmationDialog
          title={t('material_loose.verbs.delete_name', {
            name: materialType || t('material.all_titlecase')
          })}
          message={t('material_loose.prompts.delete')}
          onConfirm={onDeleteConfirm}
      >
        {({ onClick }) => (
            <button
                onClick={onClick}
                className={`p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors ${className}`}
                aria-label={t('delete')}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
        )}
      </ConfirmationDialog>
  );
};

export default DeleteLooseButton;