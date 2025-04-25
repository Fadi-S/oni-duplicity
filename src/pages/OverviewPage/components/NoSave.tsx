import * as React from "react";

import { Trans, WithTranslation, withTranslation } from "react-i18next";

import { OSType } from "@/runtime-env";

import PageContainer from "@/components/PageContainer";
import LoadButton from "@/components/LoadButton";

const SaveFilePaths: Record<OSType, string | null> = {
  windows: "Documents/Klei/OxygenNotIncluded/save_files",
  mac: null,
  linux: "~/.config/unity3d/Klei/Oxygen Not Included/save_files",
  unknown: null,
};
const saveFilePath = SaveFilePaths[OSType];

type Props = WithTranslation;

const NoSave: React.FC<Props> = ({ t }) => {
  return (
      <PageContainer title={t("overview-page.no-save.title")}>
        <div className="flex flex-col space-y-4 items-start">
          <div>
            <div className="text-2xl">
              <Trans i18nKey="overview-page.no-save.prompt">
                Load a save using the controls on the upper left.
              </Trans>
            </div>
          </div>
          {SaveFilePaths[OSType] && (
              <div className="">
                <Trans className="prose" i18nKey="overview-page.no-save.save-location">
                  {/*@ts-ignore*/}
                  Save files can be found at <code>{{path: saveFilePath}}</code>
                </Trans>
              </div>
          )}

          <LoadButton />
        </div>
      </PageContainer>
  );
};
export default withTranslation()(NoSave);
