import { createSelector } from 'reselect';

const selectRaw = (state) => state.transfer.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const transferViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default transferViewSelectors;
