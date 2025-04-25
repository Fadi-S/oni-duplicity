import { combineReducers } from '@reduxjs/toolkit';

import i18nReducer from '@/services/i18n/reducer';
import oniSaveReducer from '@/services/oni-save/reducer';
import offlineModeReducer from '@/services/offline-mode/reducer';

const servicesReducer = combineReducers({
  i18n: i18nReducer,
  oniSave: oniSaveReducer,
  offlineMode: offlineModeReducer,
});

const rootReducer = combineReducers({
  services: servicesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
