import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";

import {PencilIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

export interface EditButtonProps {
  className?: string;
  gameObjectId: number;
}
type Props = EditButtonProps & WithTranslation;
const EditButton: React.FC<Props> = ({ className, gameObjectId, t }) => (
  <Link
    className={className}
    to={`/duplicants/${gameObjectId}`}
  >
    {t("duplicant.verbs.edit_titlecase")}
    <PencilIcon className="size-6" />
  </Link>
);
export default withTranslation()(EditButton);
