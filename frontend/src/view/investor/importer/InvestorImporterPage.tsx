import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/investor/importer/investorImporterActions';
import fields from 'src/modules/investor/importer/investorImporterFields';
import selectors from 'src/modules/investor/importer/investorImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InvestorImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.investor.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.investor.menu'), '/investor'],
          [i18n('entities.investor.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.investor.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default InvestorImportPage;
