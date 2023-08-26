import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.fundAsset.fields.id'),
  },
  {
    name: 'fund',
    label: i18n('entities.fundAsset.fields.fund'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'asset',
    label: i18n('entities.fundAsset.fields.asset'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'percentage',
    label: i18n('entities.fundAsset.fields.percentage'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'code',
    label: i18n('entities.fundAsset.fields.code'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.fundAsset.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.fundAsset.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
