import React from 'react';
import { i18n } from 'src/i18n';
import FundListFilter from 'src/view/fund/list/FundListFilter';
import FundListTable from 'src/view/fund/list/FundListTable';
import FundListToolbar from 'src/view/fund/list/FundListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FundListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.fund.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fund.list.title')}
        </PageTitle>

        <FundListToolbar />
        <FundListFilter />
        <FundListTable />
      </ContentWrapper>
    </>
  );
}

export default FundListPage;
