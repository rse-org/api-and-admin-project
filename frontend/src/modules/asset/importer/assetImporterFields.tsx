import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.asset.fields.name'),
    schema: schemas.string(
      i18n('entities.asset.fields.name'),
      {},
    ),
  },
  {
    name: 'sym',
    label: i18n('entities.asset.fields.sym'),
    schema: schemas.string(
      i18n('entities.asset.fields.sym'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.asset.fields.price'),
    schema: schemas.decimal(
      i18n('entities.asset.fields.price'),
      {
        "scale": 2,
        "min": 0.01
      },
    ),
  },
  {
    name: 'hq',
    label: i18n('entities.asset.fields.hq'),
    schema: schemas.string(
      i18n('entities.asset.fields.hq'),
      {},
    ),
  },
  {
    name: 'ceo',
    label: i18n('entities.asset.fields.ceo'),
    schema: schemas.string(
      i18n('entities.asset.fields.ceo'),
      {},
    ),
  },
  {
    name: 'employees',
    label: i18n('entities.asset.fields.employees'),
    schema: schemas.integer(
      i18n('entities.asset.fields.employees'),
      {},
    ),
  },
  {
    name: 'icon',
    label: i18n('entities.asset.fields.icon'),
    schema: schemas.images(
      i18n('entities.asset.fields.icon'),
      {},
    ),
  },
  {
    name: 'fund',
    label: i18n('entities.asset.fields.fund'),
    schema: schemas.relationToMany(
      i18n('entities.asset.fields.fund'),
      {},
    ),
  },
];