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
import actions from 'src/modules/manager/list/managerListActions';
import selectors from 'src/modules/manager/list/managerListSelectors';
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
import managerEnumerators from 'src/modules/manager/managerEnumerators';

const schema = yup.object().shape({
  firstName: yupFilterSchemas.string(
    i18n('entities.manager.fields.firstName'),
  ),
  lastName: yupFilterSchemas.string(
    i18n('entities.manager.fields.lastName'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.manager.fields.title'),
  ),
  about: yupFilterSchemas.string(
    i18n('entities.manager.fields.about'),
  ),
  school: yupFilterSchemas.string(
    i18n('entities.manager.fields.school'),
  ),
  highestLevelEducation: yupFilterSchemas.enumerator(
    i18n('entities.manager.fields.highestLevelEducation'),
  ),
});

const emptyValues = {
  firstName: null,
  lastName: null,
  title: null,
  about: null,
  school: null,
  highestLevelEducation: null,
}

const previewRenders = {
  firstName: {
    label: i18n('entities.manager.fields.firstName'),
    render: filterRenders.generic(),
  },
  lastName: {
    label: i18n('entities.manager.fields.lastName'),
    render: filterRenders.generic(),
  },
  title: {
    label: i18n('entities.manager.fields.title'),
    render: filterRenders.generic(),
  },
  about: {
    label: i18n('entities.manager.fields.about'),
    render: filterRenders.generic(),
  },
  school: {
    label: i18n('entities.manager.fields.school'),
    render: filterRenders.generic(),
  },
  highestLevelEducation: {
    label: i18n('entities.manager.fields.highestLevelEducation'),
    render: filterRenders.enumerator('entities.manager.enumerators.highestLevelEducation',),
  },
}

function ManagerListFilter(props) {
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
                    label={i18n('entities.manager.fields.firstName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="lastName"
                    label={i18n('entities.manager.fields.lastName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="title"
                    label={i18n('entities.manager.fields.title')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="about"
                    label={i18n('entities.manager.fields.about')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="school"
                    label={i18n('entities.manager.fields.school')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="highestLevelEducation"
                    label={i18n('entities.manager.fields.highestLevelEducation')}
                    options={managerEnumerators.highestLevelEducation.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.manager.enumerators.highestLevelEducation.${value}`,
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

export default ManagerListFilter;