import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'fund',
    label: i18n('entities.fundAsset.fields.fund'),
    schema: schemas.relationToOne(
      i18n('entities.fundAsset.fields.fund'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'asset',
    label: i18n('entities.fundAsset.fields.asset'),
    schema: schemas.relationToOne(
      i18n('entities.fundAsset.fields.asset'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'percentage',
    label: i18n('entities.fundAsset.fields.percentage'),
    schema: schemas.decimal(
      i18n('entities.fundAsset.fields.percentage'),
      {
        "scale": 2,
        "min": 0.01
      },
    ),
  },
  {
    name: 'code',
    label: i18n('entities.fundAsset.fields.code'),
    schema: schemas.string(
      i18n('entities.fundAsset.fields.code'),
      {
        "required": true
      },
    ),
  },
];