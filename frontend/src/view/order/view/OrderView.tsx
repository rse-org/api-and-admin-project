import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import InvestorViewItem from 'src/view/investor/view/InvestorViewItem';
import FundViewItem from 'src/view/fund/view/FundViewItem';

function OrderView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <InvestorViewItem
          label={i18n('entities.order.fields.investor')}
          value={record.investor}
        />

        <FundViewItem
          label={i18n('entities.order.fields.funds')}
          value={record.funds}
        />

        <UserViewItem
          label={i18n('entities.order.fields.employee')}
          value={record.employee}
        />

        <TextViewItem
          label={i18n('entities.order.fields.status')}
          value={
            record.status &&
            i18n(
              `entities.order.enumerators.status.${record.status}`,
            )
          }
        />

        <FilesViewItem
          label={i18n(
            'entities.order.fields.attachments',
          )}
          value={record.attachments}
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

export default OrderView;
