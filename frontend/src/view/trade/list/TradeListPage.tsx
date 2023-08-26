import React from 'react';
import { i18n } from 'src/i18n';
import TradeListFilter from 'src/view/trade/list/TradeListFilter';
import TradeListTable from 'src/view/trade/list/TradeListTable';
import TradeListToolbar from 'src/view/trade/list/TradeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TradeListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.trade.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.trade.list.title')}
        </PageTitle>

        <TradeListToolbar />
        <TradeListFilter />
        <TradeListTable />
      </ContentWrapper>
    </>
  );
}

export default TradeListPage;
