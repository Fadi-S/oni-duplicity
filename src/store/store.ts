import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';
import { initialize } from '@/actions/initialize';
import { defaultAppState } from '@/state';
import { loadPersistedState, savePersistedState } from './persist';

// import {
//     actionSanitizer,
//     stateSanitizer,
//     actionsBlacklist,
// } from './devtool-sanitizer';

const sagaMiddleware = createSagaMiddleware();

const initialState = loadPersistedState(defaultAppState);

export const store = configureStore({
    reducer,
    preloadedState: initialState,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),

    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(saga);

store.subscribe(() => savePersistedState(store.getState()));

store.dispatch(initialize());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
