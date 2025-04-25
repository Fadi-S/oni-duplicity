import * as React from "react";

import { Trans } from "react-i18next";

import AbstractLoadButton from "@/components/AbstractLoadButton";
import Button from "@/components/Button";
import {CloudArrowUpIcon} from "@heroicons/react/24/solid";

const LoadButton: React.FC = () => {
  return (
    <AbstractLoadButton>
      {
        ({ disabled, onClick }) => (
            <Button disabled={disabled} icon={CloudArrowUpIcon} onClick={onClick}>
              <Trans i18nKey="save-file.verbs.load_titlecase">Load</Trans>
            </Button>
        )
      }

    </AbstractLoadButton>
  );
}

export default LoadButton;
