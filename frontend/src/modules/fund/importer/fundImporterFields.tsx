import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import fundEnumerators from 'src/modules/fund/fundEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.fund.fields.name'),
    schema: schemas.string(
      i18n('entities.fund.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'subtitle',
    label: i18n('entities.fund.fields.subtitle'),
    schema: schemas.string(
      i18n('entities.fund.fields.subtitle'),
      {},
    ),
  },
  {
    name: 'intro',
    label: i18n('entities.fund.fields.intro'),
    schema: schemas.string(
      i18n('entities.fund.fields.intro'),
      {
        "max": 250
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.fund.fields.description'),
    schema: schemas.string(
      i18n('entities.fund.fields.description'),
      {
        "max": 21845
      },
    ),
  },
  {
    name: 'fundAssets',
    label: i18n('entities.fund.fields.fundAssets'),
    schema: schemas.relationToMany(
      i18n('entities.fund.fields.fundAssets'),
      {},
    ),
  },
  {
    name: 'annualizedReturn',
    label: i18n('entities.fund.fields.annualizedReturn'),
    schema: schemas.decimal(
      i18n('entities.fund.fields.annualizedReturn'),
      {},
    ),
  },
  {
    name: 'managers',
    label: i18n('entities.fund.fields.managers'),
    schema: schemas.relationToMany(
      i18n('entities.fund.fields.managers'),
      {},
    ),
  },
  {
    name: 'assetClass',
    label: i18n('entities.fund.fields.assetClass'),
    schema: schemas.enumerator(
      i18n('entities.fund.fields.assetClass'),
      {
        "options": fundEnumerators.assetClass
      },
    ),
  },
  {
    name: 'assets',
    label: i18n('entities.fund.fields.assets'),
    schema: schemas.relationToMany(
      i18n('entities.fund.fields.assets'),
      {},
    ),
  },
  {
    name: 'strategyExpenses',
    label: i18n('entities.fund.fields.strategyExpenses'),
    schema: schemas.decimal(
      i18n('entities.fund.fields.strategyExpenses'),
      {},
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.fund.fields.photos'),
    schema: schemas.images(
      i18n('entities.fund.fields.photos'),
      {
        "max": 3
      },
    ),
  },
  {
    name: 'icon',
    label: i18n('entities.fund.fields.icon'),
    schema: schemas.images(
      i18n('entities.fund.fields.icon'),
      {},
    ),
  },
];