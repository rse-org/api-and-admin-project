import list from 'src/modules/investor/list/investorListReducers';
import form from 'src/modules/investor/form/investorFormReducers';
import view from 'src/modules/investor/view/investorViewReducers';
import destroy from 'src/modules/investor/destroy/investorDestroyReducers';
import importerReducer from 'src/modules/investor/importer/investorImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
