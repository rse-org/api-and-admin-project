import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'file',
    label: i18n('entities.document.fields.file'),
    schema: schemas.files(
      i18n('entities.document.fields.file'),
      {},
    ),
  },
  {
    name: 'investor',
    label: i18n('entities.document.fields.investor'),
    schema: schemas.relationToMany(
      i18n('entities.document.fields.investor'),
      {},
    ),
  },
];