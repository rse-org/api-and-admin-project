import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/fundAsset/importer/fundAssetImporterSelectors';
import FundAssetService from 'src/modules/fundAsset/fundAssetService';
import fields from 'src/modules/fundAsset/importer/fundAssetImporterFields';
import { i18n } from 'src/i18n';

const fundAssetImporterActions = importerActions(
  'FUNDASSET_IMPORTER',
  selectors,
  FundAssetService.import,
  fields,
  i18n('entities.fundAsset.importer.fileName'),
);

export default fundAssetImporterActions;