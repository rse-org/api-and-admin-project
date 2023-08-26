import { createSelector } from 'reselect';

const selectRaw = (state) => state.investor.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const investorDestroySelectors = {
  selectLoading,
};

export default investorDestroySelectors;
