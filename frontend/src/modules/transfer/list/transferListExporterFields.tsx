import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.transfer.fields.id'),
  },
  {
    name: 'investor',
    label: i18n('entities.transfer.fields.investor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'direction',
    label: i18n('entities.transfer.fields.direction'),
  },
  {
    name: 'value',
    label: i18n('entities.transfer.fields.value'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'status',
    label: i18n('entities.transfer.fields.status'),
  },
  {
    name: 'completeDate',
    label: i18n('entities.transfer.fields.completeDate'),
  },
  {
    name: 'clearingHouse',
    label: i18n('entities.transfer.fields.clearingHouse'),
  },
  {
    name: 'clearingHouseTransactionId',
    label: i18n('entities.transfer.fields.clearingHouseTransactionId'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.transfer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.transfer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
