import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.asset.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.asset.fields.name'),
  },
  {
    name: 'sym',
    label: i18n('entities.asset.fields.sym'),
  },
  {
    name: 'price',
    label: i18n('entities.asset.fields.price'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'hq',
    label: i18n('entities.asset.fields.hq'),
  },
  {
    name: 'ceo',
    label: i18n('entities.asset.fields.ceo'),
  },
  {
    name: 'employees',
    label: i18n('entities.asset.fields.employees'),
  },
  {
    name: 'icon',
    label: i18n('entities.asset.fields.icon'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'fund',
    label: i18n('entities.asset.fields.fund'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.asset.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.asset.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
