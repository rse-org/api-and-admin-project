import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.trade.fields.id'),
  },
  {
    name: 'value',
    label: i18n('entities.trade.fields.value'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'status',
    label: i18n('entities.trade.fields.status'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'investor',
    label: i18n('entities.trade.fields.investor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'product',
    label: i18n('entities.trade.fields.product'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'executeDate',
    label: i18n('entities.trade.fields.executeDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'valueOnExecute',
    label: i18n('entities.trade.fields.valueOnExecute'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'createdAt',
    label: i18n('entities.trade.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.trade.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
