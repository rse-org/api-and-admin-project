import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FundViewItem from 'src/view/fund/view/FundViewItem';
import AssetViewItem from 'src/view/asset/view/AssetViewItem';

function FundAssetView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <FundViewItem
          label={i18n('entities.fundAsset.fields.fund')}
          value={record.fund}
        />

        <AssetViewItem
          label={i18n('entities.fundAsset.fields.asset')}
          value={record.asset}
        />

        {record.percentage != null && <TextViewItem
          label={i18n('entities.fundAsset.fields.percentage')}
          value={Number(record.percentage).toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.fundAsset.fields.code')}
          value={record.code}
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

export default FundAssetView;
