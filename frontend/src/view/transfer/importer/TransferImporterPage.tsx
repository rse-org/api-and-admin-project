import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/transfer/importer/transferImporterActions';
import fields from 'src/modules/transfer/importer/transferImporterFields';
import selectors from 'src/modules/transfer/importer/transferImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TransferImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.transfer.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.transfer.menu'), '/transfer'],
          [i18n('entities.transfer.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.transfer.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default TransferImportPage;
