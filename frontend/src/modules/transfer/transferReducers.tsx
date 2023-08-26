import list from 'src/modules/transfer/list/transferListReducers';
import form from 'src/modules/transfer/form/transferFormReducers';
import view from 'src/modules/transfer/view/transferViewReducers';
import destroy from 'src/modules/transfer/destroy/transferDestroyReducers';
import importerReducer from 'src/modules/transfer/importer/transferImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
