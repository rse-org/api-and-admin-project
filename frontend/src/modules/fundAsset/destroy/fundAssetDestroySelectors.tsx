import { createSelector } from 'reselect';

const selectRaw = (state) => state.fundAsset.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const fundAssetDestroySelectors = {
  selectLoading,
};

export default fundAssetDestroySelectors;
