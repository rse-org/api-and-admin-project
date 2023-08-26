import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/investor/view/investorViewActions';
import selectors from 'src/modules/investor/view/investorViewSelectors';
import InvestorView from 'src/view/investor/view/InvestorView';
import InvestorViewToolbar from 'src/view/investor/view/InvestorViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InvestorPage() {
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
          [i18n('entities.investor.menu'), '/investor'],
          [i18n('entities.investor.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.investor.view.title')}
        </PageTitle>

        <InvestorViewToolbar match={match} />

        <InvestorView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default InvestorPage;
