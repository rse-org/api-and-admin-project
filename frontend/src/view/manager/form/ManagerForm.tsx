import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import managerEnumerators from 'src/modules/manager/managerEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FundAutocompleteFormItem from 'src/view/fund/autocomplete/FundAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('entities.manager.fields.firstName'),
    {
      "required": true
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.manager.fields.lastName'),
    {
      "required": true
    },
  ),
  title: yupFormSchemas.string(
    i18n('entities.manager.fields.title'),
    {
      "required": true
    },
  ),
  about: yupFormSchemas.string(
    i18n('entities.manager.fields.about'),
    {},
  ),
  school: yupFormSchemas.string(
    i18n('entities.manager.fields.school'),
    {},
  ),
  products: yupFormSchemas.relationToMany(
    i18n('entities.manager.fields.products'),
    {},
  ),
  highestLevelEducation: yupFormSchemas.enumerator(
    i18n('entities.manager.fields.highestLevelEducation'),
    {
      "options": managerEnumerators.highestLevelEducation
    },
  ),
  photos: yupFormSchemas.images(
    i18n('entities.manager.fields.photos'),
    {},
  ),
});

function ManagerForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      title: record.title,
      about: record.about,
      school: record.school,
      products: record.products || [],
      highestLevelEducation: record.highestLevelEducation,
      photos: record.photos || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="firstName"
                label={i18n('entities.manager.fields.firstName')}
              placeholder={i18n('entities.manager.placeholders.firstName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('entities.manager.fields.lastName')}
              placeholder={i18n('entities.manager.placeholders.lastName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="title"
                label={i18n('entities.manager.fields.title')}
              placeholder={i18n('entities.manager.placeholders.title')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="about"
                label={i18n('entities.manager.fields.about')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="school"
                label={i18n('entities.manager.fields.school')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FundAutocompleteFormItem  
                name="products"
                label={i18n('entities.manager.fields.products')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="highestLevelEducation"
                label={i18n('entities.manager.fields.highestLevelEducation')}
                options={managerEnumerators.highestLevelEducation.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.manager.enumerators.highestLevelEducation.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="photos"
                label={i18n('entities.manager.fields.photos')}
                required={false}
                storage={Storage.values.managerPhotos}
                max={undefined}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default ManagerForm;
