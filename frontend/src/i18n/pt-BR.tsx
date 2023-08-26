const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    investor: {
        name: 'Investor',
        label: 'Investors',
        menu: 'Investors',
        exporterFileName: 'Investor_exportados',
        list: {
          menu: 'Investors',
          title: 'Investors',
        },
        create: {
          success: 'Investor salvo com sucesso',
        },
        update: {
          success: 'Investor salvo com sucesso',
        },
        destroy: {
          success: 'Investor deletado com sucesso',
        },
        destroyAll: {
          success: 'Investor(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Investor',
        },
        view: {
          title: 'Visualizar Investor',
        },
        importer: {
          title: 'Importar Investors',
          fileName: 'investor_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    manager: {
        name: 'Manager',
        label: 'Managers',
        menu: 'Managers',
        exporterFileName: 'Manager_exportados',
        list: {
          menu: 'Managers',
          title: 'Managers',
        },
        create: {
          success: 'Manager salvo com sucesso',
        },
        update: {
          success: 'Manager salvo com sucesso',
        },
        destroy: {
          success: 'Manager deletado com sucesso',
        },
        destroyAll: {
          success: 'Manager(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Manager',
        },
        view: {
          title: 'Visualizar Manager',
        },
        importer: {
          title: 'Importar Managers',
          fileName: 'manager_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    transfer: {
        name: 'Transfer',
        label: 'Transfers',
        menu: 'Transfers',
        exporterFileName: 'Transfer_exportados',
        list: {
          menu: 'Transfers',
          title: 'Transfers',
        },
        create: {
          success: 'Transfer salvo com sucesso',
        },
        update: {
          success: 'Transfer salvo com sucesso',
        },
        destroy: {
          success: 'Transfer deletado com sucesso',
        },
        destroyAll: {
          success: 'Transfer(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Transfer',
        },
        view: {
          title: 'Visualizar Transfer',
        },
        importer: {
          title: 'Importar Transfers',
          fileName: 'transfer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    fund: {
        name: 'Fund',
        label: 'Funds',
        menu: 'Funds',
        exporterFileName: 'Fund_exportados',
        list: {
          menu: 'Funds',
          title: 'Funds',
        },
        create: {
          success: 'Fund salvo com sucesso',
        },
        update: {
          success: 'Fund salvo com sucesso',
        },
        destroy: {
          success: 'Fund deletado com sucesso',
        },
        destroyAll: {
          success: 'Fund(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Fund',
        },
        view: {
          title: 'Visualizar Fund',
        },
        importer: {
          title: 'Importar Funds',
          fileName: 'fund_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    asset: {
        name: 'Asset',
        label: 'Assets',
        menu: 'Assets',
        exporterFileName: 'Asset_exportados',
        list: {
          menu: 'Assets',
          title: 'Assets',
        },
        create: {
          success: 'Asset salvo com sucesso',
        },
        update: {
          success: 'Asset salvo com sucesso',
        },
        destroy: {
          success: 'Asset deletado com sucesso',
        },
        destroyAll: {
          success: 'Asset(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Asset',
        },
        view: {
          title: 'Visualizar Asset',
        },
        importer: {
          title: 'Importar Assets',
          fileName: 'asset_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    fundAsset: {
        name: 'Fund Asset',
        label: 'Fund Assets',
        menu: 'Fund Assets',
        exporterFileName: 'Fund Asset_exportados',
        list: {
          menu: 'Fund Assets',
          title: 'Fund Assets',
        },
        create: {
          success: 'Fund Asset salvo com sucesso',
        },
        update: {
          success: 'Fund Asset salvo com sucesso',
        },
        destroy: {
          success: 'Fund Asset deletado com sucesso',
        },
        destroyAll: {
          success: 'Fund Asset(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Fund Asset',
        },
        view: {
          title: 'Visualizar Fund Asset',
        },
        importer: {
          title: 'Importar Fund Assets',
          fileName: 'fundAsset_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    order: {
        name: 'Order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'Order_exportados',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order salvo com sucesso',
        },
        update: {
          success: 'Order salvo com sucesso',
        },
        destroy: {
          success: 'Order deletado com sucesso',
        },
        destroyAll: {
          success: 'Order(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Order',
        },
        view: {
          title: 'Visualizar Order',
        },
        importer: {
          title: 'Importar Orders',
          fileName: 'order_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    trade: {
        name: 'Trade',
        label: 'Trades',
        menu: 'Trades',
        exporterFileName: 'Trade_exportados',
        list: {
          menu: 'Trades',
          title: 'Trades',
        },
        create: {
          success: 'Trade salvo com sucesso',
        },
        update: {
          success: 'Trade salvo com sucesso',
        },
        destroy: {
          success: 'Trade deletado com sucesso',
        },
        destroyAll: {
          success: 'Trade(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Trade',
        },
        view: {
          title: 'Visualizar Trade',
        },
        importer: {
          title: 'Importar Trades',
          fileName: 'trade_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    document: {
        name: 'Document',
        label: 'Documents',
        menu: 'Documents',
        exporterFileName: 'Document_exportados',
        list: {
          menu: 'Documents',
          title: 'Documents',
        },
        create: {
          success: 'Document salvo com sucesso',
        },
        update: {
          success: 'Document salvo com sucesso',
        },
        destroy: {
          success: 'Document deletado com sucesso',
        },
        destroyAll: {
          success: 'Document(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Document',
        },
        fields: {
          id: 'Id',
          'file': 'File',
          'investor': 'Investor',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Document',
        },
        view: {
          title: 'Visualizar Document',
        },
        importer: {
          title: 'Importar Documents',
          fileName: 'document_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    reward: {
        name: 'Reward',
        label: 'Rewards',
        menu: 'Rewards',
        exporterFileName: 'Reward_exportados',
        list: {
          menu: 'Rewards',
          title: 'Rewards',
        },
        create: {
          success: 'Reward salvo com sucesso',
        },
        update: {
          success: 'Reward salvo com sucesso',
        },
        destroy: {
          success: 'Reward deletado com sucesso',
        },
        destroyAll: {
          success: 'Reward(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Reward',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'investor': 'Investor',
          'affiliate': 'Affiliate',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Reward',
        },
        view: {
          title: 'Visualizar Reward',
        },
        importer: {
          title: 'Importar Rewards',
          fileName: 'reward_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
