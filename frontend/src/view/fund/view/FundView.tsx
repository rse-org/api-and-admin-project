import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FundAssetViewItem from 'src/view/fundAsset/view/FundAssetViewItem';
import ManagerViewItem from 'src/view/manager/view/ManagerViewItem';
import AssetViewItem from 'src/view/asset/view/AssetViewItem';

function FundView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.fund.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.fund.fields.subtitle')}
          value={record.subtitle}
        />

        <TextViewItem
          label={i18n('entities.fund.fields.intro')}
          value={record.intro}
        />

        <TextViewItem
          label={i18n('entities.fund.fields.description')}
          value={record.description}
        />

        <FundAssetViewItem
          label={i18n('entities.fund.fields.fundAssets')}
          value={record.fundAssets}
        />

        <TextViewItem
          label={i18n('entities.fund.fields.annualizedReturn')}
          value={record.annualizedReturn}
        />

        <ManagerViewItem
          label={i18n('entities.fund.fields.managers')}
          value={record.managers}
        />

        <TextViewItem
          label={i18n('entities.fund.fields.assetClass')}
          value={
            record.assetClass &&
            i18n(
              `entities.fund.enumerators.assetClass.${record.assetClass}`,
            )
          }
        />

        <AssetViewItem
          label={i18n('entities.fund.fields.assets')}
          value={record.assets}
        />

        <TextViewItem
          label={i18n('entities.fund.fields.strategyExpenses')}
          value={record.strategyExpenses}
        />

        <ImagesViewItem
          label={i18n('entities.fund.fields.photos')}
          value={record.photos}
        />

        <ImagesViewItem
          label={i18n('entities.fund.fields.icon')}
          value={record.icon}
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

export default FundView;
