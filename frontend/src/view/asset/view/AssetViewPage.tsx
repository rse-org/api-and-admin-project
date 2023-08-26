import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/asset/view/assetViewActions';
import selectors from 'src/modules/asset/view/assetViewSelectors';
import AssetView from 'src/view/asset/view/AssetView';
import AssetViewToolbar from 'src/view/asset/view/AssetViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssetPage() {
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
          [i18n('entities.asset.menu'), '/asset'],
          [i18n('entities.asset.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.asset.view.title')}
        </PageTitle>

        <AssetViewToolbar match={match} />

        <AssetView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AssetPage;
