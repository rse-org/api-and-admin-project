import React from 'react';
import { i18n } from 'src/i18n';
import FundAssetListFilter from 'src/view/fundAsset/list/FundAssetListFilter';
import FundAssetListTable from 'src/view/fundAsset/list/FundAssetListTable';
import FundAssetListToolbar from 'src/view/fundAsset/list/FundAssetListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FundAssetListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.fundAsset.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fundAsset.list.title')}
        </PageTitle>

        <FundAssetListToolbar />
        <FundAssetListFilter />
        <FundAssetListTable />
      </ContentWrapper>
    </>
  );
}

export default FundAssetListPage;
