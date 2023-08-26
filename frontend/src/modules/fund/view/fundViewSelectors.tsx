import { createSelector } from 'reselect';

const selectRaw = (state) => state.fund.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const fundViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default fundViewSelectors;
