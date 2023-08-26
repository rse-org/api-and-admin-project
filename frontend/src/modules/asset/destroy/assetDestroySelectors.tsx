import { createSelector } from 'reselect';

const selectRaw = (state) => state.asset.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assetDestroySelectors = {
  selectLoading,
};

export default assetDestroySelectors;
