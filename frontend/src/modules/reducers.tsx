import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import investor from 'src/modules/investor/investorReducers';
import manager from 'src/modules/manager/managerReducers';
import transfer from 'src/modules/transfer/transferReducers';
import fund from 'src/modules/fund/fundReducers';
import asset from 'src/modules/asset/assetReducers';
import fundAsset from 'src/modules/fundAsset/fundAssetReducers';
import order from 'src/modules/order/orderReducers';
import trade from 'src/modules/trade/tradeReducers';
import document from 'src/modules/document/documentReducers';
import reward from 'src/modules/reward/rewardReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    investor,
    manager,
    transfer,
    fund,
    asset,
    fundAsset,
    order,
    trade,
    document,
    reward,
  });
