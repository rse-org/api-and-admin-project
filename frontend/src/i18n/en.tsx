const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    investor: {
        name: 'investor',
        label: 'Investors',
        menu: 'Investors',
        exporterFileName: 'investor_export',
        list: {
          menu: 'Investors',
          title: 'Investors',
        },
        create: {
          success: 'Investor successfully saved',
        },
        update: {
          success: 'Investor successfully saved',
        },
        destroy: {
          success: 'Investor successfully deleted',
        },
        destroyAll: {
          success: 'Investor(s) successfully deleted',
        },
        edit: {
          title: 'Edit Investor',
        },
        fields: {
          id: 'Id',
          'firstName': 'First Name',
          'lastName': 'Last Name',
          'email': 'Email',
          'phone': 'Phone',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'gender': 'Gender',
          'products': 'Products',
          'theme': 'Theme',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'm': 'M',
            'f': 'F',
          },
          'theme': {
            'light': 'Light',
            'dark': 'Dark',
          },
        },
        placeholders: {
          'firstName': 'Loi',
          'lastName': 'Do',
          'email': 'user@email.com',
          'phone': '096 435 9305',
          'birthdate': '2023-08-25',
          'gender': 'm, f',
          'theme': 'Dark/Light',
        },
        hints: {

        },
        new: {
          title: 'New Investor',
        },
        view: {
          title: 'View Investor',
        },
        importer: {
          title: 'Import Investors',
          fileName: 'investor_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    manager: {
        name: 'manager',
        label: 'Managers',
        menu: 'Managers',
        exporterFileName: 'manager_export',
        list: {
          menu: 'Managers',
          title: 'Managers',
        },
        create: {
          success: 'Manager successfully saved',
        },
        update: {
          success: 'Manager successfully saved',
        },
        destroy: {
          success: 'Manager successfully deleted',
        },
        destroyAll: {
          success: 'Manager(s) successfully deleted',
        },
        edit: {
          title: 'Edit Manager',
        },
        fields: {
          id: 'Id',
          'firstName': 'First Name',
          'lastName': 'Last Name',
          'title': 'Title',
          'about': 'About',
          'school': 'School',
          'products': 'Products',
          'highestLevelEducation': 'Highest Level Education',
          'photos': 'Photos',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'highestLevelEducation': {
            'bachelors': 'Bachelors',
            'masters': 'Masters',
            'doctorate': 'Doctorate',
          },
        },
        placeholders: {
          'firstName': 'Hoang',
          'lastName': 'Nguyen',
          'title': 'Portfolio Manager',
          'highestLevelEducation': 'bachelors',
        },
        hints: {

        },
        new: {
          title: 'New Manager',
        },
        view: {
          title: 'View Manager',
        },
        importer: {
          title: 'Import Managers',
          fileName: 'manager_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    transfer: {
        name: 'transfer',
        label: 'Transfers',
        menu: 'Transfers',
        exporterFileName: 'transfer_export',
        list: {
          menu: 'Transfers',
          title: 'Transfers',
        },
        create: {
          success: 'Transfer successfully saved',
        },
        update: {
          success: 'Transfer successfully saved',
        },
        destroy: {
          success: 'Transfer successfully deleted',
        },
        destroyAll: {
          success: 'Transfer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Transfer',
        },
        fields: {
          id: 'Id',
          'investor': 'Investor',
          'direction': 'Direction',
          'valueRange': 'Value',
          'value': 'Value',
          'status': 'Status',
          'completeDateRange': 'Complete Date',
          'completeDate': 'Complete Date',
          'clearingHouse': 'Clearing House',
          'clearingHouseTransactionId': 'Clearing House Transaction Id',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'direction': {
            'credit': 'Credit',
            'debit': 'Debit',
          },
          'status': {
            'submitted': 'Submitted',
            'processing': 'Processing',
            'cancelled': 'Cancelled',
            'closed': 'Closed',
            'completed': 'Completed',
          },
        },
        placeholders: {
          'investor': 'Thanh Luu',
          'value': '$999.99',
          'status': 'submitted',
        },
        hints: {
          'direction': 'Credit is money into portfolio & debit is money outbound to their bank account',
        },
        new: {
          title: 'New Transfer',
        },
        view: {
          title: 'View Transfer',
        },
        importer: {
          title: 'Import Transfers',
          fileName: 'transfer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    fund: {
        name: 'fund',
        label: 'Funds',
        menu: 'Funds',
        exporterFileName: 'fund_export',
        list: {
          menu: 'Funds',
          title: 'Funds',
        },
        create: {
          success: 'Fund successfully saved',
        },
        update: {
          success: 'Fund successfully saved',
        },
        destroy: {
          success: 'Fund successfully deleted',
        },
        destroyAll: {
          success: 'Fund(s) successfully deleted',
        },
        edit: {
          title: 'Edit Fund',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'subtitle': 'Subtitle',
          'intro': 'Intro',
          'description': 'Description',
          'fundAssets': 'Fund Assets',
          'annualizedReturnRange': 'Annualized Return',
          'annualizedReturn': 'Annualized Return',
          'managers': 'Managers',
          'assetClass': 'Asset Class',
          'assets': 'Assets',
          'strategyExpensesRange': 'Strategy Expenses',
          'strategyExpenses': 'Strategy Expenses',
          'photos': 'Photos',
          'icon': 'Icon',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'assetClass': {
            'stocks': 'Stocks',
            'bonds': 'Bonds',
            'real estate': 'Real estate',
            'crypto': 'Crypto',
            'mutual fund': 'Mutual fund',
          },
        },
        placeholders: {
          'name': 'Flagship... Opportunities... Offshore... Automated Stocks',
          'subtitle': 'US Companies... International Companies... Large Companies... Small Companies... Tech Companies...',
        },
        hints: {

        },
        new: {
          title: 'New Fund',
        },
        view: {
          title: 'View Fund',
        },
        importer: {
          title: 'Import Funds',
          fileName: 'fund_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    asset: {
        name: 'asset',
        label: 'Assets',
        menu: 'Assets',
        exporterFileName: 'asset_export',
        list: {
          menu: 'Assets',
          title: 'Assets',
        },
        create: {
          success: 'Asset successfully saved',
        },
        update: {
          success: 'Asset successfully saved',
        },
        destroy: {
          success: 'Asset successfully deleted',
        },
        destroyAll: {
          success: 'Asset(s) successfully deleted',
        },
        edit: {
          title: 'Edit Asset',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'sym': 'SYM',
          'priceRange': 'Price',
          'price': 'Price',
          'hq': 'HQ',
          'ceo': 'CEO',
          'employeesRange': 'Employees',
          'employees': 'Employees',
          'icon': 'Icon',
          'fund': 'Fund',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Vinfast... Bank of America... Coinbase...',
          'sym': 'VFS, BAC, COIN, etc...',
          'price': '$99.99',
          'hq': 'Menlo Park, California',
          'ceo': 'Mark Zuckerburg',
        },
        hints: {

        },
        new: {
          title: 'New Asset',
        },
        view: {
          title: 'View Asset',
        },
        importer: {
          title: 'Import Assets',
          fileName: 'asset_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    fundAsset: {
        name: 'fundAsset',
        label: 'Fund Assets',
        menu: 'Fund Assets',
        exporterFileName: 'fundAsset_export',
        list: {
          menu: 'Fund Assets',
          title: 'Fund Assets',
        },
        create: {
          success: 'Fund Asset successfully saved',
        },
        update: {
          success: 'Fund Asset successfully saved',
        },
        destroy: {
          success: 'Fund Asset successfully deleted',
        },
        destroyAll: {
          success: 'Fund Asset(s) successfully deleted',
        },
        edit: {
          title: 'Edit Fund Asset',
        },
        fields: {
          id: 'Id',
          'fund': 'Fund',
          'asset': 'Asset',
          'percentageRange': 'Percentage',
          'percentage': 'Percentage',
          'code': 'Code',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'percentage': '10%',
          'code': 'flagship_appl_100',
        },
        hints: {
          'percentage': 'Percentage of fund which this asset represents',
          'code': 'Fund, security, percentage. Example: "flagship_appl_100" for "Flagship" fund, "APPL" stock, which represents "100%" of the fund',
        },
        new: {
          title: 'New Fund Asset',
        },
        view: {
          title: 'View Fund Asset',
        },
        importer: {
          title: 'Import Fund Assets',
          fileName: 'fundAsset_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'order_export',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order successfully saved',
        },
        update: {
          success: 'Order successfully saved',
        },
        destroy: {
          success: 'Order successfully deleted',
        },
        destroyAll: {
          success: 'Order(s) successfully deleted',
        },
        edit: {
          title: 'Edit Order',
        },
        fields: {
          id: 'Id',
          'investor': 'Investor',
          'funds': 'Funds',
          'employee': 'Employee',
          'status': 'Status',
          'attachments': 'Attachments',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'submitted': 'Submitted',
            'processing': 'Processing',
            'cancelled': 'Cancelled',
            'closed': 'Closed',
            'completed': 'Completed',
          },
        },
        placeholders: {
          'status': 'submitted',
        },
        hints: {

        },
        new: {
          title: 'New Order',
        },
        view: {
          title: 'View Order',
        },
        importer: {
          title: 'Import Orders',
          fileName: 'order_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    trade: {
        name: 'trade',
        label: 'Trades',
        menu: 'Trades',
        exporterFileName: 'trade_export',
        list: {
          menu: 'Trades',
          title: 'Trades',
        },
        create: {
          success: 'Trade successfully saved',
        },
        update: {
          success: 'Trade successfully saved',
        },
        destroy: {
          success: 'Trade successfully deleted',
        },
        destroyAll: {
          success: 'Trade(s) successfully deleted',
        },
        edit: {
          title: 'Edit Trade',
        },
        fields: {
          id: 'Id',
          'valueRange': 'Value',
          'value': 'Value',
          'status': 'Status',
          'investor': 'Investor',
          'product': 'Product',
          'executeDateRange': 'Execute Date',
          'executeDate': 'Execute Date',
          'valueOnExecuteRange': 'Value On Execute',
          'valueOnExecute': 'Value On Execute',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'open': 'Open',
            'in_progress': 'In_progress',
            'filled': 'Filled',
            'closed': 'Closed',
            'cancelled': 'Cancelled',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Trade',
        },
        view: {
          title: 'View Trade',
        },
        importer: {
          title: 'Import Trades',
          fileName: 'trade_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    document: {
        name: 'document',
        label: 'Documents',
        menu: 'Documents',
        exporterFileName: 'document_export',
        list: {
          menu: 'Documents',
          title: 'Documents',
        },
        create: {
          success: 'Document successfully saved',
        },
        update: {
          success: 'Document successfully saved',
        },
        destroy: {
          success: 'Document successfully deleted',
        },
        destroyAll: {
          success: 'Document(s) successfully deleted',
        },
        edit: {
          title: 'Edit Document',
        },
        fields: {
          id: 'Id',
          'file': 'File',
          'investor': 'Investor',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Document',
        },
        view: {
          title: 'View Document',
        },
        importer: {
          title: 'Import Documents',
          fileName: 'document_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    reward: {
        name: 'reward',
        label: 'Rewards',
        menu: 'Rewards',
        exporterFileName: 'reward_export',
        list: {
          menu: 'Rewards',
          title: 'Rewards',
        },
        create: {
          success: 'Reward successfully saved',
        },
        update: {
          success: 'Reward successfully saved',
        },
        destroy: {
          success: 'Reward successfully deleted',
        },
        destroyAll: {
          success: 'Reward(s) successfully deleted',
        },
        edit: {
          title: 'Edit Reward',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'investor': 'Investor',
          'affiliate': 'Affiliate',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Reward',
        },
        view: {
          title: 'View Reward',
        },
        importer: {
          title: 'Import Rewards',
          fileName: 'reward_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
