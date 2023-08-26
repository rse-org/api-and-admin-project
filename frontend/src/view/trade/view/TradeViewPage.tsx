import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/trade/view/tradeViewActions';
import selectors from 'src/modules/trade/view/tradeViewSelectors';
import TradeView from 'src/view/trade/view/TradeView';
import TradeViewToolbar from 'src/view/trade/view/TradeViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TradePage() {
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
          [i18n('entities.trade.menu'), '/trade'],
          [i18n('entities.trade.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.trade.view.title')}
        </PageTitle>

        <TradeViewToolbar match={match} />

        <TradeView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default TradePage;
