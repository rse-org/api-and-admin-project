import React from 'react';
import { i18n } from 'src/i18n';
import TransferListFilter from 'src/view/transfer/list/TransferListFilter';
import TransferListTable from 'src/view/transfer/list/TransferListTable';
import TransferListToolbar from 'src/view/transfer/list/TransferListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TransferListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.transfer.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.transfer.list.title')}
        </PageTitle>

        <TransferListToolbar />
        <TransferListFilter />
        <TransferListTable />
      </ContentWrapper>
    </>
  );
}

export default TransferListPage;
