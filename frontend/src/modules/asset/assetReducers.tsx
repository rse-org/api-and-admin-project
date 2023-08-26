import list from 'src/modules/asset/list/assetListReducers';
import form from 'src/modules/asset/form/assetFormReducers';
import view from 'src/modules/asset/view/assetViewReducers';
import destroy from 'src/modules/asset/destroy/assetDestroyReducers';
import importerReducer from 'src/modules/asset/importer/assetImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
