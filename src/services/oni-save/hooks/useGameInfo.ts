import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { saveGameSelector } from '@/services/oni-save/selectors/save-game';

export interface StateProps {
    saveName: string;
    cycleCount: number;
}

const saveGameInfoSelector = createSelector(
    saveGameSelector,
    game => ({
        saveName: game?.header.gameInfo.baseName ?? '',
        cycleCount: game?.header.gameInfo.numberOfCycles ?? 0,
    })
);

export function useGameInfo(): StateProps {
    return useSelector(saveGameInfoSelector);
}
