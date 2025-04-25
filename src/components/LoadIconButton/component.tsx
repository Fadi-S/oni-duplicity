import * as React from "react";

import { withTranslation, WithTranslation } from "react-i18next";

import AbstractLoadButton from "@/components/AbstractLoadButton";

import {FolderIcon} from "@heroicons/react/24/solid";

type Props = WithTranslation;
const LoadIconButton: React.FC<Props> = ({ t }) => (
  <AbstractLoadButton>
    {({ disabled, onClick }) => (
      <button
        title={t("save-file.verbs.load_titlecase")}
        disabled={disabled}
        onClick={onClick}
      >
        {t("save-file.verbs.load_titlecase")}
        <FolderIcon className="size-6" />
      </button>
    )}
  </AbstractLoadButton>
);

export default withTranslation()(LoadIconButton);
