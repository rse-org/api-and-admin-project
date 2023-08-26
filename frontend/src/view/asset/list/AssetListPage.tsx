import React from 'react';
import { i18n } from 'src/i18n';
import AssetListFilter from 'src/view/asset/list/AssetListFilter';
import AssetListTable from 'src/view/asset/list/AssetListTable';
import AssetListToolbar from 'src/view/asset/list/AssetListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssetListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.asset.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.asset.list.title')}
        </PageTitle>

        <AssetListToolbar />
        <AssetListFilter />
        <AssetListTable />
      </ContentWrapper>
    </>
  );
}

export default AssetListPage;
