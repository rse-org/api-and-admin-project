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
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import transferEnumerators from 'src/modules/transfer/transferEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import InvestorAutocompleteFormItem from 'src/view/investor/autocomplete/InvestorAutocompleteFormItem';

const schema = yup.object().shape({
  investor: yupFormSchemas.relationToOne(
    i18n('entities.transfer.fields.investor'),
    {
      "required": true
    },
  ),
  direction: yupFormSchemas.enumerator(
    i18n('entities.transfer.fields.direction'),
    {
      "required": true,
      "options": transferEnumerators.direction
    },
  ),
  value: yupFormSchemas.decimal(
    i18n('entities.transfer.fields.value'),
    {
      "min": 0.01,
      "required": true,
      "scale": 2
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.transfer.fields.status'),
    {
      "options": transferEnumerators.status
    },
  ),
  completeDate: yupFormSchemas.date(
    i18n('entities.transfer.fields.completeDate'),
    {},
  ),
  clearingHouse: yupFormSchemas.string(
    i18n('entities.transfer.fields.clearingHouse'),
    {},
  ),
  clearingHouseTransactionId: yupFormSchemas.string(
    i18n('entities.transfer.fields.clearingHouseTransactionId'),
    {},
  ),
});

function TransferForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      investor: record.investor,
      direction: record.direction,
      value: record.value,
      status: record.status,
      completeDate: record.completeDate ? moment(record.completeDate, 'YYYY-MM-DD') : null,
      clearingHouse: record.clearingHouse,
      clearingHouseTransactionId: record.clearingHouseTransactionId,
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
              <InvestorAutocompleteFormItem  
                name="investor"
                label={i18n('entities.transfer.fields.investor')}
              placeholder={i18n('entities.transfer.placeholders.investor')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="direction"
                label={i18n('entities.transfer.fields.direction')}
              hint={i18n('entities.transfer.hints.direction')}
                options={transferEnumerators.direction.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.transfer.enumerators.direction.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="value"
                label={i18n('entities.transfer.fields.value')}
              placeholder={i18n('entities.transfer.placeholders.value')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="status"
                label={i18n('entities.transfer.fields.status')}
                options={transferEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.transfer.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="completeDate"
                label={i18n('entities.transfer.fields.completeDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="clearingHouse"
                label={i18n('entities.transfer.fields.clearingHouse')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="clearingHouseTransactionId"
                label={i18n('entities.transfer.fields.clearingHouseTransactionId')}  
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

export default TransferForm;
