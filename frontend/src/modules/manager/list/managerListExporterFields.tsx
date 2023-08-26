import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.manager.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.manager.fields.firstName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.manager.fields.lastName'),
  },
  {
    name: 'title',
    label: i18n('entities.manager.fields.title'),
  },
  {
    name: 'about',
    label: i18n('entities.manager.fields.about'),
  },
  {
    name: 'school',
    label: i18n('entities.manager.fields.school'),
  },
  {
    name: 'products',
    label: i18n('entities.manager.fields.products'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'highestLevelEducation',
    label: i18n('entities.manager.fields.highestLevelEducation'),
  },
  {
    name: 'photos',
    label: i18n('entities.manager.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.manager.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.manager.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
