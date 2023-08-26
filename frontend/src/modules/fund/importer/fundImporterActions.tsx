import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/fund/importer/fundImporterSelectors';
import FundService from 'src/modules/fund/fundService';
import fields from 'src/modules/fund/importer/fundImporterFields';
import { i18n } from 'src/i18n';

const fundImporterActions = importerActions(
  'FUND_IMPORTER',
  selectors,
  FundService.import,
  fields,
  i18n('entities.fund.importer.fileName'),
);

export default fundImporterActions;