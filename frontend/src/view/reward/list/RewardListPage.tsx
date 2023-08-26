import React from 'react';
import { i18n } from 'src/i18n';
import RewardListFilter from 'src/view/reward/list/RewardListFilter';
import RewardListTable from 'src/view/reward/list/RewardListTable';
import RewardListToolbar from 'src/view/reward/list/RewardListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RewardListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.reward.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.reward.list.title')}
        </PageTitle>

        <RewardListToolbar />
        <RewardListFilter />
        <RewardListTable />
      </ContentWrapper>
    </>
  );
}

export default RewardListPage;
