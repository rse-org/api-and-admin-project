import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FundViewItem from 'src/view/fund/view/FundViewItem';

function AssetView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.asset.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.asset.fields.sym')}
          value={record.sym}
        />

        {record.price != null && <TextViewItem
          label={i18n('entities.asset.fields.price')}
          value={Number(record.price).toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.asset.fields.hq')}
          value={record.hq}
        />

        <TextViewItem
          label={i18n('entities.asset.fields.ceo')}
          value={record.ceo}
        />

        <TextViewItem
          label={i18n('entities.asset.fields.employees')}
          value={record.employees}
        />

        <ImagesViewItem
          label={i18n('entities.asset.fields.icon')}
          value={record.icon}
        />

        <FundViewItem
          label={i18n('entities.asset.fields.fund')}
          value={record.fund}
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

export default AssetView;
