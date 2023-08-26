import { createSelector } from 'reselect';

const selectRaw = (state) => state.reward.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const rewardDestroySelectors = {
  selectLoading,
};

export default rewardDestroySelectors;
