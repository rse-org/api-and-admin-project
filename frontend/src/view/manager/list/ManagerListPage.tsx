import React from 'react';
import { i18n } from 'src/i18n';
import ManagerListFilter from 'src/view/manager/list/ManagerListFilter';
import ManagerListTable from 'src/view/manager/list/ManagerListTable';
import ManagerListToolbar from 'src/view/manager/list/ManagerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ManagerListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.manager.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.manager.list.title')}
        </PageTitle>

        <ManagerListToolbar />
        <ManagerListFilter />
        <ManagerListTable />
      </ContentWrapper>
    </>
  );
}

export default ManagerListPage;
