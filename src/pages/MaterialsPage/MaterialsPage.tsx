import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";


import PageContainer from "@/components/PageContainer";

import RedirectIfNoSave from "@/components/RedirectIfNoSave";
import MaterialsTable from "./components/MaterialsTable";

type Props = WithTranslation;

const MaterialsPage: React.FC<Props> = ({ t }) => {
  return (
    <PageContainer title={t("material.noun_titlecase")}>
      <RedirectIfNoSave />
      <MaterialsTable className="p-6" />
    </PageContainer>
  );
};

export default withTranslation()(MaterialsPage);
