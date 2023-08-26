import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.reward.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.reward.fields.name'),
  },
  {
    name: 'investor',
    label: i18n('entities.reward.fields.investor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'affiliate',
    label: i18n('entities.reward.fields.affiliate'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.reward.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.reward.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
