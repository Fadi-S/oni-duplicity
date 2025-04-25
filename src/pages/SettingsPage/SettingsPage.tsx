import * as React from "react";

import useOfflineModeSettings from "@/services/offline-mode/hooks/useOfflineModeSettings";

import PageContainer from "@/components/PageContainer";

import Language from "./components/Language";


const SettingsPage: React.FC = () => {
  const { enabled, supported, setEnabled } = useOfflineModeSettings();
  const onOfflineChecked = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEnabled(e.target.checked);
    },
    [setEnabled]
  );

  return (
    <PageContainer title="Settings" back>
      <div className="">
        <div>
          <div className="text-xl">Offline Mode</div>
          {!supported && (
            <div>
              Offline mode is not supported in your browser.
            </div>
          )}
          {supported && (
            <>
              <div>Your browser supports offline mode.</div>
              {enabled && (
                <div>
                  Offline Mode is now enabled. This web page will be available
                  without internet access.
                </div>
              )}
            </>
          )}
        </div>
        <div>
          <div className="text-xl">Language</div>
          <Language />
        </div>
      </div>
    </PageContainer>
  );
};
export default SettingsPage;
