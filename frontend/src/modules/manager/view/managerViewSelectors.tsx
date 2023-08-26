import { createSelector } from 'reselect';

const selectRaw = (state) => state.manager.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const managerViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default managerViewSelectors;
