import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";

import DuplicantList from "./components/DuplicantList";


type Props = WithTranslation;

const DuplicantsPage: React.FC<Props> = ({ t }) => {
  return (
    <div title={t("duplicant.noun_titlecase_plural")}>
      <DuplicantList className={""} />
    </div>
  );
};
export default withTranslation()(DuplicantsPage);
