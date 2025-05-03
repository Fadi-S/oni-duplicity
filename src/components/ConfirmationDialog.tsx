import React, { useState, useCallback } from "react";
import { Trans } from "react-i18next";

export interface ConfirmationDialogProps {
  title: string;
  message: string;
  onConfirm(): void;
  onCancel?(): void;
  children(props: { onClick(): void }): React.ReactNode;
}

const ConfirmationDialog = ({
                              title,
                              message,
                              onConfirm,
                              onCancel,
                              children
                            }: ConfirmationDialogProps) => {
  const [isOpen, setOpen] = useState(false);

  const onCancelClick = useCallback(() => {
    setOpen(false);
    onCancel?.();
  }, [onCancel]);

  const onConfirmClick = useCallback(() => {
    setOpen(false);
    onConfirm();
  }, [onConfirm]);

  return (
      <>
        {children({ onClick: () => setOpen(true) })}
        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onCancelClick}></div>
              <div className="relative bg-white rounded-lg shadow-xl w-96">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-medium">{title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">{message}</p>
                </div>
                <div className="p-4 border-t flex justify-end space-x-2">
                  <button
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                      onClick={onCancelClick}
                  >
                    <Trans i18nKey="dialog.verbs.cancel_titlecase" />
                  </button>
                  <button
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={onConfirmClick}
                  >
                    <Trans i18nKey="dialog.verbs.confirm_titlecase" />
                  </button>
                </div>
              </div>
            </div>
        )}
      </>
  );
};

export default ConfirmationDialog;