import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/reward/importer/rewardImporterActions';
import fields from 'src/modules/reward/importer/rewardImporterFields';
import selectors from 'src/modules/reward/importer/rewardImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RewardImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.reward.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.reward.menu'), '/reward'],
          [i18n('entities.reward.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.reward.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RewardImportPage;
