import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.fund.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.fund.fields.name'),
  },
  {
    name: 'subtitle',
    label: i18n('entities.fund.fields.subtitle'),
  },
  {
    name: 'intro',
    label: i18n('entities.fund.fields.intro'),
  },
  {
    name: 'description',
    label: i18n('entities.fund.fields.description'),
  },
  {
    name: 'fundAssets',
    label: i18n('entities.fund.fields.fundAssets'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'annualizedReturn',
    label: i18n('entities.fund.fields.annualizedReturn'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'managers',
    label: i18n('entities.fund.fields.managers'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'assetClass',
    label: i18n('entities.fund.fields.assetClass'),
  },
  {
    name: 'assets',
    label: i18n('entities.fund.fields.assets'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'strategyExpenses',
    label: i18n('entities.fund.fields.strategyExpenses'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'photos',
    label: i18n('entities.fund.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'icon',
    label: i18n('entities.fund.fields.icon'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.fund.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.fund.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
