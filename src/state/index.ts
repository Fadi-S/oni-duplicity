import { I18NState, defaultI18NState } from "@/services/i18n/state";
import { OniSaveState, defaultOniSaveState } from "@/services/oni-save/state";
import { OfflineModeState, defaultOfflineModeState } from "@/services/offline-mode/state";

export * from "./utils";

// AppState no longer includes router; routing is managed by React Router v7 at the component level
export interface AppState {
  services: {
    i18n: I18NState;
    oniSave: OniSaveState;
    offlineMode: OfflineModeState;
  };
}

// Default application state matching the shape of AppState
export const defaultAppState: Readonly<AppState> = {
  services: {
    i18n: defaultI18NState,
    oniSave: defaultOniSaveState,
    offlineMode: defaultOfflineModeState,
  },
};

Object.freeze(defaultAppState);
