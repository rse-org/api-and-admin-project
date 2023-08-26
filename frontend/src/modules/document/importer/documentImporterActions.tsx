import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/document/importer/documentImporterSelectors';
import DocumentService from 'src/modules/document/documentService';
import fields from 'src/modules/document/importer/documentImporterFields';
import { i18n } from 'src/i18n';

const documentImporterActions = importerActions(
  'DOCUMENT_IMPORTER',
  selectors,
  DocumentService.import,
  fields,
  i18n('entities.document.importer.fileName'),
);

export default documentImporterActions;