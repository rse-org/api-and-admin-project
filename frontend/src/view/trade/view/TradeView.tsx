import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import moment from 'moment';
import InvestorViewItem from 'src/view/investor/view/InvestorViewItem';
import FundViewItem from 'src/view/fund/view/FundViewItem';

function TradeView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.trade.fields.value')}
          value={record.value}
        />

        <CustomViewItem
          label={i18n('entities.trade.fields.status')}
          value={record.status}
          render={(values) =>
            (values || []).map((value) => (
              <div key={value}>
                {value
                  ? i18n(
                    `entities.trade.enumerators.status.${value}`,
                    )
                  : null}
              </div>
            ))
          }
        />

        <InvestorViewItem
          label={i18n('entities.trade.fields.investor')}
          value={record.investor}
        />

        <FundViewItem
          label={i18n('entities.trade.fields.product')}
          value={record.product}
        />

        <TextViewItem
          label={i18n(
            'entities.trade.fields.executeDate',
          )}
          value={moment(record.executeDate).format(
            'YYYY-MM-DD HH:mm',
          )}
        />

        {record.valueOnExecute != null && <TextViewItem
          label={i18n('entities.trade.fields.valueOnExecute')}
          value={Number(record.valueOnExecute).toFixed(2)}
        />}        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default TradeView;
