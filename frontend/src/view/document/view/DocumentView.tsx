import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

function DocumentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <FilesViewItem
          label={i18n(
            'entities.document.fields.file',
          )}
          value={record.file}
        />

        <UserViewItem
          label={i18n('entities.document.fields.investor')}
          value={record.investor}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default DocumentView;
