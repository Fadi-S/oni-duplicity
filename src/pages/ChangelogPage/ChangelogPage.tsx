import * as React from "react";
import Markdown from "react-markdown";

import { WithTranslation, withTranslation } from "react-i18next";

import ChangelogContent from "@changelog";

import PageContainer from "@/components/PageContainer";

type Props = WithTranslation;

const ChangelogPage: React.FC<Props> = ({ t }) => {
  return (
    <PageContainer title={t("changelog.title")} back>
      <Markdown className="prose max-w-3xl mx-auto" children={ChangelogContent} />
    </PageContainer>
  );
};

export default withTranslation()(ChangelogPage);
