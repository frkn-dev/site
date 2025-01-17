export default {
  header: {
    pricing: "Preise",
    connect: "Herunterladen",
    help: "Hilfe",
    login: "Anmelden",
    register: "Loslegen",
    myId: "Meine ID kopieren",
    payments: "Zahlungen",
    logout: "Abmelden",
  },
  hero: {
    h1: "FRKN — Kostenloses VPN für freie Menschen",
    text: "Wir unterstützen die Meinungsfreiheit und lehnen jede Form der Zensur ab. Wir entwickeln ein dezentrales VPN, das keine Benutzerdaten sammelt oder speichert.",
    connect: "Verbinden",
  },
  advantages: {
    no_logs: {
      title: "Keine Protokolle",
      text: "FRKN gewährleistet vollständige Vertraulichkeit Ihrer Online-Aktivitäten. Wir verfolgen, übertragen oder verkaufen Ihre Informationen nicht. Ihre persönlichen Daten werden nicht gespeichert, und wir verwenden keine Cookies. Zum Verbinden benötigen Sie nur eine Kontonummer - ohne Passwörter, E-Mail oder Telefonnummer eingeben zu müssen.",
    },
    open_source: {
      title: "Open Source",
      text: "FRKN basiert auf Open-Source-Prinzipien, die vollständige Transparenz und erhöhte Sicherheit gewährleisten. Open-Source-Code ermöglicht es Experten und der Öffentlichkeit, aktiv an der Überprüfung und Verbesserung unseres Produkts teilzunehmen. Dies erleichtert die schnelle Erkennung und Behebung von Schwachstellen und bietet zuverlässigen Schutz Ihrer Daten und eine sichere Nutzung unseres VPN-Dienstes.",
    },
    speed: {
      title: "Geschwindigkeit",
      text: "FRKN ermöglicht es Ihnen, große Dateien herunterzuladen, Videos anzusehen und Online-Spiele ohne Einschränkungen zu spielen, selbst im kostenlosen Plan.",
    },
    reliability: {
      title: "Zuverlässigkeit",
      text: "Verbergen Sie Ihren Standort mit fortschrittlichen Verschlüsselungsalgorithmen. FRKN unterstützt die zuverlässigsten Protokolle wie WireGuard und XRay, um die schnellste und sicherste Verbindung zu gewährleisten.",
    },
  },
  pricing: {
    free: {
      price: "Kostenlos",
      feature_1: "7 Regionen",
      feature_2: "Unterstützung für alle Betriebssysteme",
      feature_3: "100 MB Datenverkehr pro Tag",
      button: "Verbinden",
    },
    pro: {
      price: "5 $",
      in_month: "pro Monat",
      feature_1: "Alles im Kostenlosen",
      feature_2: "Unbegrenzter Datenverkehr",
      feature_3: "YouTube 4K-Unterstützung",
      feature_4: "Torrents herunterladen möglich",
      button: "Kaufen",
      active: "Aktiv",
    },
    pro_plus: {
      price: "50 $",
      in_year: "pro Jahr",
      feature_1: "Alles im Pro",
      feature_2: "15% günstiger als Pro",
      button: "Kaufen",
      active: "Aktiv",
    },
    payment_provider_dialog: {
      title: "Zahlungsanbieter",
      description: "Wählen Sie einen Zahlungsanbieter",
      stripe: "Mit Karte bezahlen",
      lava_rub: "Rubelkarten (Russische Banken)",
      crypto: "Kryptowährungen",
      sbp: "Das Schnellzahlungssystem (SBP)",
      pay: "Bezahlen",
      email_required: "Geben Sie Ihre E-Mail ein",
      support: "Kontaktieren Sie unser Support-Team auf Telegram",
    },
  },
  newsletter_form: {
    title: "Bleiben Sie verbunden",
    description:
      "Erhalten Sie Informationen über unser Produkt per E-Mail, wir garantieren keinen Spam.",
    subscribe: "Abonnieren",
    success: "Vielen Dank für Ihr Abonnement!",
  },
  locations: {
    available: "Verfügbare Standorte",
    au: "Österreich",
    jp: "Japan",
    nl: "Niederlande",
    ru: "Russland",
    ch: "Schweiz",
    tr: "Türkei",
    us: "Vereinigte Staaten",
  },
  footer: {
    contact: "Kontakt",
    help: "Hilfe",
    merch: "Merch",
    privacy: "Datenschutzrichtlinie",
    protocols: "Protokolle",
    setup: "Einrichtung",
    support: "Support",
    status: "Server",
    terms: "Nutzungsbedingungen",
    tokenization: "Tokenisierung",
  },
  app: {
    installation: {
      ios_android: {
        method1: {
          title: "Methode 1: Installation mit QR-Code",
          step1: "QR-Code generieren",
          step2: "WireGuard-App installieren",
          step3: "WireGuard-App öffnen",
          step4: 'Tippen Sie auf "+" in der oberen rechten Ecke',
          step5: 'Wählen Sie "Aus QR-Code erstellen"',
          step6: "Scannen Sie den auf der Website generierten QR-Code",
        },
        method2: {
          title: "Methode 2: Installation aus Konfigurationsdatei",
          step1: "WireGuard-App installieren",
          step2: "Laden Sie die Konfigurationsdatei von der Website herunter",
          step3: "WireGuard-App öffnen",
          step4: 'Tippen Sie auf "+" in der oberen rechten Ecke',
          step5: 'Wählen Sie "Aus Datei oder Archiv erstellen"',
          step6:
            "Suchen und wählen Sie die heruntergeladene Konfigurationsdatei (mit .conf-Erweiterung)",
          step7: "Verwenden Sie den Kippschalter, um VPN ein-/auszuschalten",
        },
      },
      macos_windows: {
        step1: "WireGuard-Anwendung installieren",
        step2: "Laden Sie die Konfigurationsdatei von der Website herunter",
        step3: "WireGuard-Anwendung öffnen",
        step4: 'Klicken Sie auf "Tunnel aus Datei importieren"',
        step5: "Wählen Sie die heruntergeladene Konfigurationsdatei",
        step6: 'Klicken Sie auf "Verbinden"',
      },
      linux: {
        step1: "System aktualisieren:",
        step2: "WireGuard installieren:",
        step3: "Laden Sie die Konfigurationsdatei von der Website herunter",
        step4: "Verschieben Sie die Konfigurationsdatei:",
        step5: "Verbindung verwalten:",
        step5_1: "Verbinden:",
        step5_2: "Status überprüfen:",
        step5_3: "Trennen:",
        notice:
          'Hinweis: Wenn Sie den Fehler "resolvconf: Befehl nicht gefunden" erhalten, installieren Sie resolvconf:',
      },
      qr: {
        mobile_button: "Konfiguration und QR-Code",
        title: "QR-Code und Konfigurationsdatei",
        description:
          "Wählen Sie einen Server, um einen QR-Code und eine Konfigurationsdatei zu generieren",
        choose_server: "Server auswählen",
        download: "Herunterladen",
      },
      support:
        "Wenn Sie Probleme bei der Installation haben, schreiben Sie uns bitte im Telegram-Bot",
    },
    registration: {
      title: "Registrierung",
      description: {
        part1:
          "FRKN gewährleistet vollständige Anonymität, ohne persönliche Daten zu sammeln. Bei der Registrierung erhalten Sie eine einzigartige 12-Wort-Mnemonik-Phrase.",
        part2:
          "Diese Phrase ist Ihr einziger Schlüssel zum Zugriff auf Ihr Konto.",
        part3: "Wichtig:",
        list_item1:
          "Schreiben Sie Ihre Mnemonik-Phrase auf und bewahren Sie sie sicher auf",
        list_item2: "Teilen Sie sie niemandem mit",
        list_item3: "Verwenden Sie sie, um sich im System anzumelden",
        list_item4:
          "Wenn Sie die Phrase verlieren, ist eine Kontowiederherstellung unmöglich",
        part4:
          "Ihre Sicherheit hat für uns oberste Priorität. Das Fehlen persönlicher Daten garantiert Ihre Anonymität, erfordert jedoch eine verantwortungsvolle Aufbewahrung der Mnemonik-Phrase.",
        error:
          "Leider konnten wir die Mnemonik-Phrase nicht generieren. Bitte versuchen Sie es erneut. Wenn das Problem weiterhin besteht, kontaktieren Sie unser Support-Team.",
        already_registered:
          "Wenn Sie bereits eine Mnemonik-Phrase haben, melden Sie sich einfach in Ihrem Konto an",
      },
      generated: {
        title: "Herzlichen Glückwunsch!",
        warning:
          "Warnung: Nach dem Verlassen dieser Seite oder dem Aktualisieren können Sie Ihre Mnemonik-Phrase nicht mehr sehen. Stellen Sie sicher, dass Sie sie an einem sicheren Ort gespeichert haben.",
        copy: "Kopieren",
        login: "Anmelden",
        copy_success: "Die Mnemonik-Phrase wurde in die Zwischenablage kopiert",
      },
      confirm_dialog: {
        title:
          "Bestätigen Sie, dass Sie bereit sind, eine Mnemonik-Phrase zu erstellen",
        button: "Generieren",
        text: "Ihre einzigartige Mnemonik-Phrase ist bereit zur Anzeige. Bitte beachten Sie, dass sie nur einmal angezeigt wird. Wir empfehlen, die Phrase sofort aufzuschreiben oder zu kopieren und an einem sicheren Ort aufzubewahren. Leider können wir diese Phrase nicht wiederherstellen, selbst durch den Kundensupport. Ohne sie ist der Zugriff auf Ihr Konto unmöglich. Sind Sie bereit, Ihre Mnemonik-Phrase anzuzeigen und zu speichern?",
        confirm: "Fortfahren",
        cancel: "Abbrechen",
      },
    },
    auth: {
      title: "In Konto einloggen",
      phrase: "Ihre Mnemonik-Phrase",
      description: "12-Wort-Mnemonik-Phrase",
      login: "Anmelden",
      register: "Registrieren",
      validation_error:
        "Ungültige Mnemonik-Phrase. Bitte versuchen Sie es erneut.",
    },
    account: {
      subscription: {
        title: "Abonnementinformationen",
        onetimeTitle: "Zahlungsinformationen",
        provider: "Anbieter",
        status: "Status",
        amount: "Betrag",
        error: "Fehler",
        manage: "Abonnement verwalten",
        inactive: "Aktive Abonnements nicht gefunden.",
        pay: "Bezahlen",
        cancel: "Abonnement kündigen",
        cancel_desc:
          "Um Ihr VPN-Abonnement zu kündigen, geben Sie bitte die E-Mail-Adresse ein, die Sie für die Zahlung verwendet haben:",
        cancel_btn: "Abmelden",
        cancel_result:
          "Die Rückerstattung wird innerhalb von 7 Tagen bearbeitet.",
        hook: {
          successful:
            "Ihre Abonnementzahlung war erfolgreich. Die Verarbeitung kann einige Minuten dauern.",
          failed:
            "Die Abonnementzahlung ist fehlgeschlagen. Bitte versuchen Sie es erneut oder kontaktieren Sie den Kundensupport.",
          refresh: "Aktualisieren",
        },
      },
    },
    status: {
      connection: "Verbindungsstatus",
      services: "Dienststatus",
      databases: "API- und Datenbankstatus",
      check: "Statusdetails anzeigen",
    },
    dashboard: {
      title: "Verbindungen",
      xrayDescription:
        "XRay eignet sich zum Umgehen von Einschränkungen in Ländern mit strenger Zensur, wie Russland und China. Es bietet stabile Verbindungen und hohe Sicherheit.",
      shadowsocksDescription:
        "Shadowsocks ist ein einfaches und leichtes Protokoll für Länder ohne strenge Internetbeschränkungen. Es ist einfacher einzurichten und zu verwenden als andere Tools.",
      openInApp: "In App öffnen",
      copy: "Kopieren",
      showQr: "QR anzeigen",
      country: "Land",
      config: "Konfiguration",
      allCountries: "Alle Länder",
      status: "Status",
      traffic_limit: "Ihr Datenverkehrslimit",
      used_traffic: "Verwendet",
      error_message:
        "Ein Fehler ist aufgetreten, bitte laden Sie die Seite neu",
      reload_button: "Neu laden",
    },
  },
  components: {
    email: {
      invalid: "Ungültige E-Mail-Adresse",
    },
    bash_command: {
      copied: "Kopiert!",
    },
  },
  not_found: {
    "404": "Seite nicht gefunden",
    "404_sub":
      "Es tut uns leid, wir scheinen diese Seite verloren zu haben, aber wir möchten Sie nicht verlieren.",
    search: "Suche",
    search_site: "Website durchsuchen",
  },
} as const
