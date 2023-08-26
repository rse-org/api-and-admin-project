import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import InvestorViewItem from 'src/view/investor/view/InvestorViewItem';

function TransferView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <InvestorViewItem
          label={i18n('entities.transfer.fields.investor')}
          value={record.investor}
        />

        <TextViewItem
          label={i18n('entities.transfer.fields.direction')}
          value={
            record.direction &&
            i18n(
              `entities.transfer.enumerators.direction.${record.direction}`,
            )
          }
        />

        {record.value != null && <TextViewItem
          label={i18n('entities.transfer.fields.value')}
          value={Number(record.value).toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.transfer.fields.status')}
          value={
            record.status &&
            i18n(
              `entities.transfer.enumerators.status.${record.status}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.transfer.fields.completeDate')}
          value={record.completeDate}
        />

        <TextViewItem
          label={i18n('entities.transfer.fields.clearingHouse')}
          value={record.clearingHouse}
        />

        <TextViewItem
          label={i18n('entities.transfer.fields.clearingHouseTransactionId')}
          value={record.clearingHouseTransactionId}
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

export default TransferView;
