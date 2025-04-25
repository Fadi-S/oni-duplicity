import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';

import { LoadingStatus } from '@/services/oni-save/state';
import { isMockSelector } from '@/services/oni-save/selectors/save-game';
import { loadingStatusSelector } from '@/services/oni-save/selectors/loading-status';
import { saveOniSave } from '@/services/oni-save/actions/save-onisave';
import type { AppDispatch, RootState } from '@/store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const disabledSelector = createSelector(
    [loadingStatusSelector, isMockSelector],
    (loadStatus, isMock) => {
        return loadStatus !== LoadingStatus.Ready || isMock;
    }
);

export function useSaveGame() {
    const disabled = useAppSelector(disabledSelector);
    const dispatch = useAppDispatch();

    const onSave = () => dispatch(saveOniSave());

    return {
        disabled,
        onSave
    };
}