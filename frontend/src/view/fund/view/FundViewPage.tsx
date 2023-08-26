import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fund/view/fundViewActions';
import selectors from 'src/modules/fund/view/fundViewSelectors';
import FundView from 'src/view/fund/view/FundView';
import FundViewToolbar from 'src/view/fund/view/FundViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FundPage() {
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
          [i18n('entities.fund.menu'), '/fund'],
          [i18n('entities.fund.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fund.view.title')}
        </PageTitle>

        <FundViewToolbar match={match} />

        <FundView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FundPage;
