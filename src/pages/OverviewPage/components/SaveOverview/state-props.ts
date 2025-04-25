import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { saveGameSelector } from '@/services/oni-save/selectors/save-game';

export interface StateProps {
  saveName: string;
  cycleCount: number;
}

// Memoized selector combining saveName and cycleCount
const saveGameInfoSelector = createSelector(
    saveGameSelector,
    game => ({
      saveName: game?.header.gameInfo.baseName ?? '',
      cycleCount: game?.header.gameInfo.numberOfCycles ?? 0,
    })
);

// Custom hook to retrieve save game information from the Redux store
export function useStateProps(): StateProps {
  return useSelector(saveGameInfoSelector);
}
