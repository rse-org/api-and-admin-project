import { createSelector } from 'reselect';

const selectRaw = (state) => state.manager.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const managerDestroySelectors = {
  selectLoading,
};

export default managerDestroySelectors;
