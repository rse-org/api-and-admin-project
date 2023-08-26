import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.document.fields.id'),
  },
  {
    name: 'file',
    label: i18n('entities.document.fields.file'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'investor',
    label: i18n('entities.document.fields.investor'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.document.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.document.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
