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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import fundEnumerators from 'src/modules/fund/fundEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FundAssetAutocompleteFormItem from 'src/view/fundAsset/autocomplete/FundAssetAutocompleteFormItem';
import ManagerAutocompleteFormItem from 'src/view/manager/autocomplete/ManagerAutocompleteFormItem';
import AssetAutocompleteFormItem from 'src/view/asset/autocomplete/AssetAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.fund.fields.name'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  subtitle: yupFormSchemas.string(
    i18n('entities.fund.fields.subtitle'),
    {},
  ),
  intro: yupFormSchemas.string(
    i18n('entities.fund.fields.intro'),
    {
      "max": 250
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.fund.fields.description'),
    {
      "max": 21845
    },
  ),
  fundAssets: yupFormSchemas.relationToMany(
    i18n('entities.fund.fields.fundAssets'),
    {},
  ),
  annualizedReturn: yupFormSchemas.decimal(
    i18n('entities.fund.fields.annualizedReturn'),
    {},
  ),
  managers: yupFormSchemas.relationToMany(
    i18n('entities.fund.fields.managers'),
    {},
  ),
  assetClass: yupFormSchemas.enumerator(
    i18n('entities.fund.fields.assetClass'),
    {
      "options": fundEnumerators.assetClass
    },
  ),
  assets: yupFormSchemas.relationToMany(
    i18n('entities.fund.fields.assets'),
    {},
  ),
  strategyExpenses: yupFormSchemas.decimal(
    i18n('entities.fund.fields.strategyExpenses'),
    {},
  ),
  photos: yupFormSchemas.images(
    i18n('entities.fund.fields.photos'),
    {
      "max": 3
    },
  ),
  icon: yupFormSchemas.images(
    i18n('entities.fund.fields.icon'),
    {},
  ),
});

function FundForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      subtitle: record.subtitle,
      intro: record.intro,
      description: record.description,
      fundAssets: record.fundAssets || [],
      annualizedReturn: record.annualizedReturn,
      managers: record.managers || [],
      assetClass: record.assetClass,
      assets: record.assets || [],
      strategyExpenses: record.strategyExpenses,
      photos: record.photos || [],
      icon: record.icon || [],
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
                label={i18n('entities.fund.fields.name')}
              placeholder={i18n('entities.fund.placeholders.name')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="subtitle"
                label={i18n('entities.fund.fields.subtitle')}
              placeholder={i18n('entities.fund.placeholders.subtitle')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="intro"
                label={i18n('entities.fund.fields.intro')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.fund.fields.description')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FundAssetAutocompleteFormItem  
                name="fundAssets"
                label={i18n('entities.fund.fields.fundAssets')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="annualizedReturn"
                label={i18n('entities.fund.fields.annualizedReturn')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ManagerAutocompleteFormItem  
                name="managers"
                label={i18n('entities.fund.fields.managers')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="assetClass"
                label={i18n('entities.fund.fields.assetClass')}
                options={fundEnumerators.assetClass.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.fund.enumerators.assetClass.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <AssetAutocompleteFormItem  
                name="assets"
                label={i18n('entities.fund.fields.assets')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="strategyExpenses"
                label={i18n('entities.fund.fields.strategyExpenses')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="photos"
                label={i18n('entities.fund.fields.photos')}
                required={false}
                storage={Storage.values.fundPhotos}
                max={3}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="icon"
                label={i18n('entities.fund.fields.icon')}
                required={false}
                storage={Storage.values.fundIcon}
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

export default FundForm;
