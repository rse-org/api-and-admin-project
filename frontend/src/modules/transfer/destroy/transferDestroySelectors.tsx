import { createSelector } from 'reselect';

const selectRaw = (state) => state.transfer.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const transferDestroySelectors = {
  selectLoading,
};

export default transferDestroySelectors;
