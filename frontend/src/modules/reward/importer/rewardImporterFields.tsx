import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.reward.fields.name'),
    schema: schemas.string(
      i18n('entities.reward.fields.name'),
      {},
    ),
  },
  {
    name: 'investor',
    label: i18n('entities.reward.fields.investor'),
    schema: schemas.relationToOne(
      i18n('entities.reward.fields.investor'),
      {},
    ),
  },
  {
    name: 'affiliate',
    label: i18n('entities.reward.fields.affiliate'),
    schema: schemas.relationToOne(
      i18n('entities.reward.fields.affiliate'),
      {},
    ),
  },
];