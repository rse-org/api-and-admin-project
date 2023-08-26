import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.order.fields.id'),
  },
  {
    name: 'investor',
    label: i18n('entities.order.fields.investor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'funds',
    label: i18n('entities.order.fields.funds'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'employee',
    label: i18n('entities.order.fields.employee'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'status',
    label: i18n('entities.order.fields.status'),
  },
  {
    name: 'attachments',
    label: i18n('entities.order.fields.attachments'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.order.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.order.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
