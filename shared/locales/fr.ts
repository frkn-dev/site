export default {
  header: {
    pricing: "Tarifs",
    connect: "Télécharger",
    help: "Aide",
    login: "Connexion",
    register: "Commencer",
    myId: "Copier mon ID",
    payments: "Paiements",
    logout: "Déconnexion",
  },
  hero: {
    h1: "FRKN — VPN gratuit pour les personnes libres",
    text: "Nous soutenons la liberté d'expression et nous opposons à toutes les formes de censure. Nous développons un VPN décentralisé qui ne collecte ni ne stocke les données des utilisateurs.",
    connect: "Se connecter",
  },
  advantages: {
    no_logs: {
      title: "Aucun journal",
      text: "FRKN garantit une confidentialité totale de votre activité en ligne. Nous ne suivons, ne transmettons ni ne vendons vos informations. Vos données personnelles ne sont pas stockées, et nous n'utilisons pas de cookies. Pour vous connecter, vous avez seulement besoin d'un numéro de compte - sans avoir à entrer de mot de passe, d'e-mail ou de numéro de téléphone.",
    },
    open_source: {
      title: "Code source ouvert",
      text: "FRKN repose sur des principes de code source ouvert, garantissant une transparence totale et une sécurité accrue. Le code source ouvert permet aux experts et au public de participer activement à l'examen et à l'amélioration de notre produit. Cela facilite la détection et la correction rapides des vulnérabilités, offrant une protection fiable de vos données et une utilisation sûre de notre service VPN.",
    },
    speed: {
      title: "Vitesse",
      text: "FRKN vous permet de télécharger de gros fichiers, de regarder des vidéos et de jouer à des jeux en ligne sans restrictions, même avec le plan gratuit.",
    },
    reliability: {
      title: "Fiabilité",
      text: "Masquez votre emplacement à l'aide d'algorithmes de cryptage avancés. FRKN prend en charge les protocoles les plus fiables, tels que WireGuard et XRay, pour garantir une connexion rapide et sécurisée.",
    },
  },
  pricing: {
    free: {
      price: "Gratuit",
      feature_1: "7 régions",
      feature_2: "Support pour tous les OS",
      feature_3: "100 Mo de trafic par jour",
      button: "Se connecter",
    },
    pro: {
      price: "5 $",
      in_month: "par mois",
      feature_1: "Tout dans Gratuit",
      feature_2: "Trafic illimité",
      feature_3: "Support YouTube 4K",
      feature_4: "Torrent téléchargeable",
      button: "Acheter",
      active: "Actif",
    },
    pro_plus: {
      price: "50 $",
      in_year: "par an",
      feature_1: "Tout dans Pro",
      feature_2: "15 % moins cher que Pro",
      button: "Acheter",
      active: "Actif",
    },
    payment_provider_dialog: {
      title: "Fournisseur de paiement",
      description: "Choisissez un fournisseur de paiement",
      stripe: "Payer avec une carte",
      lava_rub: "Cartes en roubles (Banques russes)",
      crypto: "Cryptomonnaies",
      sbp: "Système de Paiement Instantané (SPB)",
      pay: "Payer",
      email_required: "Entrez votre e-mail",
      support: "Contactez notre support sur Telegram",
    },
  },
  newsletter_form: {
    title: "Restez informé",
    description:
      "Recevez des informations sur notre produit par e-mail, nous garantissons l'absence de spam.",
    subscribe: "S'abonner",
    success: "Merci de vous être abonné à notre newsletter !",
  },
  locations: {
    available: "Emplacements disponibles",
    au: "Autriche",
    jp: "Japon",
    nl: "Pays-Bas",
    ru: "Russie",
    ch: "Suisse",
    tr: "Turquie",
    us: "États-Unis",
  },
  footer: {
    contact: "Contact",
    help: "Aide",
    merch: "Produits dérivés",
    privacy: "Politique de confidentialité",
    protocols: "Protocoles",
    setup: "Installation",
    support: "Support",
    status: "Serveurs",
    terms: "Conditions d'utilisation",
    tokenization: "Tokenisation",
  },
  app: {
    installation: {
      ios_android: {
        method1: {
          title: "Méthode 1 : Installation avec QR code",
          step1: "Générer un QR code",
          step2: "Installer l'application WireGuard",
          step3: "Ouvrir l'application WireGuard",
          step4: 'Appuyer sur "+" en haut à droite',
          step5: 'Sélectionner "Créer à partir d\'un QR code"',
          step6: "Scanner le QR code généré sur le site web",
        },
        method2: {
          title: "Méthode 2 : Installation avec fichier de configuration",
          step1: "Installer l'application WireGuard",
          step2: "Télécharger le fichier de configuration depuis le site web",
          step3: "Ouvrir l'application WireGuard",
          step4: 'Appuyer sur "+" en haut à droite',
          step5: 'Sélectionner "Créer à partir d\'un fichier ou archive"',
          step6:
            "Localiser et sélectionner le fichier de configuration téléchargé (extension .conf)",
          step7: "Utiliser l'interrupteur pour activer/désactiver le VPN",
        },
      },
      macos_windows: {
        step1: "Installer l'application WireGuard",
        step2: "Télécharger le fichier de configuration depuis le site web",
        step3: "Ouvrir l'application WireGuard",
        step4: 'Cliquer sur "Importer des tunnels depuis un fichier"',
        step5: "Sélectionner le fichier de configuration téléchargé",
        step6: 'Cliquer sur "Connecter"',
      },
      linux: {
        step1: "Mettre à jour le système :",
        step2: "Installer WireGuard :",
        step3: "Télécharger le fichier de configuration depuis le site web",
        step4: "Déplacer le fichier de configuration :",
        step5: "Gérer la connexion :",
        step5_1: "Se connecter :",
        step5_2: "Vérifier le statut :",
        step5_3: "Se déconnecter :",
        notice:
          'Remarque : Si vous rencontrez l\'erreur "resolvconf : commande introuvable", installez resolvconf :',
      },
      qr: {
        mobile_button: "Configuration et QR code",
        title: "QR code et fichier de configuration",
        description:
          "Sélectionnez un serveur pour générer un QR code et un fichier de configuration",
        choose_server: "Choisir un serveur",
        download: "Télécharger",
      },
      support:
        "En cas de problème d'installation, contactez-nous via le bot Telegram",
    },
    registration: {
      title: "Inscription",
      description: {
        part1:
          "FRKN garantit l'anonymat complet sans collecte de données personnelles. Lors de l'inscription, vous recevrez une phrase mnémonique unique de 12 mots.",
        part2: "Cette phrase est votre seule clé pour accéder à votre compte.",
        part3: "Important :",
        list_item1: "Notez et conservez votre phrase mnémonique en lieu sûr",
        list_item2: "Ne la partagez avec personne",
        list_item3: "Utilisez-la pour vous connecter au système",
        list_item4:
          "Si vous perdez cette phrase, la récupération du compte est impossible",
        part4:
          "Votre sécurité est notre priorité. L'absence de données personnelles garantit votre anonymat, mais nécessite un stockage responsable de la phrase mnémonique.",
        error:
          "Nous n'avons pas pu générer la phrase mnémonique. Veuillez réessayer. Si le problème persiste, contactez notre support.",
        already_registered:
          "Si vous avez déjà une phrase mnémonique, connectez-vous simplement à votre compte.",
      },
      generated: {
        title: "Félicitations !",
        warning:
          "Attention : Après avoir quitté cette page ou actualisé, vous ne pourrez plus voir votre phrase mnémonique. Assurez-vous de l'avoir enregistrée en lieu sûr.",
        copy: "Copier",
        login: "Connexion",
        copy_success: "La phrase mnémonique a été copiée dans le presse-papier",
      },
      confirm_dialog: {
        title: "Confirmez que vous êtes prêt à créer une phrase mnémonique",
        button: "Générer",
        text: "Votre phrase mnémonique unique est prête à être affichée. Veuillez noter qu'elle sera affichée une seule fois. Nous vous recommandons de l'écrire immédiatement ou de la copier et de la stocker en lieu sûr. Malheureusement, si elle est perdue, nous ne pourrons pas la récupérer, même avec l'aide du support client. Sans elle, l'accès à votre compte sera impossible. Êtes-vous prêt à visualiser et enregistrer votre phrase mnémonique ?",
        confirm: "Continuer",
        cancel: "Annuler",
      },
    },
    auth: {
      title: "Connexion au compte",
      phrase: "Votre phrase mnémonique",
      description: "Phrase mnémonique de 12 mots",
      login: "Connexion",
      register: "Inscription",
      validation_error: "Phrase mnémonique invalide. Veuillez réessayer.",
    },
    account: {
      subscription: {
        title: "Informations sur l'abonnement",
        onetimeTitle: "Informations de paiement",
        provider: "Fournisseur",
        status: "Statut",
        amount: "Montant",
        error: "Erreur",
        manage: "Gérer l'abonnement",
        inactive: "Aucun abonnement actif trouvé.",
        pay: "Payer",
        cancel: "Annuler l'abonnement",
        cancel_desc:
          "Pour annuler votre abonnement VPN, veuillez entrer l'adresse e-mail utilisée pour le paiement :",
        cancel_btn: "Se désabonner",
        cancel_result: "Le remboursement sera traité sous 7 jours.",
        hook: {
          successful:
            "Le paiement de votre abonnement a été effectué avec succès. Le traitement peut prendre quelques minutes.",
          failed:
            "Le paiement de l'abonnement a échoué. Veuillez réessayer ou contacter le support.",
          refresh: "Actualiser",
        },
      },
    },
    status: {
      connection: "État de la connexion",
      services: "État des services",
      databases: "État des API et des bases de données",
      check: "Voir les détails de l'état",
    },
    dashboard: {
      title: "Connexions",
      xrayDescription:
        "XRay convient pour contourner les restrictions dans les pays avec une censure stricte, comme la Russie et la Chine. Il offre des connexions stables et une haute sécurité.",
      shadowsocksDescription:
        "Shadowsocks est un protocole simple et léger pour les pays sans restrictions internet strictes. Il est plus facile à configurer et utiliser par rapport à d'autres outils.",
      openInApp: "Ouvrir dans l'application",
      copy: "Copier",
      showQr: "Afficher le QR",
      country: "Pays",
      config: "Configuration",
      allCountries: "Tous les pays",
      status: "Statut",
      traffic_limit: "Votre limite de trafic",
      used_traffic: "Utilisé",
      error_message: "Une erreur est survenue, veuillez recharger la page",
      reload_button: "Recharger",
    },
  },
  components: {
    email: { invalid: "Adresse e-mail invalide" },
    bash_command: { copied: "Copié !" },
  },
  not_found: {
    "404": "Page introuvable",
    "404_sub":
      "Désolé, nous avons perdu cette page, mais nous ne voulons pas vous perdre.",
    search: "Rechercher",
    search_site: "Rechercher sur le site",
  },
} as const
