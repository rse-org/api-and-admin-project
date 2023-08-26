import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fundAsset/view/fundAssetViewActions';
import selectors from 'src/modules/fundAsset/view/fundAssetViewSelectors';
import FundAssetView from 'src/view/fundAsset/view/FundAssetView';
import FundAssetViewToolbar from 'src/view/fundAsset/view/FundAssetViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FundAssetPage() {
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
          [i18n('entities.fundAsset.menu'), '/fund-asset'],
          [i18n('entities.fundAsset.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fundAsset.view.title')}
        </PageTitle>

        <FundAssetViewToolbar match={match} />

        <FundAssetView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FundAssetPage;
