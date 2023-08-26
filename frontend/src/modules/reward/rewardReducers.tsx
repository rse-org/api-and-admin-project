import list from 'src/modules/reward/list/rewardListReducers';
import form from 'src/modules/reward/form/rewardFormReducers';
import view from 'src/modules/reward/view/rewardViewReducers';
import destroy from 'src/modules/reward/destroy/rewardDestroyReducers';
import importerReducer from 'src/modules/reward/importer/rewardImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
