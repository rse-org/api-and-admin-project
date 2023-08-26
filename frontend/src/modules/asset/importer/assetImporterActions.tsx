import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/asset/importer/assetImporterSelectors';
import AssetService from 'src/modules/asset/assetService';
import fields from 'src/modules/asset/importer/assetImporterFields';
import { i18n } from 'src/i18n';

const assetImporterActions = importerActions(
  'ASSET_IMPORTER',
  selectors,
  AssetService.import,
  fields,
  i18n('entities.asset.importer.fileName'),
);

export default assetImporterActions;