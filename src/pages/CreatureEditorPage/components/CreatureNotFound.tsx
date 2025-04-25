import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";

import PageContainer from "@/components/PageContainer";

type Props = WithTranslation;

const CreatureNotFound: React.FC<Props> = ({ t }) => {
  return (
    <PageContainer title={t("creature.conditions.missing_titlecase")} back>
      <div className="">
        <div className="">
          {t("creature.conditions.missing_titlecase")}
        </div>
      </div>
    </PageContainer>
  );
};

export default withTranslation()(CreatureNotFound);
