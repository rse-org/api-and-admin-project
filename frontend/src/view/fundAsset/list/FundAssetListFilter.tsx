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
import actions from 'src/modules/fundAsset/list/fundAssetListActions';
import selectors from 'src/modules/fundAsset/list/fundAssetListSelectors';
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
import FundAutocompleteFormItem from 'src/view/fund/autocomplete/FundAutocompleteFormItem';
import AssetAutocompleteFormItem from 'src/view/asset/autocomplete/AssetAutocompleteFormItem';

const schema = yup.object().shape({
  fund: yupFilterSchemas.relationToOne(
    i18n('entities.fundAsset.fields.fund'),
  ),
  asset: yupFilterSchemas.relationToOne(
    i18n('entities.fundAsset.fields.asset'),
  ),
  percentageRange: yupFilterSchemas.decimalRange(
    i18n('entities.fundAsset.fields.percentageRange'),
  ),
  code: yupFilterSchemas.string(
    i18n('entities.fundAsset.fields.code'),
  ),
});

const emptyValues = {
  fund: null,
  asset: null,
  percentageRange: [],
  code: null,
}

const previewRenders = {
  fund: {
      label: i18n('entities.fundAsset.fields.fund'),
      render: filterRenders.relationToOne(),
    },
  asset: {
      label: i18n('entities.fundAsset.fields.asset'),
      render: filterRenders.relationToOne(),
    },
  percentageRange: {
    label: i18n('entities.fundAsset.fields.percentageRange'),
    render: filterRenders.decimalRange(2),
  },
  code: {
    label: i18n('entities.fundAsset.fields.code'),
    render: filterRenders.generic(),
  },
}

function FundAssetListFilter(props) {
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
                  <FundAutocompleteFormItem  
                    name="fund"
                    label={i18n('entities.fundAsset.fields.fund')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <AssetAutocompleteFormItem  
                    name="asset"
                    label={i18n('entities.fundAsset.fields.asset')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="percentageRange"
                    label={i18n('entities.fundAsset.fields.percentageRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="code"
                    label={i18n('entities.fundAsset.fields.code')}      
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

export default FundAssetListFilter;