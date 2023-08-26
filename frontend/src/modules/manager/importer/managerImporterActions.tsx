import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/manager/importer/managerImporterSelectors';
import ManagerService from 'src/modules/manager/managerService';
import fields from 'src/modules/manager/importer/managerImporterFields';
import { i18n } from 'src/i18n';

const managerImporterActions = importerActions(
  'MANAGER_IMPORTER',
  selectors,
  ManagerService.import,
  fields,
  i18n('entities.manager.importer.fileName'),
);

export default managerImporterActions;