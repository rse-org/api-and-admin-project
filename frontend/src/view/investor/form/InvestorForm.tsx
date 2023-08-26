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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import investorEnumerators from 'src/modules/investor/investorEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import FundAutocompleteFormItem from 'src/view/fund/autocomplete/FundAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('entities.investor.fields.firstName'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.investor.fields.lastName'),
    {
      "required": true
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.investor.fields.email'),
    {
      "required": true
    },
  ),
  phone: yupFormSchemas.string(
    i18n('entities.investor.fields.phone'),
    {},
  ),
  birthdate: yupFormSchemas.date(
    i18n('entities.investor.fields.birthdate'),
    {},
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.investor.fields.gender'),
    {
      "options": investorEnumerators.gender
    },
  ),
  products: yupFormSchemas.relationToMany(
    i18n('entities.investor.fields.products'),
    {},
  ),
  theme: yupFormSchemas.enumerator(
    i18n('entities.investor.fields.theme'),
    {
      "options": investorEnumerators.theme
    },
  ),
});

function InvestorForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      email: record.email,
      phone: record.phone,
      birthdate: record.birthdate ? moment(record.birthdate, 'YYYY-MM-DD') : null,
      gender: record.gender,
      products: record.products || [],
      theme: record.theme,
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
                label={i18n('entities.investor.fields.firstName')}
              placeholder={i18n('entities.investor.placeholders.firstName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('entities.investor.fields.lastName')}
              placeholder={i18n('entities.investor.placeholders.lastName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="email"
                label={i18n('entities.investor.fields.email')}
              placeholder={i18n('entities.investor.placeholders.email')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="phone"
                label={i18n('entities.investor.fields.phone')}
              placeholder={i18n('entities.investor.placeholders.phone')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="birthdate"
                label={i18n('entities.investor.fields.birthdate')}
              placeholder={i18n('entities.investor.placeholders.birthdate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="gender"
                label={i18n('entities.investor.fields.gender')}
                options={investorEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.investor.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FundAutocompleteFormItem  
                name="products"
                label={i18n('entities.investor.fields.products')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="theme"
                label={i18n('entities.investor.fields.theme')}
              placeholder={i18n('entities.investor.placeholders.theme')}
                options={investorEnumerators.theme.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.investor.enumerators.theme.${value}`,
                    ),
                  }),
                )}
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

export default InvestorForm;
