import React from 'react';
import { i18n } from 'src/i18n';
import InvestorListFilter from 'src/view/investor/list/InvestorListFilter';
import InvestorListTable from 'src/view/investor/list/InvestorListTable';
import InvestorListToolbar from 'src/view/investor/list/InvestorListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InvestorListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.investor.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.investor.list.title')}
        </PageTitle>

        <InvestorListToolbar />
        <InvestorListFilter />
        <InvestorListTable />
      </ContentWrapper>
    </>
  );
}

export default InvestorListPage;
