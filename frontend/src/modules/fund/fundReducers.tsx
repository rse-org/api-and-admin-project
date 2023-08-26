import list from 'src/modules/fund/list/fundListReducers';
import form from 'src/modules/fund/form/fundFormReducers';
import view from 'src/modules/fund/view/fundViewReducers';
import destroy from 'src/modules/fund/destroy/fundDestroyReducers';
import importerReducer from 'src/modules/fund/importer/fundImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
