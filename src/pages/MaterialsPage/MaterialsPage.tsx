import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";

import RedirectIfNoSave from "@/components/RedirectIfNoSave";
import MaterialsTable from "./components/MaterialsTable";

type Props = WithTranslation;

const MaterialsPage: React.FC<Props> = ({ t }) => {
  return (
    <div title={t("material.noun_titlecase")}>
      <RedirectIfNoSave />
      <MaterialsTable className="p-6" />
    </div>
  );
};

export default withTranslation()(MaterialsPage);
