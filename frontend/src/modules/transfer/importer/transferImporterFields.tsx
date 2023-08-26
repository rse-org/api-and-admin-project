import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import transferEnumerators from 'src/modules/transfer/transferEnumerators';
import moment from 'moment';

export default [
  {
    name: 'investor',
    label: i18n('entities.transfer.fields.investor'),
    schema: schemas.relationToOne(
      i18n('entities.transfer.fields.investor'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'direction',
    label: i18n('entities.transfer.fields.direction'),
    schema: schemas.enumerator(
      i18n('entities.transfer.fields.direction'),
      {
        "required": true,
        "options": transferEnumerators.direction
      },
    ),
  },
  {
    name: 'value',
    label: i18n('entities.transfer.fields.value'),
    schema: schemas.decimal(
      i18n('entities.transfer.fields.value'),
      {
        "min": 0.01,
        "required": true,
        "scale": 2
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.transfer.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.transfer.fields.status'),
      {
        "options": transferEnumerators.status
      },
    ),
  },
  {
    name: 'completeDate',
    label: i18n('entities.transfer.fields.completeDate'),
    schema: schemas.date(
      i18n('entities.transfer.fields.completeDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'clearingHouse',
    label: i18n('entities.transfer.fields.clearingHouse'),
    schema: schemas.string(
      i18n('entities.transfer.fields.clearingHouse'),
      {},
    ),
  },
  {
    name: 'clearingHouseTransactionId',
    label: i18n('entities.transfer.fields.clearingHouseTransactionId'),
    schema: schemas.string(
      i18n('entities.transfer.fields.clearingHouseTransactionId'),
      {},
    ),
  },
];