export default {
  meta: {
    description: "FRKN — fast, free VPN with XRay protocol support",
  },
  header: {
    pricing: "Pricing",
    connect: "Download",
    help: "Help",
    login: "Login",
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
      feature_1: "Free forever",
      feature_2: "4 regions",
      feature_3: "Wireguard protocol",
      feature_4: "Support for all OS",
      button: "Connect",
    },
    pro: {
      in_month: "per month",
      feature_1: "Everything in Free",
      feature_2: "XRay protocol",
      button: "Buy",
    },
  },
  newsletter_form: {
    title: "Stay connected",
    description:
      "Receive weekly information about our product to your email, we guarantee no spam.",
    subscribe: "Subscribe",
  },
  footer: {
    support: "Support",
    contact: "Contact",
    merch: "Merch",
    privacy: "Privacy Policy",
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
    components: {
      bash_command: {
        copied: "Copied!",
      },
    },
  },
} as const
