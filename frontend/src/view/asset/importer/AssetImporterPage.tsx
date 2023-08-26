import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/asset/importer/assetImporterActions';
import fields from 'src/modules/asset/importer/assetImporterFields';
import selectors from 'src/modules/asset/importer/assetImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssetImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.asset.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.asset.menu'), '/asset'],
          [i18n('entities.asset.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.asset.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AssetImportPage;
