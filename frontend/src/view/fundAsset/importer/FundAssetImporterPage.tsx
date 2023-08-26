import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fundAsset/importer/fundAssetImporterActions';
import fields from 'src/modules/fundAsset/importer/fundAssetImporterFields';
import selectors from 'src/modules/fundAsset/importer/fundAssetImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FundAssetImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.fundAsset.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.fundAsset.menu'), '/fund-asset'],
          [i18n('entities.fundAsset.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fundAsset.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default FundAssetImportPage;
