export default {
  header: {
    pricing: "Precios",
    connect: "Descargar",
    help: "Ayuda",
    login: "Iniciar sesión",
    register: "Comenzar",
    myId: "Copiar mi ID",
    payments: "Pagos",
    logout: "Cerrar sesión",
  },
  hero: {
    h1: "FRKN — VPN gratuita para personas libres",
    text: "Apoyamos la libertad de expresión y nos oponemos a todas las formas de censura. Estamos desarrollando una VPN descentralizada que no recopila ni almacena datos de los usuarios.",
    connect: "Conectar",
  },
  advantages: {
    no_logs: {
      title: "Sin registros",
      text: "FRKN asegura completa confidencialidad de tu actividad en línea. No rastreamos, transmitimos ni vendemos tu información. Tus datos personales no son almacenados, y no usamos cookies. Para conectarte, solo necesitas un número de cuenta, sin necesidad de ingresar contraseñas, correo electrónico o número de teléfono.",
    },
    open_source: {
      title: "Código abierto",
      text: "FRKN se basa en principios de código abierto, garantizando transparencia total y mejorando la seguridad. El código abierto permite que expertos y el público participen activamente en la revisión y mejora de nuestro producto. Esto facilita la detección y corrección rápida de vulnerabilidades, proporcionando una protección confiable de tus datos y un uso seguro de nuestro servicio VPN.",
    },
    speed: {
      title: "Velocidad",
      text: "FRKN te permite descargar archivos grandes, ver videos y jugar en línea sin restricciones, incluso en el plan gratuito.",
    },
    reliability: {
      title: "Confiabilidad",
      text: "Oculta tu ubicación utilizando algoritmos de cifrado avanzados. FRKN soporta los protocolos más confiables, como WireGuard y XRay, para garantizar la conexión más rápida y segura posible.",
    },
  },
  pricing: {
    free: {
      price: "Gratis",
      feature_1: "7 regiones",
      feature_2: "Soporte para todos los sistemas operativos",
      feature_3: "100 MB de tráfico por día",
      button: "Conectar",
    },
    pro: {
      price: "$5",
      in_month: "por mes",
      feature_1: "Todo en el plan gratuito",
      feature_2: "Tráfico ilimitado",
      feature_3: "Soporte para YouTube 4K",
      feature_4: "Puedes descargar torrents",
      button: "Comprar",
      active: "Activo",
    },
    pro_plus: {
      price: "$50",
      in_year: "por año",
      feature_1: "Todo en Pro",
      feature_2: "15% más barato que Pro",
      button: "Comprar",
      active: "Activo",
    },
    payment_provider_dialog: {
      title: "Proveedor de pago",
      description: "Elige un proveedor de pago",
      stripe: "Pagar con tarjeta",
      lava_rub: "Tarjetas rublo (bancos rusos)",
      crypto: "Criptomonedas",
      sbp: "Sistema de Pagos Rápidos (SBP)",
      pay: "Pagar",
      email_required: "Ingresa tu correo electrónico",
      support: "Contacta con nuestro equipo de soporte en Telegram",
    },
  },
  newsletter_form: {
    title: "Mantente conectado",
    description:
      "Recibe información sobre nuestro producto en tu correo electrónico, garantizamos que no habrá spam.",
    subscribe: "Suscribirse",
    success: "¡Gracias por suscribirte a nuestro boletín!",
  },
  locations: {
    available: "Ubicaciones disponibles",
    au: "Austria",
    de: "Alemania",
    jp: "Japón",
    nl: "Países Bajos",
    pl: "Polonia",
    ru: "Rusia",
    ch: "Suiza",
    tr: "Turquía",
    uk: "Reino Unido",
    us: "Estados Unidos",
  },
  footer: {
    contact: "Contacto",
    help: "Ayuda",
    merch: "Merchandising",
    privacy: "Política de privacidad",
    protocols: "Protocolos",
    setup: "Configuración",
    support: "Soporte",
    status: "Estado de servidores",
    terms: "Términos del servicio",
    tokenization: "Tokenización",
  },
  app: {
    installation: {
      ios_android: {
        method1: {
          title: "Método 1: Instalación mediante código QR",
          step1: "Genera un código QR",
          step2: "Instala la aplicación WireGuard",
          step3: "Abre la aplicación WireGuard",
          step4: 'Toca "+" en la esquina superior derecha',
          step5: 'Selecciona "Crear desde código QR"',
          step6: "Escanea el código QR generado en el sitio web",
        },
        method2: {
          title: "Método 2: Instalación desde archivo de configuración",
          step1: "Instala la aplicación WireGuard",
          step2: "Descarga el archivo de configuración desde el sitio web",
          step3: "Abre la aplicación WireGuard",
          step4: 'Toca "+" en la esquina superior derecha',
          step5: 'Selecciona "Crear desde archivo o archivo comprimido"',
          step6:
            "Ubica y selecciona el archivo de configuración descargado (con extensión .conf)",
          step7: "Usa el interruptor para encender/apagar la VPN",
        },
      },
      macos_windows: {
        step1: "Instala la aplicación WireGuard",
        step2: "Descarga el archivo de configuración desde el sitio web",
        step3: "Abre la aplicación WireGuard",
        step4: 'Haz clic en "Importar túneles desde archivo"',
        step5: "Selecciona el archivo de configuración descargado",
        step6: 'Haz clic en "Conectar"',
      },
      linux: {
        step1: "Actualiza el sistema:",
        step2: "Instala WireGuard:",
        step3: "Descarga el archivo de configuración desde el sitio web",
        step4: "Mueve el archivo de configuración:",
        step5: "Gestión de la conexión:",
        step5_1: "Conectar:",
        step5_2: "Ver estado:",
        step5_3: "Desconectar:",
        notice:
          'Nota: Si encuentras el error "resolvconf: command not found", instala resolvconf:',
      },
      qr: {
        mobile_button: "Configurar y código QR",
        title: "Código QR y archivo de configuración",
        description:
          "Selecciona un servidor para generar un código QR y archivo de configuración",
        choose_server: "Elige un servidor",
        download: "Descargar",
      },
      support:
        "Si tienes problemas con la instalación, por favor, escríbenos en el bot de Telegram",
    },
    registration: {
      title: "Registro",
      description: {
        part1:
          "FRKN garantiza total anonimato sin recopilar datos personales. Al registrarte, recibirás una frase mnemotécnica única de 12 palabras.",
        part2: "Esta frase es tu única clave para acceder a tu cuenta.",
        part3: "Importante:",
        list_item1: "Escribe y guarda de manera segura tu frase mnemotécnica",
        list_item2: "No la compartas con nadie",
        list_item3: "Utilízala para iniciar sesión en el sistema",
        list_item4: "Si pierdes la frase, no será posible recuperar la cuenta",
        part4:
          "Tu seguridad es nuestra prioridad. La ausencia de datos personales garantiza tu anonimato, pero requiere un almacenamiento responsable de la frase mnemotécnica.",
        error:
          "Lamentablemente, no pudimos generar la frase mnemotécnica. Intenta de nuevo. Si el problema persiste, contacta con nuestro equipo de soporte.",
        already_registered:
          "Si ya tienes una mnemofrase, solo inicia sesión en tu cuenta",
      },
      generated: {
        title: "¡Felicidades!",
        warning:
          "Advertencia: Después de salir de esta página o actualizarla, no podrás ver tu frase mnemotécnica. Asegúrate de haberla guardado en un lugar seguro.",
        copy: "Copiar",
        login: "Iniciar sesión",
        copy_success: "La mnemofrase ha sido copiada al portapapeles",
      },
      confirm_dialog: {
        title: "Confirma que estás listo para crear una mnemofrase",
        button: "Generar",
        text: "Tu frase mnemotécnica única está lista para ser mostrada. Ten en cuenta que se mostrará solo una vez. Te recomendamos escribirla o copiarla y guardarla en un lugar seguro. Desafortunadamente, si se pierde, no podremos recuperar esta frase, ni siquiera mediante soporte al cliente. Sin ella, el acceso a tu cuenta será imposible. ¿Estás listo para ver y guardar tu frase mnemotécnica?",
        confirm: "Continuar",
        cancel: "Cancelar",
      },
    },
    auth: {
      title: "Iniciar sesión en la cuenta",
      phrase: "Tu mnemofrase",
      description: "Frase mnemotécnica de 12 palabras",
      login: "Iniciar sesión",
      register: "Registrarse",
      validation_error: "Mnemofrase inválida. Intenta de nuevo.",
    },
    account: {
      subscription: {
        title: "Información de suscripción",
        onetimeTitle: "Información de pago",
        provider: "Proveedor",
        status: "Estado",
        amount: "Monto",
        error: "Error",
        manage: "Gestionar suscripción",
        inactive: "No se encontraron suscripciones activas.",
        pay: "Pagar",
        cancel: "Cancelar suscripción",
        cancel_desc:
          "Para cancelar tu suscripción de VPN, por favor ingresa la dirección de correo electrónico que usaste para el pago:",
        cancel_btn: "Darse de baja",
        cancel_result: "El reembolso será procesado en un plazo de 7 días.",
        hook: {
          successful:
            "El pago de tu suscripción se realizó con éxito. El procesamiento puede tardar unos minutos.",
          failed:
            "El pago de la suscripción falló. Por favor, inténtalo nuevamente o contacta con el soporte al cliente.",
          refresh: "Actualizar",
        },
      },
    },
    status: {
      connection: "Estado de la conexión",
      services: "Estado de los servicios",
      databases: "Estado de la API y las bases de datos",
      check: "Ver detalles del estado",
    },
    dashboard: {
      title: "Conexiones",
      xrayDescription:
        "XRay es adecuado para evitar restricciones en países con censura estricta, como Rusia y China. Proporciona conexiones estables y alta seguridad.",
      shadowsocksDescription:
        "Shadowsocks es un protocolo simple y ligero para países sin restricciones estrictas en Internet. Es más fácil de configurar y usar en comparación con otras herramientas.",
      openInApp: "Abrir en la app",
      copy: "Copiar",
      showQr: "Mostrar QR",
      country: "País",
      config: "Configuración",
      allCountries: "Todos los países",
      status: "Estado",
      traffic_limit: "Tu límite de tráfico",
      used_traffic: "Usado",
      error_message: "Ocurrió un error, por favor recarga la página",
      reload_button: "Recargar",
    },
  },
  components: {
    email: {
      invalid: "Dirección de correo electrónico inválida",
    },
    bash_command: {
      copied: "¡Copiado!",
    },
  },
  not_found: {
    "404": "Página no encontrada",
    "404_sub":
      "Lo sentimos, parece que hemos perdido esta página, pero no queremos perderte a ti.",
    search: "Buscar",
    search_site: "Buscar en el sitio",
  },
} as const
