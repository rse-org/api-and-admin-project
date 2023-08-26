import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.investor.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.investor.fields.firstName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.investor.fields.lastName'),
  },
  {
    name: 'email',
    label: i18n('entities.investor.fields.email'),
  },
  {
    name: 'phone',
    label: i18n('entities.investor.fields.phone'),
  },
  {
    name: 'birthdate',
    label: i18n('entities.investor.fields.birthdate'),
  },
  {
    name: 'gender',
    label: i18n('entities.investor.fields.gender'),
  },
  {
    name: 'products',
    label: i18n('entities.investor.fields.products'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'theme',
    label: i18n('entities.investor.fields.theme'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.investor.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.investor.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
