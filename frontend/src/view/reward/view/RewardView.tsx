import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import InvestorViewItem from 'src/view/investor/view/InvestorViewItem';

function RewardView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.reward.fields.name')}
          value={record.name}
        />

        <InvestorViewItem
          label={i18n('entities.reward.fields.investor')}
          value={record.investor}
        />

        <InvestorViewItem
          label={i18n('entities.reward.fields.affiliate')}
          value={record.affiliate}
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

export default RewardView;
