
export default {
  meta: {
    description: "FRKN — VPN rápido y gratuito con soporte para el protocolo XRay",
  },
  header: {
    pricing: "Precios",
    connect: "Descargar",
    help: "Ayuda",
    login: "Iniciar sesión",
    register: "Comenzar",
    logout: "Cerrar sesión",
  },
  hero: {
    h1: "FRKN — VPN Gratis para Gente Libre",
    text: "Apoyamos la libertad de expresión y nos oponemos a todas las formas de censura. Estamos desarrollando un VPN descentralizado que no recopila ni almacena datos de los usuarios.",
    connect: "Conectar",
  },
  advantages: {
    no_logs: {
      title: "Sin registros",
      text: "FRKN garantiza la total confidencialidad de tu actividad en línea. No rastreamos, transmitimos ni vendemos tu información. Tus datos personales no se almacenan y no usamos cookies. Para conectarte, solo necesitas un número de cuenta, sin necesidad de ingresar contraseñas, correo electrónico o número de teléfono.",
    },
    open_source: {
      title: "Código abierto",
      text: "FRKN se basa en principios de código abierto, lo que garantiza total transparencia y mejora la seguridad. El código abierto permite que expertos y el público participen activamente en la revisión y mejora de nuestro producto. Esto facilita la detección y corrección rápida de vulnerabilidades, proporcionando una protección confiable de tus datos y un uso seguro de nuestro servicio VPN.",
    },
    speed: {
      title: "Velocidad",
      text: "FRKN te permite descargar archivos grandes, ver videos y jugar en línea sin restricciones, incluso dentro del plan gratuito.",
    },
    reliability: {
      title: "Fiabilidad",
      text: "Oculta tu ubicación utilizando avanzados algoritmos de cifrado. FRKN soporta los protocolos más confiables, como WireGuard y XRay, para garantizar la conexión más rápida y segura posible.",
    },
  },
  pricing: {
    free: {
      price: "Gratis",
      feature_1: "Gratis para siempre",
      feature_2: "4 regiones",
      feature_3: "Protocolo WireGuard",
      feature_4: "Compatible con todos los sistemas operativos",
      button: "Conectar",
    },
    pro: {
      in_month: "por mes",
      feature_1: "Todo en el plan Gratis",
      feature_2: "Protocolo XRay",
      button: "Comprar",
    },
  },
  newsletter_form: {
    title: "Mantente conectado",
    description:
      "Recibe información sobre nuestro producto en tu correo, garantizamos que no enviamos spam.",
    subscribe: "Suscribirse",
    invalid: "Dirección de correo electrónico inválida",
    success: "¡Gracias por suscribirte a nuestro boletín!",
  },
  footer: {
    support: "Soporte",
    contact: "Contacto",
    merch: "Merchandising",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
  },
  app: {
    installation: {
      ios_android: {
        method1: {
          title: "Método 1: Instalación usando código QR",
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
          step7: "Usa el interruptor para activar/desactivar el VPN",
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
        step5_2: "Verificar estado:",
        step5_3: "Desconectar:",
        notice:
          'Nota: Si encuentras el error "resolvconf: comando no encontrado", instala resolvconf:',
      },
      qr: {
        mobile_button: "Config. y código QR",
        title: "Código QR y archivo de configuración",
        description:
          "Selecciona un servidor para generar un código QR y archivo de configuración",
        choose_server: "Selecciona un servidor",
        download: "Descargar",
      },
      support:
        "Si tienes algún problema con la instalación, por favor escríbenos en el bot de Telegram",
    },
    registration: {
      title: "Registro",
      description: {
        part1:
          "FRKN garantiza total anonimato sin recopilar ningún dato personal. Al registrarte, se te proporcionará una frase mnemotécnica única de 12 palabras.",
        part2: "Esta frase es tu única clave para acceder a tu cuenta.",
        part3: "Importante:",
        list_item1: "Escribe y guarda tu frase mnemotécnica de forma segura",
        list_item2: "No la compartas con nadie",
        list_item3: "Úsala para iniciar sesión en el sistema",
        list_item4: "Si pierdes la frase, la recuperación de la cuenta es imposible",
        part4:
          "Tu seguridad es nuestra prioridad. La ausencia de datos personales garantiza tu anonimato, pero requiere un almacenamiento responsable de la frase mnemotécnica.",
        error:
          "Desafortunadamente, no pudimos generar la frase mnemotécnica. Por favor, inténtalo de nuevo. Si el problema persiste, contacta a nuestro equipo de soporte.",
        already_registered:
          "Si ya tienes una frase mnemotécnica, solo inicia sesión en tu cuenta",
      },
      generated: {
        title: "¡Felicitaciones!",
        warning:
          "Advertencia: Después de salir de esta página o actualizarla, no podrás volver a ver tu frase mnemotécnica. Asegúrate de haberla guardado en un lugar seguro.",
        copy: "Copiar",
        login: "Iniciar sesión",
        copy_success: "La frase mnemotécnica se ha copiado al portapapeles",
      },
      confirm_dialog: {
        title: "Confirma que estás listo para crear una frase mnemotécnica",
        button: "Generar",
        text: "Tu frase mnemotécnica única está lista para ser mostrada. Ten en cuenta que solo se mostrará una vez. Recomendamos escribir o copiar la frase inmediatamente y guardarla en un lugar seguro. Desafortunadamente, si se pierde, no podremos recuperar esta frase, ni siquiera a través del soporte al cliente. Sin ella, será imposible acceder a tu cuenta. ¿Estás listo para ver y guardar tu frase mnemotécnica?",
        confirm: "Continuar",
        cancel: "Cancelar",
      },
    },
    auth: {
      title: "Iniciar sesión en la cuenta",
      phrase: "Tu frase mnemotécnica",
      description: "Frase mnemotécnica de 12 palabras",
      login: "Iniciar sesión",
      register: "Registrarse",
      validation_error: "Frase mnemotécnica inválida. Por favor, inténtalo de nuevo.",
    },
  },
  components: {
    bash_command: {
      copied: "¡Copiado!",
    },
  },
} as const
