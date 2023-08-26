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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FundAutocompleteFormItem from 'src/view/fund/autocomplete/FundAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.asset.fields.name'),
    {},
  ),
  sym: yupFormSchemas.string(
    i18n('entities.asset.fields.sym'),
    {},
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.asset.fields.price'),
    {
      "scale": 2,
      "min": 0.01
    },
  ),
  hq: yupFormSchemas.string(
    i18n('entities.asset.fields.hq'),
    {},
  ),
  ceo: yupFormSchemas.string(
    i18n('entities.asset.fields.ceo'),
    {},
  ),
  employees: yupFormSchemas.integer(
    i18n('entities.asset.fields.employees'),
    {},
  ),
  icon: yupFormSchemas.images(
    i18n('entities.asset.fields.icon'),
    {},
  ),
  fund: yupFormSchemas.relationToMany(
    i18n('entities.asset.fields.fund'),
    {},
  ),
});

function AssetForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      sym: record.sym,
      price: record.price,
      hq: record.hq,
      ceo: record.ceo,
      employees: record.employees,
      icon: record.icon || [],
      fund: record.fund || [],
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
                name="name"
                label={i18n('entities.asset.fields.name')}
              placeholder={i18n('entities.asset.placeholders.name')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="sym"
                label={i18n('entities.asset.fields.sym')}
              placeholder={i18n('entities.asset.placeholders.sym')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="price"
                label={i18n('entities.asset.fields.price')}
              placeholder={i18n('entities.asset.placeholders.price')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="hq"
                label={i18n('entities.asset.fields.hq')}
              placeholder={i18n('entities.asset.placeholders.hq')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="ceo"
                label={i18n('entities.asset.fields.ceo')}
              placeholder={i18n('entities.asset.placeholders.ceo')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="employees"
                label={i18n('entities.asset.fields.employees')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="icon"
                label={i18n('entities.asset.fields.icon')}
                required={false}
                storage={Storage.values.assetIcon}
                max={undefined}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FundAutocompleteFormItem  
                name="fund"
                label={i18n('entities.asset.fields.fund')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default AssetForm;
