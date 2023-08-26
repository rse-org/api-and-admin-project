import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/investor/importer/investorImporterSelectors';
import InvestorService from 'src/modules/investor/investorService';
import fields from 'src/modules/investor/importer/investorImporterFields';
import { i18n } from 'src/i18n';

const investorImporterActions = importerActions(
  'INVESTOR_IMPORTER',
  selectors,
  InvestorService.import,
  fields,
  i18n('entities.investor.importer.fileName'),
);

export default investorImporterActions;