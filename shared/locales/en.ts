export default {
  header: {
    pricing: "Pricing",
    connect: "Download",
    help: "Help",
    login: "Login",
    register: "Get Started",
    myId: "Copy my ID",
    payments: "Payments",
    logout: "Log out",
  },
  hero: {
    h1: "FRKN — Free VPN for Free people",
    text: "We support freedom of speech and oppose all forms of censorship. We are developing a decentralized VPN that does not collect or store user data.",
    connect: "Connect",
  },
  advantages: {
    no_logs: {
      title: "No logs",
      text: "FRKN ensures complete confidentiality of your online activity. We do not track, transmit, or sell your information. Your personal data is not stored, and we do not use cookies. To connect, you only need an account number - without the need to enter passwords, email, or phone number.",
    },
    open_source: {
      title: "Open source",
      text: "FRKN is based on open source principles, ensuring complete transparency and enhancing security. Open source code allows experts and the public to actively participate in reviewing and improving our product. This facilitates prompt detection and correction of vulnerabilities, providing reliable protection of your data and safe use of our VPN service.",
    },
    speed: {
      title: "Speed",
      text: "FRKN allows you to download large files, watch videos, and play online games without restrictions, even within the free plan.",
    },
    reliability: {
      title: "Reliability",
      text: "Hide your location using advanced encryption algorithms. FRKN supports the most reliable protocols, such as WireGuard and XRay, to ensure the fastest and most secure connection possible.",
    },
  },
  pricing: {
    free: {
      price: "Free",
      feature_1: "7 regions",
      feature_2: "Support for all OS",
      feature_3: "100 MB of traffic per day",
      button: "Connect",
    },
    pro: {
      price: "$5",
      in_month: "per month",
      feature_1: "Everything in Free",
      feature_2: "Unlimited traffic",
      button: "Buy",
      active: "Active",
    },
    pro_plus: {
      price: "$50",
      in_year: "per year",
      feature_1: "Everything in Pro",
      feature_2: "15% cheaper than Pro",
      button: "Buy",
      active: "Active",
    },
    payment_provider_dialog: {
      title: "Payment provider",
      description: "Choose a payment provider",
      stripe: "Pay with Card",
      lava_rub: "Ruble Cards (Russian Banks)",
      crypto: "Cryptocurrencies",
      sbp: "The Faster Payments System (SBP)",
      pay: "Pay",
      email_required: "Enter your e-mail",
      support: "Contact our support team on Telegram",
    },
  },
  newsletter_form: {
    title: "Stay connected",
    description:
      "Receive information about our product to your email, we guarantee no spam.",
    subscribe: "Subscribe",
    success: "Thank you for subscribing to our newsletter!",
  },
  footer: {
    contact: "Contact",
    help: "Help",
    merch: "Merch",
    privacy: "Privacy Policy",
    protocols: "Protocols",
    support: "Support",
    status: "Servers",
    terms: "Terms of Service",
  },
  app: {
    installation: {
      ios_android: {
        method1: {
          title: "Method 1: Installation using QR code",
          step1: "Generate a QR code",
          step2: "Install the WireGuard app",
          step3: "Open the WireGuard app",
          step4: 'Tap "+" in the upper right corner',
          step5: 'Select "Create from QR code"',
          step6: "Scan the QR code generated on the website",
        },
        method2: {
          title: "Method 2: Installation from configuration file",
          step1: "Install the WireGuard app",
          step2: "Download the configuration file from the website",
          step3: "Open the WireGuard app",
          step4: 'Tap "+" in the upper right corner',
          step5: 'Select "Create from file or archive"',
          step6:
            "Locate and select the downloaded configuration file (with .conf extension)",
          step7: "Use the toggle switch to turn VPN on/off",
        },
      },
      macos_windows: {
        step1: "Install the WireGuard application",
        step2: "Download the configuration file from the website",
        step3: "Open the WireGuard application",
        step4: 'Click "Import tunnels from file"',
        step5: "Select the downloaded configuration file",
        step6: 'Click "Connect"',
      },
      linux: {
        step1: "Update the system:",
        step2: "Install WireGuard:",
        step3: "Download the configuration file from the website",
        step4: "Move the configuration file:",
        step5: "Managing the connection:",
        step5_1: "Connect:",
        step5_2: "Check status:",
        step5_3: "Disconnect:",
        notice:
          'Note: If you encounter the error "resolvconf: command not found", install resolvconf:',
      },
      qr: {
        mobile_button: "Config and QR code",
        title: "QR code and configuration file",
        description:
          "Select a server to generate a QR code and configuration file",
        choose_server: "Choose a server",
        download: "Download",
      },
      support:
        "If you have any problems with the installation, please write to us in the Telegram bot",
    },
    registration: {
      title: "Registration",
      description: {
        part1:
          "FRKN ensures complete anonymity without collecting any personal data. Upon registration, you will be provided with a unique 12-word mnemonic phrase.",
        part2: "This phrase is your only key to access your account.",
        part3: "Important:",
        list_item1: "Write down and securely store your mnemonic phrase",
        list_item2: "Do not share it with anyone",
        list_item3: "Use it to log into the system",
        list_item4: "If you lose the phrase, account recovery is impossible",
        part4:
          "Your security is our priority. The absence of personal data guarantees your anonymity but requires responsible storage of the mnemonic phrase.",
        error:
          "Unfortunately, we couldn't generate the mnemonic phrase. Please try again. If the problem persists, contact our support team.",
        already_registered:
          "If you already have a mnemophrase, just log in to your account",
      },
      generated: {
        title: "Congratulations!",
        warning:
          "Warning: After leaving this page or refreshing, you will no longer be able to see your mnemonic phrase. Make sure you have saved it in a secure location.",
        copy: "Copy",
        login: "Login",
        copy_success: "The mnemophrase is copied to the clipboard",
      },
      confirm_dialog: {
        title: "Confirm that you are ready to create a mnemophrase",
        button: "Generate",
        text: "Your unique mnemonic phrase is ready to be displayed. Please note that it will be shown only once. We recommend immediately writing down or copying the phrase and storing it in a secure place. Unfortunately, if lost, we won't be able to recover this phrase, even through customer support. Without it, access to your account will be impossible. Are you ready to view and save your mnemonic phrase?",
        confirm: "Continue",
        cancel: "Cancel",
      },
    },
    auth: {
      title: "Login into account",
      phrase: "Your mnemophrase",
      description: "12-word mnemonic phrase",
      login: "Login",
      register: "Register",
      validation_error: "Invalid mnemophrase. Please try again.",
    },
    account: {
      subscription: {
        title: "Subscription information",
        onetimeTitle: "Payment Information",
        provider: "Provider",
        status: "Status",
        amount: "Amount",
        error: "Error",
        manage: "Manage subscription",
        inactive: "Active subscriptions not found.",
        pay: "Pay",
        cancel: "Cancel Subscription",
        cancel_desc:
          "To cancel your VPN subscription, please enter the email address you used for payment:",
        cancel_btn: "Unsubscribe",
        cancel_result: "The refund will be processed within 7 days.",
        hook: {
          successful:
            "Your subscription payment was successful. Processing may take a few minutes.",
          failed:
            "The subscription payment failed. Please try again or contact customer support.",
          refresh: "Refresh",
        },
      },
    },
    connect: {
      table: {
        title: "Connections",
        protocol: "Protocol",
        country: "Country",
        traffic: "Traffic",
        limit: "Limit",
        configuration: "Configuration",
        qr: "QR Code",
        all: "All countries",
        premium:
          "To increase the current limits, please visit the Pricing page or contact our support team:",
      },
    },
    status: {
      connection: "Connection status",
      services: "Services status",
      databases: "API and databases status",
      check: "View status details",
    },
  },
  components: {
    email: {
      invalid: "Invalid email address",
    },
    bash_command: {
      copied: "Copied!",
    },
  },
} as const
