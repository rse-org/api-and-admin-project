import list from 'src/modules/fundAsset/list/fundAssetListReducers';
import form from 'src/modules/fundAsset/form/fundAssetFormReducers';
import view from 'src/modules/fundAsset/view/fundAssetViewReducers';
import destroy from 'src/modules/fundAsset/destroy/fundAssetDestroyReducers';
import importerReducer from 'src/modules/fundAsset/importer/fundAssetImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
