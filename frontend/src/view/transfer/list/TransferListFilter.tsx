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
import actions from 'src/modules/transfer/list/transferListActions';
import selectors from 'src/modules/transfer/list/transferListSelectors';
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
import transferEnumerators from 'src/modules/transfer/transferEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import InvestorAutocompleteFormItem from 'src/view/investor/autocomplete/InvestorAutocompleteFormItem';

const schema = yup.object().shape({
  investor: yupFilterSchemas.relationToOne(
    i18n('entities.transfer.fields.investor'),
  ),
  direction: yupFilterSchemas.enumerator(
    i18n('entities.transfer.fields.direction'),
  ),
  valueRange: yupFilterSchemas.decimalRange(
    i18n('entities.transfer.fields.valueRange'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.transfer.fields.status'),
  ),
  completeDateRange: yupFilterSchemas.dateRange(
    i18n('entities.transfer.fields.completeDateRange'),
  ),
  clearingHouse: yupFilterSchemas.string(
    i18n('entities.transfer.fields.clearingHouse'),
  ),
  clearingHouseTransactionId: yupFilterSchemas.string(
    i18n('entities.transfer.fields.clearingHouseTransactionId'),
  ),
});

const emptyValues = {
  investor: null,
  direction: null,
  valueRange: [],
  status: null,
  completeDateRange: [],
  clearingHouse: null,
  clearingHouseTransactionId: null,
}

const previewRenders = {
  investor: {
      label: i18n('entities.transfer.fields.investor'),
      render: filterRenders.relationToOne(),
    },
  direction: {
    label: i18n('entities.transfer.fields.direction'),
    render: filterRenders.enumerator('entities.transfer.enumerators.direction',),
  },
  valueRange: {
    label: i18n('entities.transfer.fields.valueRange'),
    render: filterRenders.decimalRange(2),
  },
  status: {
    label: i18n('entities.transfer.fields.status'),
    render: filterRenders.enumerator('entities.transfer.enumerators.status',),
  },
  completeDateRange: {
    label: i18n('entities.transfer.fields.completeDateRange'),
    render: filterRenders.dateRange(),
  },
  clearingHouse: {
    label: i18n('entities.transfer.fields.clearingHouse'),
    render: filterRenders.generic(),
  },
  clearingHouseTransactionId: {
    label: i18n('entities.transfer.fields.clearingHouseTransactionId'),
    render: filterRenders.generic(),
  },
}

function TransferListFilter(props) {
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
                  <InvestorAutocompleteFormItem  
                    name="investor"
                    label={i18n('entities.transfer.fields.investor')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="direction"
                    label={i18n('entities.transfer.fields.direction')}
                    options={transferEnumerators.direction.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.transfer.enumerators.direction.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="valueRange"
                    label={i18n('entities.transfer.fields.valueRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="completeDateRange"
                    label={i18n('entities.transfer.fields.completeDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="clearingHouse"
                    label={i18n('entities.transfer.fields.clearingHouse')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="clearingHouseTransactionId"
                    label={i18n('entities.transfer.fields.clearingHouseTransactionId')}      
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

export default TransferListFilter;