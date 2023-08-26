import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import managerEnumerators from 'src/modules/manager/managerEnumerators';

export default [
  {
    name: 'firstName',
    label: i18n('entities.manager.fields.firstName'),
    schema: schemas.string(
      i18n('entities.manager.fields.firstName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.manager.fields.lastName'),
    schema: schemas.string(
      i18n('entities.manager.fields.lastName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'title',
    label: i18n('entities.manager.fields.title'),
    schema: schemas.string(
      i18n('entities.manager.fields.title'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'about',
    label: i18n('entities.manager.fields.about'),
    schema: schemas.string(
      i18n('entities.manager.fields.about'),
      {},
    ),
  },
  {
    name: 'school',
    label: i18n('entities.manager.fields.school'),
    schema: schemas.string(
      i18n('entities.manager.fields.school'),
      {},
    ),
  },
  {
    name: 'products',
    label: i18n('entities.manager.fields.products'),
    schema: schemas.relationToMany(
      i18n('entities.manager.fields.products'),
      {},
    ),
  },
  {
    name: 'highestLevelEducation',
    label: i18n('entities.manager.fields.highestLevelEducation'),
    schema: schemas.enumerator(
      i18n('entities.manager.fields.highestLevelEducation'),
      {
        "options": managerEnumerators.highestLevelEducation
      },
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.manager.fields.photos'),
    schema: schemas.images(
      i18n('entities.manager.fields.photos'),
      {},
    ),
  },
];