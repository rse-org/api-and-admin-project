import { createSelector } from 'reselect';

const selectRaw = (state) => state.fund.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const fundDestroySelectors = {
  selectLoading,
};

export default fundDestroySelectors;
