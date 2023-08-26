import { createSelector } from 'reselect';

const selectRaw = (state) => state.trade.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tradeDestroySelectors = {
  selectLoading,
};

export default tradeDestroySelectors;
