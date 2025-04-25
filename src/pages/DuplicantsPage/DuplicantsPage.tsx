import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";


import PageContainer from "@/components/PageContainer";
import RedirectIfNoSave from "@/components/RedirectIfNoSave";

import DuplicantList from "./components/DuplicantList";


type Props = WithTranslation;

const DuplicantsPage: React.FC<Props> = ({ t }) => {
  return (
    <PageContainer title={t("duplicant.noun_titlecase_plural")}>
      <RedirectIfNoSave />
      <DuplicantList className={""} />
    </PageContainer>
  );
};
export default withTranslation()(DuplicantsPage);
