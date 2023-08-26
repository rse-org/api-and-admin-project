import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FundViewItem from 'src/view/fund/view/FundViewItem';

function InvestorView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.investor.fields.firstName')}
          value={record.firstName}
        />

        <TextViewItem
          label={i18n('entities.investor.fields.lastName')}
          value={record.lastName}
        />

        <TextViewItem
          label={i18n('entities.investor.fields.email')}
          value={record.email}
        />

        <TextViewItem
          label={i18n('entities.investor.fields.phone')}
          value={record.phone}
        />

        <TextViewItem
          label={i18n('entities.investor.fields.birthdate')}
          value={record.birthdate}
        />

        <TextViewItem
          label={i18n('entities.investor.fields.gender')}
          value={
            record.gender &&
            i18n(
              `entities.investor.enumerators.gender.${record.gender}`,
            )
          }
        />

        <FundViewItem
          label={i18n('entities.investor.fields.products')}
          value={record.products}
        />

        <TextViewItem
          label={i18n('entities.investor.fields.theme')}
          value={
            record.theme &&
            i18n(
              `entities.investor.enumerators.theme.${record.theme}`,
            )
          }
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

export default InvestorView;
