export default {
  lang: {
    code: 'en-US',
    name: 'English',
    decimal: '.',
    thousands: ',',
  },

  currency: {
    USD: {
      prefix: '$',
      precision: '2',
    },
    BRL: {
      prefix: 'BRL$',
      precision: '2',
    },
  },

  country: {
    BRA: {
      name: 'Brazil',
      alpha2: 'BR',
      alpha3: 'BRA',
      lang: {
        code: 'pt-BR',
        name: 'Portuguese',
      },
    },

    USA: {
      name: 'United States',
      alpha2: 'US',
      alpha3: 'USA',
      lang: {
        code: 'en-US',
        name: 'English',
      },
    },
  },

  system: {
    question: {
      confirmRemove: 'Are you sure you want to remove this item?',
    },
    info: {
      welcome: 'Welcome',
      notImplemented: 'Not Implemented',
    },
    success: {
      resetPassword: 'An E-Mail has been sent to your account',
      recoverPassword: 'The password has successfully changed',
      message: 'Successfully message sent!',
      persist: 'Persisted successfully!',
    },
    error: {
      unexpectedError: 'Unexpected Error',
      fieldNotDefined: 'Field Not Defined',
      unauthorized: 'Restricted Access',
      invalidCredentials: 'Invalid Credentials',
      invalidClientTokenId: 'Invalid Client Token ID',
      noServer: 'Could not connect to server',
      validation: 'Validation error',
      required: 'The field \'{0}\' is required',
      invalidEmail: 'The field \'{0}\' must be e-mail',
      invalidDate: 'The field \'{0}\' has not valid date',
      invalidProtocol: 'Not a valid protocol',
      timeOut: 'Request timed out',
      networkNotEmpty: 'Network is not empty',
      passwordLength: 'The password must have between {0} and {1} characters',
      samePassword: 'The fields password must match',
      invalidPassword: 'Invalid password',
      length: 'The field \'{0}\' must have between {1} and {2} characters',
      maxLength: 'The field \'{0}\' must not exceed {1} characters',
      minLength: 'The field \'{0}\' must have at least {1} characters',
      min: 'The field \'{0}\' must have a minimum value of {1}',
      max: 'The field \'{0}\' must have a maximum value of {1}',
      invalidAlpha: 'The field \'{0}\' must contain only letters',
      invalidAlphanumeric: 'The field \'{0}\' must contain only letters and numbers',
      invalidCreditCard: 'Invalid card credit number',
      format: 'Wrong format for field \'{0}\'',
      phoneFormat: 'Wrong format for phone number',
      zipcodeFormat: 'Wrong format for zip code',
      rgFormat: 'Wrong format for RG document',
      cpfFormat: 'Wrong format for CPF document',
      cnpjFormat: 'Wrong format for CNPJ document',
      geocode: 'Error on getting latitude and longitude. Try again later',
    },
  },

  log: {
    host: {
      describeImages: 'Listing OS Images...',
      describeSecurityGroups: 'Listing Security Groups...',
      describeKeyPairs: 'Listing Key Pairs...',
      describeVpcs: 'Listing VPCs...',
      createSecurityGroup: 'Creating a Security Group...',
      setSecurityGroupRules: 'Setting up Security Group access rules...',
      importKeyPair: `Importing Key Pair into region '{0}'...`,
      createKeyPair: 'Creating a Key Pair...',
      getObject: 'Getting Object from S3...',
      putObject: 'Puting Object into S3...',
      createBucket: 'Creating Bucket into S3...',
      waitFor: 'Waiting for instance to be running...',
      instanceRunning: 'Instance is running!',
      associateIamInstanceProfile: 'AttachingrunInstances Instance Profile...',
      runInstances: 'Running Instances...',
      attachInstanceProfile: 'Attaching Instance Profile...',
      instanceCreated: 'Instance Created',
      startInstances: 'Starting...',
      startedInstances: 'Running',
      stopInstances: 'Stopping...',
      stoppedInstances: 'Stopped',
      terminateInstances: 'Shutting Down...',
      terminatedInstances: 'Terminated',
    },
  },

  app: {
    title: 'Neo Constellation',
    subtitle: 'Console',
    anonymous: 'Anonymous',
    logout: 'Logout',
    exit: 'Exit',
    turnOn: 'Turn On',
    turnOff: 'Turn Off',
    terminate: 'Terminate',
    menu: 'Menu',
    add: 'Add',
    edit: 'Edit',
    clone: 'Clone',
    view: 'View',
    delete: 'Delete',
    create: 'Create',
    confirm: 'Confirm',
    back: 'Back',
    export: 'Export',
    select: 'Select',
    optional: 'Optional',
    remove: 'Remove',
    cancel: 'Cancel',
    noDataToShow: 'No data to show',
    downloadCsv: 'Download CSV',
    search: 'Search',
    totalLines: '{total} total lines',
    version: 'Version',
    onlyIfWantChangePassword: 'Fill this field only if you want to change the password',
    noResultFound: 'No result found',
    emptyList: 'Empty list',
  },

  dateFormat: {
    date: 'MM/DD/YYYY',
    datetime: 'MM/DD/YYYY hh:mm',
    time: 'hh:mm',
    datemask: '##/##/####',
    datetimemask: '##/##/#### ##:##',
  },

  format: {
    cpf: '###.###.###-##',
    cnpj: '##.###.###/####-##',
    rg: '##.###.###-#',
    cep: '#####-###',
    phone: '(##) #####-####',
  },

  boolean: {
    true: 'Yes',
    false: 'No',
  },

  httpResponse: {
    100: 'Continue',
    101: 'Switching Protocol',
    200: 'Ok',
    201: 'Created',
    202: 'Accepted',
    203: 'Non Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    422: 'Unprocessable Entity',
    429: 'Too Many Requests',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'Http Version Not Supported',
  },

  nav: {
    dashboard: 'Dashboard',
    hosts: 'Hosts',
    logsDashboard: 'Logs Dashboard',
    securityGroups: 'Security Groups',
    configurationFiles: 'Configuration Files',
    deleteNetwork: 'Delete Network',
  },

  view: {
    login: {
      title: 'Neo Constellation',
      form: {
        accessKey: 'AWS Access Key',
        accessSecret: 'AWS Access Secret',
        keepLogged: 'Keep me logged in',
        submit: 'Login',
      },
    },
    dashboard: {
      title: 'Dashboard',
      createHost: 'Create Host',
      reloadList: 'Reload List',
      addEmptyNetwork: 'Add Empty Network',
      addNetworkFromStack: 'Add Network from Stack',
      newApplication: 'New Application',
      commands: 'Commands',
      containers: 'Containers',
    },
    hosts: {
      addHost: 'Add Host',
    },
    getAppBlueprint: {
      title: 'Application',
      edit: 'Edit',
      editAndClone: 'Edit and clone',
      delete: 'Delete',
    },
  },

  modal: {
    persistHost: {
      title: 'Create Host',
    },
    persistNetwork: {
      title: 'Create Network',
    },
    persistApplicationBlueprint: {
      title: 'Application',
      titleCreate: 'Create Application',
      titleEdit: 'Edit Application',
      titleClone: 'Clone Application',
      dockerRegister: 'Docker Register',
      repositoryAndBuildScript: 'Repository and Build Script',
      sourceCodeFormat: 'Source Code Format',
    },
    removeApplicationBlueprint: {
      title: 'Remove Application',
      body: 'Are you sure you want to remove this application?',
    },
    removeNetwork: {
      title: 'Remove Network',
      body: 'Are you sure you want to remove this network?',
    },
    terminateHost: {
      title: 'Terminate Host',
      body: 'Are you sure you want to terminate this host? This process cannot be undone.',
    },
  },

  classes: {
    Authentication: {
      title: 'AuthRequest',
      columns: {
        accessKeyId: 'AWS Access Key',
        secretAccessKey: 'AWS Access Secret',
      },
    },
    Host: {
      title: 'Host',
      columns: {
        $id: 'ID',
        idNetwork: 'Network ID',
        imageId: 'OS Image ID',
        securityGroupId: 'SG ID',
        securityGroup: 'Security Group',
        name: 'Name',
        size: 'Size',
        region: 'Region',
        regionMutable: 'Region',
        availabilityZone: 'Availability Zone',
        keyPair: 'Key Pair',
        instanceProfile: 'Instace Profile',
        groupName: 'Group Name',
        ipv4: 'IPv4 Public IP',
        publicdns: 'Public DNS (IPv4)',
        initialScript: 'Initial Script',
      },
      state: {
        null: 'Pending',
        0: 'Pending',
        16: 'Running',
        32: 'Shutting Down',
        48: 'Terminated',
        64: 'Stopping',
        80: 'Stopped',
      },
      stateClass: {
        null: 'tertiary',
        0: 'tertiary',
        16: 'success',
        32: 'tertiary',
        48: 'danger',
        64: 'tertiary',
        80: 'warning',
      },
    },
    Network: {
      title: 'Network',
      columns: {
        $id: 'ID',
        name: 'Name',
        hosts: 'Hosts',
        runningSince: 'Running Since',
        running: 'Running',
        notRunning: 'Not Running',
        build: 'Build Network',
      },
    },
    ApplicationBlueprint: {
      title: 'Application',
      columns: {
        $id: 'ID',
        name: 'Name',
        role: 'Role',
        dockerImageId: 'Docker Image ID',
        runCommands: 'RunCommands',
        repositoryUrl: 'Repository',
        buildScript: 'Build Script',
      },
    },
    Container: {
      title: 'Container',
      columns: {
        $id: 'ID',
        image: 'Image',
        command: 'Command',
        createdAt: 'Created at',
        runningFor: 'Running for',
        ports: 'Ports',
        status: 'Status',
        size: 'Size',
        names: 'Name',
        labels: 'Labels',
        mounts: 'Mounts',
        networks: 'Networks',
      },
    },
  },
}
