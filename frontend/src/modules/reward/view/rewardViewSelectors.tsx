import { createSelector } from 'reselect';

const selectRaw = (state) => state.reward.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const rewardViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default rewardViewSelectors;
