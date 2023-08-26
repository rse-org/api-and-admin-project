import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import orderEnumerators from 'src/modules/order/orderEnumerators';

export default [
  {
    name: 'investor',
    label: i18n('entities.order.fields.investor'),
    schema: schemas.relationToOne(
      i18n('entities.order.fields.investor'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'funds',
    label: i18n('entities.order.fields.funds'),
    schema: schemas.relationToMany(
      i18n('entities.order.fields.funds'),
      {
        "required": true,
        "min": 1
      },
    ),
  },
  {
    name: 'employee',
    label: i18n('entities.order.fields.employee'),
    schema: schemas.relationToOne(
      i18n('entities.order.fields.employee'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.order.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.order.fields.status'),
      {
        "options": orderEnumerators.status
      },
    ),
  },
  {
    name: 'attachments',
    label: i18n('entities.order.fields.attachments'),
    schema: schemas.files(
      i18n('entities.order.fields.attachments'),
      {
        "max": 3
      },
    ),
  },
];