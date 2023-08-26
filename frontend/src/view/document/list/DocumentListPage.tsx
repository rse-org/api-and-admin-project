import React from 'react';
import { i18n } from 'src/i18n';
import DocumentListFilter from 'src/view/document/list/DocumentListFilter';
import DocumentListTable from 'src/view/document/list/DocumentListTable';
import DocumentListToolbar from 'src/view/document/list/DocumentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DocumentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.document.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.document.list.title')}
        </PageTitle>

        <DocumentListToolbar />
        <DocumentListFilter />
        <DocumentListTable />
      </ContentWrapper>
    </>
  );
}

export default DocumentListPage;
