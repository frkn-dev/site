export default {
  header: {
    pricing: "Preços",
    connect: "Download",
    help: "Ajuda",
    login: "Login",
    register: "Começar",
    myId: "Copiar minha ID",
    payments: "Pagamentos",
    logout: "Sair",
  },
  hero: {
    h1: "FRKN — VPN gratuito para pessoas livres",
    text: "Apoiamos a liberdade de expressão e nos opomos a todas as formas de censura. Estamos desenvolvendo uma VPN descentralizada que não coleta nem armazena dados do usuário.",
    connect: "Conectar",
  },
  advantages: {
    no_logs: {
      title: "Sem registros",
      text: "A FRKN garante total confidencialidade de sua atividade online. Não rastreamos, transmitimos ou vendemos suas informações. Seus dados pessoais não são armazenados e não usamos cookies. Para se conectar, você só precisa de um número de conta - sem a necessidade de inserir senhas, e-mail ou número de telefone.",
    },
    open_source: {
      title: "Código aberto",
      text: "O FRKN é baseado em princípios de código aberto, garantindo total transparência e aumentando a segurança. O código aberto permite que especialistas e o público participem ativamente da revisão e melhoria do nosso produto. Isso facilita a detecção e correção rápidas de vulnerabilidades, fornecendo proteção confiável dos seus dados e uso seguro do nosso serviço VPN.",
    },
    speed: {
      title: "Velocidade",
      text: "O FRKN permite que você baixe arquivos grandes, assista a vídeos e jogue jogos online sem restrições, mesmo dentro do plano gratuito.",
    },
    reliability: {
      title: "Confiabilidade",
      text: "Oculte sua localização usando algoritmos avançados de criptografia. O FRKN suporta os protocolos mais confiáveis, como WireGuard e XRay, para garantir a conexão mais rápida e segura possível.",
    },
  },
  pricing: {
    free: {
      price: "Grátis",
      feature_1: "7 regiões",
      feature_2: "Suporte para todos os sistemas operacionais",
      feature_3: "100 MB de tráfego por dia",
      button: "Conectar",
    },
    pro: {
      price: "$5",
      in_month: "por mês",
      feature_1: "Tudo em Grátis",
      feature_2: "Tráfego ilimitado",
      feature_3: "Suporte ao YouTube 4K",
      feature_4: "Você pode baixar torrents",
      button: "Comprar",
      active: "Ativo",
    },
    pro_plus: {
      price: "$50",
      in_year: "por ano",
      feature_1: "Tudo em Pro",
      feature_2: "15% mais barato que Pro",
      button: "Comprar",
      active: "Ativo",
    },
    payment_provider_dialog: {
      title: "Provedor de pagamento",
      description: "Escolha um provedor de pagamento",
      stripe: "Pague com cartão",
      lava_rub: "Cartões de rublo (bancos russos)",
      crypto: "Criptomoedas",
      sbp: "O Sistema de Pagamentos Mais Rápidos (SBP)",
      pay: "Pagar",
      email_required: "Digite seu e-mail",
      support: "Entre em contato com nossa equipe de suporte no Telegram",
    },
  },
  newsletter_form: {
    title: "Fique conectado",
    description:
      "Receba informações sobre nosso produto em seu e-mail, garantimos que não haverá spam.",
    subscribe: "Inscreva-se",
    success: "Obrigado por assinar nossa newsletter!",
  },
  locations: {
    available: "Locais disponíveis",
    au: "Áustria",
    jp: "Japão",
    nl: "Holanda",
    ru: "Rússia",
    ch: "Suíça",
    tr: "Turquia",
    us: "Estados Unidos",
  },
  footer: {
    contact: "Contato",
    help: "Ajuda",
    merch: "Mercadoria",
    privacy: "Política de Privacidade",
    protocols: "Protocolos",
    setup: "Configuração",
    support: "Suporte",
    status: "Servidores",
    terms: "Termos de Serviço",
    tokenization: "Tokenização",
  },
  app: {
    installation: {
      ios_android: {
        method1: {
          title: "Método 1: Instalação usando código QR",
          step1: "Gerar um código QR",
          step2: "Instalar o aplicativo WireGuard",
          step3: "Abrir o aplicativo WireGuard",
          step4: 'Toque em "+" no canto superior direito',
          step5: 'Selecione "Criar a partir do código QR"',
          step6: "Escaneie o código QR gerado no site",
        },
        method2: {
          title: "Método 2: Instalação do arquivo de configuração",
          step1: "Instale o aplicativo WireGuard",
          step2: "Baixe o arquivo de configuração do site",
          step3: "Abra o aplicativo WireGuard",
          step4: 'Toque em "+" no canto superior direito',
          step5: 'Selecione "Criar do arquivo ou arquivo morto"',
          step6:
            "Localize e selecione o arquivo de configuração baixado (com extensão .conf)",
          step7: "Use o botão de alternância para ligar/desligar a VPN",
        },
      },
      macos_windows: {
        step1: "Instale o aplicativo WireGuard",
        step2: "Baixe o arquivo de configuração do site",
        step3: "Abra o aplicativo WireGuard",
        step4: 'Clique em "Importar túneis do arquivo"',
        step5: "Selecione o arquivo de configuração baixado",
        step6: 'Clique em "Conectar"',
      },
      linux: {
        step1: "Atualize o sistema:",
        step2: "Instalar WireGuard:",
        step3: "Baixar o arquivo de configuração do site",
        step4: "Mover o arquivo de configuração:",
        step5: "Gerenciando a conexão:",
        step5_1: "Conectar:",
        step5_2: "Verificar status:",
        step5_3: "Desconectar:",
        notice:
          'Observação: se você encontrar o erro "resolvconf: comando não encontrado", instale o resolvconf:',
      },
      qr: {
        mobile_button: "Config e código QR",
        title: "Código QR e arquivo de configuração",
        description:
          "Selecione um servidor para gerar um código QR e arquivo de configuração",
        choose_server: "Escolha um servidor",
        download: "Baixar",
      },
      support:
        "Se você tiver algum problema com a instalação, escreva para nós no bot do Telegram",
    },
    registration: {
      title: "Registro",
      description: {
        part1:
          "A FRKN garante anonimato completo sem coletar nenhum dado pessoal. Após o registro, você receberá uma frase mnemônica exclusiva de 12 palavras.",
        part2: "Esta frase é sua única chave para acessar sua conta.",
        part3: "Importante:",
        list_item1: "Anote e armazene com segurança sua frase mnemônica",
        list_item2: "Não compartilhe com ninguém",
        list_item3: "Use-a para fazer login no sistema",
        list_item4:
          "Se você perder a frase, a recuperação da conta será impossível",
        part4:
          "Sua segurança é nossa prioridade. A ausência de dados pessoais garante seu anonimato, mas requer o armazenamento responsável da frase mnemônica.",
        error:
          "Infelizmente, não conseguimos gerar a frase mnemônica. Tente novamente. Se o problema persistir, entre em contato com nossa equipe de suporte.",
        already_registered:
          "Se você já tem uma mnemofrase, basta fazer login na sua conta",
      },
      generated: {
        title: "Parabéns!",
        warning:
          "Aviso: após sair desta página ou atualizar, você não poderá mais ver sua frase mnemônica. Certifique-se de tê-la salvo em um local seguro.",
        copy: "Copiar",
        login: "Fazer login",
        copy_success: "A mnemofrase foi copiada para a área de transferência",
      },
      confirm_dialog: {
        title: "Confirme que você está pronto para criar uma mnemofrase",
        button: "Gerar",
        text: "Sua frase mnemônica exclusiva está pronta para ser exibida. Observe que ela será exibida apenas uma vez. Recomendamos anotar ou copiar a frase imediatamente e armazená-la em um local seguro. Infelizmente, se perdida, não poderemos recuperar esta frase, mesmo por meio do suporte ao cliente. Sem ele, o acesso à sua conta será impossível. Você está pronto para visualizar e salvar sua frase mnemônica?",
        confirm: "Continuar",
        cancel: "Cancelar",
      },
    },
    auth: {
      title: "Entrar na conta",
      phrase: "Sua mnemônica",
      description: "Frase mnemônica de 12 palavras",
      login: "Entrar",
      register: "Registrar",
      validation_error: "Mnemônica inválida. Tente novamente.",
    },
    account: {
      subscription: {
        title: "Informações da assinatura",
        onetimeTitle: "Informações de pagamento",
        provider: "Provedor",
        status: "Status",
        amount: "Valor",
        error: "Erro",
        manage: "Gerenciar assinatura",
        inactive: "Assinaturas ativas não encontradas.",
        pay: "Pagar",
        cancel: "Cancelar assinatura",
        cancel_desc:
          "Para cancelar sua assinatura VPN, insira o endereço de e-mail usado para pagamento:",
        cancel_btn: "Cancelar assinatura",
        cancel_result: "O reembolso será processado em até 7 dias.",
        hook: {
          successful:
            "O pagamento da sua assinatura foi bem-sucedido. O processamento pode levar alguns minutos.",
          failed:
            "O pagamento da assinatura falhou. Tente novamente ou entre em contato com o suporte ao cliente.",
          refresh: "Atualizar",
        },
      },
    },
    status: {
      connection: "Status da conexão",
      services: "Status dos serviços",
      databases: "Status da API e dos bancos de dados",
      check: "Exibir detalhes do status",
    },
    dashboard: {
      title: "Conexões",
      xrayDescription:
        "O XRay é adequado para contornar restrições em países com censura rigorosa, como Rússia e China. Ele fornece conexões estáveis ​​e alta segurança.",
      shadowsocksDescription:
        "O Shadowsocks é um protocolo simples e leve para países sem restrições rigorosas de internet. É mais fácil de configurar e usar em comparação com outras ferramentas.",
      openInApp: "Abrir no aplicativo",
      copy: "Copiar",
      showQr: "Mostrar QR",
      country: "País",
      config: "Config",
      allCountries: "Todos os países",
      status: "Status",
      traffic_limit: "Seu limite de tráfego",
      used_traffic: "Usado",
      error_message: "Ocorreu um erro, recarregue a página",
      reload_button: "Recarregar",
    },
  },
  components: {
    email: {
      invalid: "Endereço de e-mail inválido",
    },
    bash_command: {
      duplicate: "Copiado!",
    },
  },
  not_found: {
    "404": "Página não encontrada",
    "404_sub":
      "Lamentamos, parece que perdemos esta página, mas não queremos perder você.",
    search: "Pesquisar",
    search_site: "Pesquisar no site",
  },
  product: {
    meta: {
      title: "FRKN Box — VPN inteligente para sua casa",
      description:
        "Roteador VPN seguro e confiável para proteger todos os dispositivos em sua rede",
    },
    hero: {
      line1: "Wi-Fi",
      line2: "seguro com VPN",
      line3: "Renda passiva",
    },
    trust: {
      description:
        "Um roteador inteligente baseado em Raspberry que fornece internet anônima e segura, e ganha dinheiro para você em seu tempo livre.",
    },
    features: {
      cpu: "1,5 GHz",
      cpu_description: "Processador ARM v8 com frequência de 1,5 GHz",
      ram: "4 GB",
      ram_description: "RAM LPDDR4",
      ethernet: "1 Gbit",
      ethernet_description: "Ethernet para conexão estável",
      wifi_support: "Suporte Wi-Fi",
      wifi_frequency: "2,4 / 5 GHz",
      aluminum_heatsink: "Dissipador de alumínio",
      heatsink_description: "para resfriamento silencioso",
      optimized_software: "Software otimizado",
      software_description: "com atualizações automáticas",
    },
    specs: {
      title: "Criptografia de Hardware",
      module:
        "O FRKN VPN Node é equipado com um módulo TPM 2.0 (Trusted Platform Module) que fornece criptografia criptográfica profunda em nível de hardware.",
      description:
        "A solução protege chaves e dados contra invasões, utilizando armazenamento de hardware para criptografar o tráfego VPN. Mesmo em caso de comprometimento do dispositivo, o sistema permanece resistente a ataques, mantendo a segurança dos dados.",
    },
    extensible: {
      title: "Renda com Compartilhamento de Internet",
      description:
        "FRKN VPN oferece proteção completa do tráfego sem registros e rastreamento, e ajuda a contornar bloqueios em regiões censuradas. Além da segurança, o dispositivo permite que você ganhe: você pode receber mais de $10 por mês e tokens por compartilhar a internet, e os primeiros usuários têm a chance de um airdrop.",
      settings:
        "<br />A configuração leva apenas 5 minutos — basta conectar a energia e a internet, e todo o resto já está configurado.",
      cta: "Comprar",
    },
    get: {
      headerTop: "Participe da Venda de Nodes",
      headerBottom: "obtenha condições especiais",
      description:
        "Nosso token será lançado em maio de 2025, e os primeiros participantes poderão receber um AirDrop. A distribuição de nodes começará no verão de 2025, para que todos os proprietários possam se conectar imediatamente à rede e começar a ganhar.",
    },
  },
} as const
