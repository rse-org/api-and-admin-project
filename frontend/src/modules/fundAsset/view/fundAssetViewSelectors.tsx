import { createSelector } from 'reselect';

const selectRaw = (state) => state.fundAsset.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const fundAssetViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default fundAssetViewSelectors;
