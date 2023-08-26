import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/document/view/documentViewActions';
import selectors from 'src/modules/document/view/documentViewSelectors';
import DocumentView from 'src/view/document/view/DocumentView';
import DocumentViewToolbar from 'src/view/document/view/DocumentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DocumentPage() {
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
          [i18n('entities.document.menu'), '/document'],
          [i18n('entities.document.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.document.view.title')}
        </PageTitle>

        <DocumentViewToolbar match={match} />

        <DocumentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DocumentPage;
