import * as React from "react";

import { Trans } from "react-i18next";

import AbstractLoadButton from "@/components/AbstractLoadButton";

const LoadButton: React.FC = () => {
  return (
    <AbstractLoadButton>
      {
        ({ disabled, onClick }) => (
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={disabled} onClick={onClick}>
            <Trans i18nKey="save-file.verbs.load_titlecase">Load</Trans>
          </button>
        )
      }

    </AbstractLoadButton>
  );
}

export default LoadButton;
