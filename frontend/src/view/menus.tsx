import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/investor',
    permissionRequired: permissions.investorRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.investor.menu'),
  },

  {
    path: '/manager',
    permissionRequired: permissions.managerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.manager.menu'),
  },

  {
    path: '/transfer',
    permissionRequired: permissions.transferRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.transfer.menu'),
  },

  {
    path: '/fund',
    permissionRequired: permissions.fundRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.fund.menu'),
  },

  {
    path: '/asset',
    permissionRequired: permissions.assetRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.asset.menu'),
  },

  {
    path: '/fund-asset',
    permissionRequired: permissions.fundAssetRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.fundAsset.menu'),
  },

  {
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.order.menu'),
  },

  {
    path: '/trade',
    permissionRequired: permissions.tradeRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.trade.menu'),
  },

  {
    path: '/document',
    permissionRequired: permissions.documentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.document.menu'),
  },

  {
    path: '/reward',
    permissionRequired: permissions.rewardRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.reward.menu'),
  },
].filter(Boolean);
