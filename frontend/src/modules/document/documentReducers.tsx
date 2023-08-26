import list from 'src/modules/document/list/documentListReducers';
import form from 'src/modules/document/form/documentFormReducers';
import view from 'src/modules/document/view/documentViewReducers';
import destroy from 'src/modules/document/destroy/documentDestroyReducers';
import importerReducer from 'src/modules/document/importer/documentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
