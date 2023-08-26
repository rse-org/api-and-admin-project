import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/reward/view/rewardViewActions';
import selectors from 'src/modules/reward/view/rewardViewSelectors';
import RewardView from 'src/view/reward/view/RewardView';
import RewardViewToolbar from 'src/view/reward/view/RewardViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RewardPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.reward.menu'), '/reward'],
          [i18n('entities.reward.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.reward.view.title')}
        </PageTitle>

        <RewardViewToolbar match={match} />

        <RewardView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default RewardPage;
