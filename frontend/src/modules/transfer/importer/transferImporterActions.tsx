import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/transfer/importer/transferImporterSelectors';
import TransferService from 'src/modules/transfer/transferService';
import fields from 'src/modules/transfer/importer/transferImporterFields';
import { i18n } from 'src/i18n';

const transferImporterActions = importerActions(
  'TRANSFER_IMPORTER',
  selectors,
  TransferService.import,
  fields,
  i18n('entities.transfer.importer.fileName'),
);

export default transferImporterActions;