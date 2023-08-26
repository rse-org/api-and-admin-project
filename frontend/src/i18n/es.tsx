const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },
  api: {
    menu: 'API',
  },
  entities: {
    investor: {
        name: 'investor',
        label: 'Investors',
        menu: 'Investors',
        exporterFileName: 'exportacion_investor',
        list: {
          menu: 'Investors',
          title: 'Investors',
        },
        create: {
          success: 'Investor guardado con éxito',
        },
        update: {
          success: 'Investor guardado con éxito',
        },
        destroy: {
          success: 'Investor eliminado con éxito',
        },
        destroyAll: {
          success: 'Investor(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Investor',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Investor',
        },
        view: {
          title: 'Ver Investor',
        },
        importer: {
          title: 'Importar Investors',
          fileName: 'investor_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    manager: {
        name: 'manager',
        label: 'Managers',
        menu: 'Managers',
        exporterFileName: 'exportacion_manager',
        list: {
          menu: 'Managers',
          title: 'Managers',
        },
        create: {
          success: 'Manager guardado con éxito',
        },
        update: {
          success: 'Manager guardado con éxito',
        },
        destroy: {
          success: 'Manager eliminado con éxito',
        },
        destroyAll: {
          success: 'Manager(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Manager',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Manager',
        },
        view: {
          title: 'Ver Manager',
        },
        importer: {
          title: 'Importar Managers',
          fileName: 'manager_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    transfer: {
        name: 'transfer',
        label: 'Transfers',
        menu: 'Transfers',
        exporterFileName: 'exportacion_transfer',
        list: {
          menu: 'Transfers',
          title: 'Transfers',
        },
        create: {
          success: 'Transfer guardado con éxito',
        },
        update: {
          success: 'Transfer guardado con éxito',
        },
        destroy: {
          success: 'Transfer eliminado con éxito',
        },
        destroyAll: {
          success: 'Transfer(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Transfer',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Transfer',
        },
        view: {
          title: 'Ver Transfer',
        },
        importer: {
          title: 'Importar Transfers',
          fileName: 'transfer_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    fund: {
        name: 'fund',
        label: 'Funds',
        menu: 'Funds',
        exporterFileName: 'exportacion_fund',
        list: {
          menu: 'Funds',
          title: 'Funds',
        },
        create: {
          success: 'Fund guardado con éxito',
        },
        update: {
          success: 'Fund guardado con éxito',
        },
        destroy: {
          success: 'Fund eliminado con éxito',
        },
        destroyAll: {
          success: 'Fund(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Fund',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Fund',
        },
        view: {
          title: 'Ver Fund',
        },
        importer: {
          title: 'Importar Funds',
          fileName: 'fund_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    asset: {
        name: 'asset',
        label: 'Assets',
        menu: 'Assets',
        exporterFileName: 'exportacion_asset',
        list: {
          menu: 'Assets',
          title: 'Assets',
        },
        create: {
          success: 'Asset guardado con éxito',
        },
        update: {
          success: 'Asset guardado con éxito',
        },
        destroy: {
          success: 'Asset eliminado con éxito',
        },
        destroyAll: {
          success: 'Asset(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Asset',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Asset',
        },
        view: {
          title: 'Ver Asset',
        },
        importer: {
          title: 'Importar Assets',
          fileName: 'asset_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    fundAsset: {
        name: 'fundAsset',
        label: 'Fund Assets',
        menu: 'Fund Assets',
        exporterFileName: 'exportacion_fundAsset',
        list: {
          menu: 'Fund Assets',
          title: 'Fund Assets',
        },
        create: {
          success: 'Fund Asset guardado con éxito',
        },
        update: {
          success: 'Fund Asset guardado con éxito',
        },
        destroy: {
          success: 'Fund Asset eliminado con éxito',
        },
        destroyAll: {
          success: 'Fund Asset(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Fund Asset',
        },
        fields: {
          id: 'Id',
          'fund': 'Fund',
          'asset': 'Asset',
          'percentageRange': 'Percentage',
          'percentage': 'Percentage',
          'code': 'Code',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Fund Asset',
        },
        view: {
          title: 'Ver Fund Asset',
        },
        importer: {
          title: 'Importar Fund Assets',
          fileName: 'fundAsset_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'exportacion_order',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order guardado con éxito',
        },
        update: {
          success: 'Order guardado con éxito',
        },
        destroy: {
          success: 'Order eliminado con éxito',
        },
        destroyAll: {
          success: 'Order(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Order',
        },
        fields: {
          id: 'Id',
          'investor': 'Investor',
          'funds': 'Funds',
          'employee': 'Employee',
          'status': 'Status',
          'attachments': 'Attachments',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Order',
        },
        view: {
          title: 'Ver Order',
        },
        importer: {
          title: 'Importar Orders',
          fileName: 'order_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    trade: {
        name: 'trade',
        label: 'Trades',
        menu: 'Trades',
        exporterFileName: 'exportacion_trade',
        list: {
          menu: 'Trades',
          title: 'Trades',
        },
        create: {
          success: 'Trade guardado con éxito',
        },
        update: {
          success: 'Trade guardado con éxito',
        },
        destroy: {
          success: 'Trade eliminado con éxito',
        },
        destroyAll: {
          success: 'Trade(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Trade',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Trade',
        },
        view: {
          title: 'Ver Trade',
        },
        importer: {
          title: 'Importar Trades',
          fileName: 'trade_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    document: {
        name: 'document',
        label: 'Documents',
        menu: 'Documents',
        exporterFileName: 'exportacion_document',
        list: {
          menu: 'Documents',
          title: 'Documents',
        },
        create: {
          success: 'Document guardado con éxito',
        },
        update: {
          success: 'Document guardado con éxito',
        },
        destroy: {
          success: 'Document eliminado con éxito',
        },
        destroyAll: {
          success: 'Document(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Document',
        },
        fields: {
          id: 'Id',
          'file': 'File',
          'investor': 'Investor',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Document',
        },
        view: {
          title: 'Ver Document',
        },
        importer: {
          title: 'Importar Documents',
          fileName: 'document_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    reward: {
        name: 'reward',
        label: 'Rewards',
        menu: 'Rewards',
        exporterFileName: 'exportacion_reward',
        list: {
          menu: 'Rewards',
          title: 'Rewards',
        },
        create: {
          success: 'Reward guardado con éxito',
        },
        update: {
          success: 'Reward guardado con éxito',
        },
        destroy: {
          success: 'Reward eliminado con éxito',
        },
        destroyAll: {
          success: 'Reward(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Reward',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'investor': 'Investor',
          'affiliate': 'Affiliate',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Reward',
        },
        view: {
          title: 'Ver Reward',
        },
        importer: {
          title: 'Importar Rewards',
          fileName: 'reward_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imágenes de fondo',
      shade: 'Sombra',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },
  
  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default es;
