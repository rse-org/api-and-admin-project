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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import tradeEnumerators from 'src/modules/trade/tradeEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import InvestorAutocompleteFormItem from 'src/view/investor/autocomplete/InvestorAutocompleteFormItem';
import FundAutocompleteFormItem from 'src/view/fund/autocomplete/FundAutocompleteFormItem';

const schema = yup.object().shape({
  value: yupFormSchemas.decimal(
    i18n('entities.trade.fields.value'),
    {},
  ),
  status: yupFormSchemas.stringArray(
    i18n('entities.trade.fields.status'),
    {
      "required": true,
      "options": tradeEnumerators.status
    },
  ),
  investor: yupFormSchemas.relationToOne(
    i18n('entities.trade.fields.investor'),
    {
      "required": true
    },
  ),
  product: yupFormSchemas.relationToOne(
    i18n('entities.trade.fields.product'),
    {
      "required": true
    },
  ),
  executeDate: yupFormSchemas.datetime(
    i18n('entities.trade.fields.executeDate'),
    {},
  ),
  valueOnExecute: yupFormSchemas.decimal(
    i18n('entities.trade.fields.valueOnExecute'),
    {
      "min": 0.01,
      "scale": 2
    },
  ),
});

function TradeForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      value: record.value,
      status: record.status || [],
      investor: record.investor,
      product: record.product,
      executeDate: record.executeDate ? moment(record.executeDate) : null,
      valueOnExecute: record.valueOnExecute,
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
                name="value"
                label={i18n('entities.trade.fields.value')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="status"
                label={i18n('entities.trade.fields.status')}
                options={tradeEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.trade.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={true}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InvestorAutocompleteFormItem  
                name="investor"
                label={i18n('entities.trade.fields.investor')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FundAutocompleteFormItem  
                name="product"
                label={i18n('entities.trade.fields.product')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="executeDate"
                label={i18n('entities.trade.fields.executeDate')}
                required={false}
                showTime
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="valueOnExecute"
                label={i18n('entities.trade.fields.valueOnExecute')}  
                required={false}
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

export default TradeForm;
