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
import actions from 'src/modules/fund/list/fundListActions';
import selectors from 'src/modules/fund/list/fundListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import fundEnumerators from 'src/modules/fund/fundEnumerators';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.fund.fields.name'),
  ),
  subtitle: yupFilterSchemas.string(
    i18n('entities.fund.fields.subtitle'),
  ),
  intro: yupFilterSchemas.string(
    i18n('entities.fund.fields.intro'),
  ),
  annualizedReturnRange: yupFilterSchemas.decimalRange(
    i18n('entities.fund.fields.annualizedReturnRange'),
  ),
  assetClass: yupFilterSchemas.enumerator(
    i18n('entities.fund.fields.assetClass'),
  ),
  strategyExpensesRange: yupFilterSchemas.decimalRange(
    i18n('entities.fund.fields.strategyExpensesRange'),
  ),
});

const emptyValues = {
  name: null,
  subtitle: null,
  intro: null,
  annualizedReturnRange: [],
  assetClass: null,
  strategyExpensesRange: [],
}

const previewRenders = {
  name: {
    label: i18n('entities.fund.fields.name'),
    render: filterRenders.generic(),
  },
  subtitle: {
    label: i18n('entities.fund.fields.subtitle'),
    render: filterRenders.generic(),
  },
  intro: {
    label: i18n('entities.fund.fields.intro'),
    render: filterRenders.generic(),
  },
  annualizedReturnRange: {
    label: i18n('entities.fund.fields.annualizedReturnRange'),
    render: filterRenders.decimalRange(),
  },
  assetClass: {
    label: i18n('entities.fund.fields.assetClass'),
    render: filterRenders.enumerator('entities.fund.enumerators.assetClass',),
  },
  strategyExpensesRange: {
    label: i18n('entities.fund.fields.strategyExpensesRange'),
    render: filterRenders.decimalRange(),
  },
}

function FundListFilter(props) {
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
                    name="name"
                    label={i18n('entities.fund.fields.name')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="subtitle"
                    label={i18n('entities.fund.fields.subtitle')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="intro"
                    label={i18n('entities.fund.fields.intro')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="annualizedReturnRange"
                    label={i18n('entities.fund.fields.annualizedReturnRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="strategyExpensesRange"
                    label={i18n('entities.fund.fields.strategyExpensesRange')}      
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

export default FundListFilter;