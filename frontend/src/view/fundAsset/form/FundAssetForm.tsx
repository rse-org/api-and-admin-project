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
import FundAutocompleteFormItem from 'src/view/fund/autocomplete/FundAutocompleteFormItem';
import AssetAutocompleteFormItem from 'src/view/asset/autocomplete/AssetAutocompleteFormItem';

const schema = yup.object().shape({
  fund: yupFormSchemas.relationToOne(
    i18n('entities.fundAsset.fields.fund'),
    {
      "required": true
    },
  ),
  asset: yupFormSchemas.relationToOne(
    i18n('entities.fundAsset.fields.asset'),
    {
      "required": true
    },
  ),
  percentage: yupFormSchemas.decimal(
    i18n('entities.fundAsset.fields.percentage'),
    {
      "scale": 2,
      "min": 0.01
    },
  ),
  code: yupFormSchemas.string(
    i18n('entities.fundAsset.fields.code'),
    {
      "required": true
    },
  ),
});

function FundAssetForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      fund: record.fund,
      asset: record.asset,
      percentage: record.percentage,
      code: record.code,
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
              <FundAutocompleteFormItem  
                name="fund"
                label={i18n('entities.fundAsset.fields.fund')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <AssetAutocompleteFormItem  
                name="asset"
                label={i18n('entities.fundAsset.fields.asset')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="percentage"
                label={i18n('entities.fundAsset.fields.percentage')}
              placeholder={i18n('entities.fundAsset.placeholders.percentage')}
              hint={i18n('entities.fundAsset.hints.percentage')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="code"
                label={i18n('entities.fundAsset.fields.code')}
              placeholder={i18n('entities.fundAsset.placeholders.code')}
              hint={i18n('entities.fundAsset.hints.code')}  
                required={true}
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

export default FundAssetForm;
