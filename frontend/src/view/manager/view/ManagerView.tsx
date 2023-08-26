import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FundViewItem from 'src/view/fund/view/FundViewItem';

function ManagerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.manager.fields.firstName')}
          value={record.firstName}
        />

        <TextViewItem
          label={i18n('entities.manager.fields.lastName')}
          value={record.lastName}
        />

        <TextViewItem
          label={i18n('entities.manager.fields.title')}
          value={record.title}
        />

        <TextViewItem
          label={i18n('entities.manager.fields.about')}
          value={record.about}
        />

        <TextViewItem
          label={i18n('entities.manager.fields.school')}
          value={record.school}
        />

        <FundViewItem
          label={i18n('entities.manager.fields.products')}
          value={record.products}
        />

        <TextViewItem
          label={i18n('entities.manager.fields.highestLevelEducation')}
          value={
            record.highestLevelEducation &&
            i18n(
              `entities.manager.enumerators.highestLevelEducation.${record.highestLevelEducation}`,
            )
          }
        />

        <ImagesViewItem
          label={i18n('entities.manager.fields.photos')}
          value={record.photos}
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

export default ManagerView;
