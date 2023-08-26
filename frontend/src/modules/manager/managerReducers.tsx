import list from 'src/modules/manager/list/managerListReducers';
import form from 'src/modules/manager/form/managerFormReducers';
import view from 'src/modules/manager/view/managerViewReducers';
import destroy from 'src/modules/manager/destroy/managerDestroyReducers';
import importerReducer from 'src/modules/manager/importer/managerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
