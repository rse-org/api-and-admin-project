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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import orderEnumerators from 'src/modules/order/orderEnumerators';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import InvestorAutocompleteFormItem from 'src/view/investor/autocomplete/InvestorAutocompleteFormItem';
import FundAutocompleteFormItem from 'src/view/fund/autocomplete/FundAutocompleteFormItem';

const schema = yup.object().shape({
  investor: yupFormSchemas.relationToOne(
    i18n('entities.order.fields.investor'),
    {
      "required": true
    },
  ),
  funds: yupFormSchemas.relationToMany(
    i18n('entities.order.fields.funds'),
    {
      "required": true,
      "min": 1
    },
  ),
  employee: yupFormSchemas.relationToOne(
    i18n('entities.order.fields.employee'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.order.fields.status'),
    {
      "options": orderEnumerators.status
    },
  ),
  attachments: yupFormSchemas.files(
    i18n('entities.order.fields.attachments'),
    {
      "max": 3
    },
  ),
});

function OrderForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      investor: record.investor,
      funds: record.funds || [],
      employee: record.employee,
      status: record.status,
      attachments: record.attachments || [],
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
                label={i18n('entities.order.fields.investor')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FundAutocompleteFormItem  
                name="funds"
                label={i18n('entities.order.fields.funds')}
                required={true}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <UserAutocompleteFormItem  
                name="employee"
                label={i18n('entities.order.fields.employee')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="status"
                label={i18n('entities.order.fields.status')}
                options={orderEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.order.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FilesFormItem
                name="attachments"
                label={i18n('entities.order.fields.attachments')}
                required={false}
                storage={Storage.values.orderAttachments}
                max={3}
                formats={["txt","pdf"]}
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

export default OrderForm;
