import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/investor',
    loader: () =>
      import('src/view/investor/list/InvestorListPage'),
    permissionRequired: permissions.investorRead,
    exact: true,
  },
  {
    path: '/investor/new',
    loader: () =>
      import('src/view/investor/form/InvestorFormPage'),
    permissionRequired: permissions.investorCreate,
    exact: true,
  },
  {
    path: '/investor/importer',
    loader: () =>
      import(
        'src/view/investor/importer/InvestorImporterPage'
      ),
    permissionRequired: permissions.investorImport,
    exact: true,
  },
  {
    path: '/investor/:id/edit',
    loader: () =>
      import('src/view/investor/form/InvestorFormPage'),
    permissionRequired: permissions.investorEdit,
    exact: true,
  },
  {
    path: '/investor/:id',
    loader: () =>
      import('src/view/investor/view/InvestorViewPage'),
    permissionRequired: permissions.investorRead,
    exact: true,
  },

  {
    path: '/manager',
    loader: () =>
      import('src/view/manager/list/ManagerListPage'),
    permissionRequired: permissions.managerRead,
    exact: true,
  },
  {
    path: '/manager/new',
    loader: () =>
      import('src/view/manager/form/ManagerFormPage'),
    permissionRequired: permissions.managerCreate,
    exact: true,
  },
  {
    path: '/manager/importer',
    loader: () =>
      import(
        'src/view/manager/importer/ManagerImporterPage'
      ),
    permissionRequired: permissions.managerImport,
    exact: true,
  },
  {
    path: '/manager/:id/edit',
    loader: () =>
      import('src/view/manager/form/ManagerFormPage'),
    permissionRequired: permissions.managerEdit,
    exact: true,
  },
  {
    path: '/manager/:id',
    loader: () =>
      import('src/view/manager/view/ManagerViewPage'),
    permissionRequired: permissions.managerRead,
    exact: true,
  },

  {
    path: '/transfer',
    loader: () =>
      import('src/view/transfer/list/TransferListPage'),
    permissionRequired: permissions.transferRead,
    exact: true,
  },
  {
    path: '/transfer/new',
    loader: () =>
      import('src/view/transfer/form/TransferFormPage'),
    permissionRequired: permissions.transferCreate,
    exact: true,
  },
  {
    path: '/transfer/importer',
    loader: () =>
      import(
        'src/view/transfer/importer/TransferImporterPage'
      ),
    permissionRequired: permissions.transferImport,
    exact: true,
  },
  {
    path: '/transfer/:id/edit',
    loader: () =>
      import('src/view/transfer/form/TransferFormPage'),
    permissionRequired: permissions.transferEdit,
    exact: true,
  },
  {
    path: '/transfer/:id',
    loader: () =>
      import('src/view/transfer/view/TransferViewPage'),
    permissionRequired: permissions.transferRead,
    exact: true,
  },

  {
    path: '/fund',
    loader: () =>
      import('src/view/fund/list/FundListPage'),
    permissionRequired: permissions.fundRead,
    exact: true,
  },
  {
    path: '/fund/new',
    loader: () =>
      import('src/view/fund/form/FundFormPage'),
    permissionRequired: permissions.fundCreate,
    exact: true,
  },
  {
    path: '/fund/importer',
    loader: () =>
      import(
        'src/view/fund/importer/FundImporterPage'
      ),
    permissionRequired: permissions.fundImport,
    exact: true,
  },
  {
    path: '/fund/:id/edit',
    loader: () =>
      import('src/view/fund/form/FundFormPage'),
    permissionRequired: permissions.fundEdit,
    exact: true,
  },
  {
    path: '/fund/:id',
    loader: () =>
      import('src/view/fund/view/FundViewPage'),
    permissionRequired: permissions.fundRead,
    exact: true,
  },

  {
    path: '/asset',
    loader: () =>
      import('src/view/asset/list/AssetListPage'),
    permissionRequired: permissions.assetRead,
    exact: true,
  },
  {
    path: '/asset/new',
    loader: () =>
      import('src/view/asset/form/AssetFormPage'),
    permissionRequired: permissions.assetCreate,
    exact: true,
  },
  {
    path: '/asset/importer',
    loader: () =>
      import(
        'src/view/asset/importer/AssetImporterPage'
      ),
    permissionRequired: permissions.assetImport,
    exact: true,
  },
  {
    path: '/asset/:id/edit',
    loader: () =>
      import('src/view/asset/form/AssetFormPage'),
    permissionRequired: permissions.assetEdit,
    exact: true,
  },
  {
    path: '/asset/:id',
    loader: () =>
      import('src/view/asset/view/AssetViewPage'),
    permissionRequired: permissions.assetRead,
    exact: true,
  },

  {
    path: '/fund-asset',
    loader: () =>
      import('src/view/fundAsset/list/FundAssetListPage'),
    permissionRequired: permissions.fundAssetRead,
    exact: true,
  },
  {
    path: '/fund-asset/new',
    loader: () =>
      import('src/view/fundAsset/form/FundAssetFormPage'),
    permissionRequired: permissions.fundAssetCreate,
    exact: true,
  },
  {
    path: '/fund-asset/importer',
    loader: () =>
      import(
        'src/view/fundAsset/importer/FundAssetImporterPage'
      ),
    permissionRequired: permissions.fundAssetImport,
    exact: true,
  },
  {
    path: '/fund-asset/:id/edit',
    loader: () =>
      import('src/view/fundAsset/form/FundAssetFormPage'),
    permissionRequired: permissions.fundAssetEdit,
    exact: true,
  },
  {
    path: '/fund-asset/:id',
    loader: () =>
      import('src/view/fundAsset/view/FundAssetViewPage'),
    permissionRequired: permissions.fundAssetRead,
    exact: true,
  },

  {
    path: '/order',
    loader: () =>
      import('src/view/order/list/OrderListPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
  },
  {
    path: '/order/new',
    loader: () =>
      import('src/view/order/form/OrderFormPage'),
    permissionRequired: permissions.orderCreate,
    exact: true,
  },
  {
    path: '/order/importer',
    loader: () =>
      import(
        'src/view/order/importer/OrderImporterPage'
      ),
    permissionRequired: permissions.orderImport,
    exact: true,
  },
  {
    path: '/order/:id/edit',
    loader: () =>
      import('src/view/order/form/OrderFormPage'),
    permissionRequired: permissions.orderEdit,
    exact: true,
  },
  {
    path: '/order/:id',
    loader: () =>
      import('src/view/order/view/OrderViewPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
  },

  {
    path: '/trade',
    loader: () =>
      import('src/view/trade/list/TradeListPage'),
    permissionRequired: permissions.tradeRead,
    exact: true,
  },
  {
    path: '/trade/new',
    loader: () =>
      import('src/view/trade/form/TradeFormPage'),
    permissionRequired: permissions.tradeCreate,
    exact: true,
  },
  {
    path: '/trade/importer',
    loader: () =>
      import(
        'src/view/trade/importer/TradeImporterPage'
      ),
    permissionRequired: permissions.tradeImport,
    exact: true,
  },
  {
    path: '/trade/:id/edit',
    loader: () =>
      import('src/view/trade/form/TradeFormPage'),
    permissionRequired: permissions.tradeEdit,
    exact: true,
  },
  {
    path: '/trade/:id',
    loader: () =>
      import('src/view/trade/view/TradeViewPage'),
    permissionRequired: permissions.tradeRead,
    exact: true,
  },

  {
    path: '/document',
    loader: () =>
      import('src/view/document/list/DocumentListPage'),
    permissionRequired: permissions.documentRead,
    exact: true,
  },
  {
    path: '/document/new',
    loader: () =>
      import('src/view/document/form/DocumentFormPage'),
    permissionRequired: permissions.documentCreate,
    exact: true,
  },
  {
    path: '/document/importer',
    loader: () =>
      import(
        'src/view/document/importer/DocumentImporterPage'
      ),
    permissionRequired: permissions.documentImport,
    exact: true,
  },
  {
    path: '/document/:id/edit',
    loader: () =>
      import('src/view/document/form/DocumentFormPage'),
    permissionRequired: permissions.documentEdit,
    exact: true,
  },
  {
    path: '/document/:id',
    loader: () =>
      import('src/view/document/view/DocumentViewPage'),
    permissionRequired: permissions.documentRead,
    exact: true,
  },

  {
    path: '/reward',
    loader: () =>
      import('src/view/reward/list/RewardListPage'),
    permissionRequired: permissions.rewardRead,
    exact: true,
  },
  {
    path: '/reward/new',
    loader: () =>
      import('src/view/reward/form/RewardFormPage'),
    permissionRequired: permissions.rewardCreate,
    exact: true,
  },
  {
    path: '/reward/importer',
    loader: () =>
      import(
        'src/view/reward/importer/RewardImporterPage'
      ),
    permissionRequired: permissions.rewardImport,
    exact: true,
  },
  {
    path: '/reward/:id/edit',
    loader: () =>
      import('src/view/reward/form/RewardFormPage'),
    permissionRequired: permissions.rewardEdit,
    exact: true,
  },
  {
    path: '/reward/:id',
    loader: () =>
      import('src/view/reward/view/RewardViewPage'),
    permissionRequired: permissions.rewardRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
