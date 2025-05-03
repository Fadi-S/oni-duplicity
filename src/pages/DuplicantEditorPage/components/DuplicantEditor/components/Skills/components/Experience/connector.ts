import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MinionResumeBehavior } from '@/parser/main';
import { getBehaviorSelector } from '@/services/oni-save/selectors/behaviors';
import { modifyBehaviorPath } from '@/services/oni-save/actions/modify-behavior-path';
import { RootState, AppDispatch } from '@/store/store';

// Selector to derive experience from the MinionResumeBehavior
const experienceSelector = (gameObjectId: number) =>
    (state: RootState) => {
      const resume = getBehaviorSelector(MinionResumeBehavior)(state, { gameObjectId });
      // @ts-ignore: templateData may be undefined
      return resume?.templateData?.totalExperienceGained ?? 0;
    };

/**
 * Hook to read and write experience for a given Minion (gameObjectId).
 */
export function useExperience(gameObjectId: number) {
  const dispatch = useDispatch<AppDispatch>();

  // Read current experience from Redux
  const experience = useSelector(experienceSelector(gameObjectId));

  // Dispatcher to update experience (clamped to >= 0)
  const setExperience = React.useCallback(
      (value: number) => {
        const newExp = Math.max(0, value);
        dispatch(
            modifyBehaviorPath(
                gameObjectId,
                MinionResumeBehavior,
                ['templateData', 'totalExperienceGained'],
                newExp
            )
        );
      },
      [dispatch, gameObjectId]
  );

  return { experience, setExperience };
}
