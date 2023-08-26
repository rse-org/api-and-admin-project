import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/investor/list/investorListActions';
import selectors from 'src/modules/investor/list/investorListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import investorEnumerators from 'src/modules/investor/investorEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  firstName: yupFilterSchemas.string(
    i18n('entities.investor.fields.firstName'),
  ),
  lastName: yupFilterSchemas.string(
    i18n('entities.investor.fields.lastName'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.investor.fields.email'),
  ),
  phone: yupFilterSchemas.string(
    i18n('entities.investor.fields.phone'),
  ),
  birthdateRange: yupFilterSchemas.dateRange(
    i18n('entities.investor.fields.birthdateRange'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.investor.fields.gender'),
  ),
  theme: yupFilterSchemas.enumerator(
    i18n('entities.investor.fields.theme'),
  ),
});

const emptyValues = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  birthdateRange: [],
  gender: null,
  theme: null,
}

const previewRenders = {
  firstName: {
    label: i18n('entities.investor.fields.firstName'),
    render: filterRenders.generic(),
  },
  lastName: {
    label: i18n('entities.investor.fields.lastName'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.investor.fields.email'),
    render: filterRenders.generic(),
  },
  phone: {
    label: i18n('entities.investor.fields.phone'),
    render: filterRenders.generic(),
  },
  birthdateRange: {
    label: i18n('entities.investor.fields.birthdateRange'),
    render: filterRenders.dateRange(),
  },
  gender: {
    label: i18n('entities.investor.fields.gender'),
    render: filterRenders.enumerator('entities.investor.enumerators.gender',),
  },
  theme: {
    label: i18n('entities.investor.fields.theme'),
    render: filterRenders.enumerator('entities.investor.enumerators.theme',),
  },
}

function InvestorListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="firstName"
                    label={i18n('entities.investor.fields.firstName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="lastName"
                    label={i18n('entities.investor.fields.lastName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="email"
                    label={i18n('entities.investor.fields.email')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="phone"
                    label={i18n('entities.investor.fields.phone')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="birthdateRange"
                    label={i18n('entities.investor.fields.birthdateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="theme"
                    label={i18n('entities.investor.fields.theme')}
                    options={investorEnumerators.theme.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.investor.enumerators.theme.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default InvestorListFilter;