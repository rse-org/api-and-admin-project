import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'value',
    label: i18n('entities.trade.fields.value'),
    schema: schemas.decimal(
      i18n('entities.trade.fields.value'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.trade.fields.status'),
    schema: schemas.stringArray(
      i18n('entities.trade.fields.status'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'investor',
    label: i18n('entities.trade.fields.investor'),
    schema: schemas.relationToOne(
      i18n('entities.trade.fields.investor'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'product',
    label: i18n('entities.trade.fields.product'),
    schema: schemas.relationToOne(
      i18n('entities.trade.fields.product'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'executeDate',
    label: i18n('entities.trade.fields.executeDate'),
    schema: schemas.datetime(
      i18n('entities.trade.fields.executeDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'valueOnExecute',
    label: i18n('entities.trade.fields.valueOnExecute'),
    schema: schemas.decimal(
      i18n('entities.trade.fields.valueOnExecute'),
      {
        "min": 0.01,
        "scale": 2
      },
    ),
  },
];