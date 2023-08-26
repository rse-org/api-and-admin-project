import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/manager/view/managerViewActions';
import selectors from 'src/modules/manager/view/managerViewSelectors';
import ManagerView from 'src/view/manager/view/ManagerView';
import ManagerViewToolbar from 'src/view/manager/view/ManagerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ManagerPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.manager.menu'), '/manager'],
          [i18n('entities.manager.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.manager.view.title')}
        </PageTitle>

        <ManagerViewToolbar match={match} />

        <ManagerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ManagerPage;
