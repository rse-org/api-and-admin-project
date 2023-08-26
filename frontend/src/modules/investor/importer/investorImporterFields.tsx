import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import investorEnumerators from 'src/modules/investor/investorEnumerators';
import moment from 'moment';

export default [
  {
    name: 'firstName',
    label: i18n('entities.investor.fields.firstName'),
    schema: schemas.string(
      i18n('entities.investor.fields.firstName'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.investor.fields.lastName'),
    schema: schemas.string(
      i18n('entities.investor.fields.lastName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.investor.fields.email'),
    schema: schemas.string(
      i18n('entities.investor.fields.email'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'phone',
    label: i18n('entities.investor.fields.phone'),
    schema: schemas.string(
      i18n('entities.investor.fields.phone'),
      {},
    ),
  },
  {
    name: 'birthdate',
    label: i18n('entities.investor.fields.birthdate'),
    schema: schemas.date(
      i18n('entities.investor.fields.birthdate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'gender',
    label: i18n('entities.investor.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.investor.fields.gender'),
      {
        "options": investorEnumerators.gender
      },
    ),
  },
  {
    name: 'products',
    label: i18n('entities.investor.fields.products'),
    schema: schemas.relationToMany(
      i18n('entities.investor.fields.products'),
      {},
    ),
  },
  {
    name: 'theme',
    label: i18n('entities.investor.fields.theme'),
    schema: schemas.enumerator(
      i18n('entities.investor.fields.theme'),
      {
        "options": investorEnumerators.theme
      },
    ),
  },
];