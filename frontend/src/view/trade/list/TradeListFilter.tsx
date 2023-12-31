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
import actions from 'src/modules/trade/list/tradeListActions';
import selectors from 'src/modules/trade/list/tradeListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import tradeEnumerators from 'src/modules/trade/tradeEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import InvestorAutocompleteFormItem from 'src/view/investor/autocomplete/InvestorAutocompleteFormItem';
import FundAutocompleteFormItem from 'src/view/fund/autocomplete/FundAutocompleteFormItem';

const schema = yup.object().shape({
  valueRange: yupFilterSchemas.decimalRange(
    i18n('entities.trade.fields.valueRange'),
  ),
  status: yupFilterSchemas.stringArray(
    i18n('entities.trade.fields.status'),
  ),
  investor: yupFilterSchemas.relationToOne(
    i18n('entities.trade.fields.investor'),
  ),
  product: yupFilterSchemas.relationToOne(
    i18n('entities.trade.fields.product'),
  ),
  executeDateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.trade.fields.executeDateRange'),
  ),
  valueOnExecuteRange: yupFilterSchemas.decimalRange(
    i18n('entities.trade.fields.valueOnExecuteRange'),
  ),
});

const emptyValues = {
  valueRange: [],
  status: [],
  investor: null,
  product: null,
  executeDateRange: [],
  valueOnExecuteRange: [],
}

const previewRenders = {
  valueRange: {
    label: i18n('entities.trade.fields.valueRange'),
    render: filterRenders.decimalRange(),
  },
  status: {
    label: i18n('entities.trade.fields.status'),
    render: filterRenders.enumeratorMultiple('entities.trade.enumerators.status',),
  },
  investor: {
      label: i18n('entities.trade.fields.investor'),
      render: filterRenders.relationToOne(),
    },
  product: {
      label: i18n('entities.trade.fields.product'),
      render: filterRenders.relationToOne(),
    },
  executeDateRange: {
    label: i18n('entities.trade.fields.executeDateRange'),
    render: filterRenders.datetimeRange(),
  },
  valueOnExecuteRange: {
    label: i18n('entities.trade.fields.valueOnExecuteRange'),
    render: filterRenders.decimalRange(2),
  },
}

function TradeListFilter(props) {
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
                  <InputRangeFormItem
                    name="valueRange"
                    label={i18n('entities.trade.fields.valueRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                    mode="multiple"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InvestorAutocompleteFormItem  
                    name="investor"
                    label={i18n('entities.trade.fields.investor')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <FundAutocompleteFormItem  
                    name="product"
                    label={i18n('entities.trade.fields.product')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="executeDateRange"
                    label={i18n('entities.trade.fields.executeDateRange')}    
                    showTime
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="valueOnExecuteRange"
                    label={i18n('entities.trade.fields.valueOnExecuteRange')}      
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

export default TradeListFilter;