import { createSelector } from 'reselect';

const selectRaw = (state) => state.document.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const documentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default documentViewSelectors;
