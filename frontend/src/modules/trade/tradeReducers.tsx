import list from 'src/modules/trade/list/tradeListReducers';
import form from 'src/modules/trade/form/tradeFormReducers';
import view from 'src/modules/trade/view/tradeViewReducers';
import destroy from 'src/modules/trade/destroy/tradeDestroyReducers';
import importerReducer from 'src/modules/trade/importer/tradeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
