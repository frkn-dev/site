export default {
  header: {
    pricing: "Fiyatlandırma",
    connect: "İndir",
    help: "Yardım",
    login: "Giriş",
    register: "Başla",
    myId: "ID'mi Kopyala",
    payments: "Ödemeler",
    logout: "Çıkış",
  },
  hero: {
    h1: "FRKN — Özgür insanlar için Ücretsiz VPN",
    text: "İfade özgürlüğünü destekliyor ve her türlü sansüre karşı çıkıyoruz. Kullanıcı verilerini toplamayan ve depolamayan merkezi olmayan bir VPN geliştiriyoruz.",
    connect: "Bağlan",
  },
  advantages: {
    no_logs: {
      title: "Kayıt yok",
      text: "FRKN, çevrimiçi aktivitenizin tam gizliliğini sağlar. Bilgilerinizi takip etmez, iletmez veya satmayız. Kişisel verileriniz saklanmaz ve çerezler kullanılmaz. Bağlanmak için sadece bir hesap numarası yeterlidir - şifre, e-posta veya telefon numarası girmenize gerek yoktur.",
    },
    open_source: {
      title: "Açık kaynak",
      text: "FRKN, tam şeffaflık ve gelişmiş güvenlik sağlayan açık kaynak prensiplerine dayanmaktadır. Açık kaynak kodu, uzmanların ve halkın ürünümüzü inceleme ve geliştirme sürecine aktif olarak katılmasına olanak tanır. Bu, güvenlik açıklarının hızlı tespitini ve düzeltilmesini sağlayarak verilerinizin güvenilir korumasını ve VPN hizmetimizin güvenli kullanımını sağlar.",
    },
    speed: {
      title: "Hız",
      text: "FRKN, ücretsiz plan dahilinde bile büyük dosyaları indirmenize, video izlemenize ve çevrimiçi oyun oynamanıza kısıtlama olmadan izin verir.",
    },
    reliability: {
      title: "Güvenilirlik",
      text: "Gelişmiş şifreleme algoritmaları kullanarak konumunuzu gizleyin. FRKN, en hızlı ve güvenli bağlantıyı sağlamak için WireGuard ve XRay gibi en güvenilir protokolleri destekler.",
    },
  },
  pricing: {
    free: {
      price: "Ücretsiz",
      feature_1: "7 bölge",
      feature_2: "Tüm işletim sistemleri desteği",
      feature_3: "Günlük 100 MB trafik",
      button: "Bağlan",
    },
    pro: {
      price: "5$",
      in_month: "aylık",
      feature_1: "Ücretsiz plandaki her şey",
      feature_2: "Sınırsız trafik",
      feature_3: "YouTube 4K desteği",
      feature_4: "Torrent indirebilirsiniz",
      button: "Satın Al",
      active: "Aktif",
    },
    pro_plus: {
      price: "50$",
      in_year: "yıllık",
      feature_1: "Pro'daki her şey",
      feature_2: "Pro'dan %15 daha ucuz",
      button: "Satın Al",
      active: "Aktif",
    },
    payment_provider_dialog: {
      title: "Ödeme sağlayıcısı",
      description: "Bir ödeme sağlayıcısı seçin",
      stripe: "Kart ile Öde",
      lava_rub: "Ruble Kartları (Rus Bankaları)",
      crypto: "Kripto Para",
      sbp: "Hızlı Ödeme Sistemi (SBP)",
      pay: "Öde",
      email_required: "E-posta adresinizi girin",
      support: "Telegram'dan destek ekibimizle iletişime geçin",
    },
  },
  newsletter_form: {
    title: "Bağlantıda kalın",
    description:
      "Ürünümüz hakkında bilgileri e-postanıza alın, spam yapmayacağımızı garanti ederiz.",
    subscribe: "Abone Ol",
    success: "Bültenimize abone olduğunuz için teşekkürler!",
  },
  locations: {
    available: "Mevcut konumlar",
    au: "Avusturya",
    jp: "Japonya",
    nl: "Hollanda",
    ru: "Rusya",
    ch: "İsviçre",
    tr: "Türkiye",
    us: "Amerika Birleşik Devletleri",
  },
  footer: {
    contact: "İletişim",
    help: "Yardım",
    merch: "Ürünler",
    privacy: "Gizlilik Politikası",
    protocols: "Protokoller",
    setup: "Kurulum",
    support: "Destek",
    status: "Sunucular",
    terms: "Kullanım Şartları",
    tokenization: "Tokenizasyon",
  },
  app: {
    installation: {
      ios_android: {
        method1: {
          title: "Yöntem 1: QR kodu ile kurulum",
          step1: "QR kodu oluştur",
          step2: "WireGuard uygulamasını yükle",
          step3: "WireGuard uygulamasını aç",
          step4: "Sağ üst köşedeki '+' simgesine dokun",
          step5: "'QR kodundan oluştur' seçeneğini seç",
          step6: "Web sitesinde oluşturulan QR kodunu tara",
        },
        method2: {
          title: "Yöntem 2: Yapılandırma dosyasından kurulum",
          step1: "WireGuard uygulamasını yükle",
          step2: "Web sitesinden yapılandırma dosyasını indir",
          step3: "WireGuard uygulamasını aç",
          step4: "Sağ üst köşedeki '+' simgesine dokun",
          step5: "'Dosyadan veya arşivden oluştur' seçeneğini seç",
          step6: "İndirilen yapılandırma dosyasını (.conf uzantılı) bul ve seç",
          step7: "VPN'i açmak/kapatmak için geçiş anahtarını kullan",
        },
      },
      macos_windows: {
        step1: "WireGuard uygulamasını yükle",
        step2: "Web sitesinden yapılandırma dosyasını indir",
        step3: "WireGuard uygulamasını aç",
        step4: "'Dosyadan tünelleri içe aktar' seçeneğine tıkla",
        step5: "İndirilen yapılandırma dosyasını seç",
        step6: "'Bağlan'a tıkla",
      },
      linux: {
        step1: "Sistemi güncelle:",
        step2: "WireGuard'ı yükle:",
        step3: "Web sitesinden yapılandırma dosyasını indir",
        step4: "Yapılandırma dosyasını taşı:",
        step5: "Bağlantıyı yönetme:",
        step5_1: "Bağlan:",
        step5_2: "Durumu kontrol et:",
        step5_3: "Bağlantıyı kes:",
        notice:
          'Not: "resolvconf: komut bulunamadı" hatası alırsanız, resolvconf yükleyin:',
      },
      qr: {
        mobile_button: "Yapılandırma ve QR kodu",
        title: "QR kodu ve yapılandırma dosyası",
        description:
          "Bir sunucu seçerek QR kodu ve yapılandırma dosyası oluşturun",
        choose_server: "Bir sunucu seç",
        download: "İndir",
      },
      support:
        "Kurulumla ilgili herhangi bir sorun yaşarsanız, lütfen Telegram botumuza yazın",
    },
    registration: {
      title: "Kayıt",
      description: {
        part1:
          "FRKN, hiçbir kişisel veri toplamadan tam anonimlik sağlar. Kayıt sırasında size benzersiz bir 12 kelimelik anımsatıcı ifade verilecektir.",
        part2: "Bu ifade hesabınıza erişim için tek anahtarınızdır.",
        part3: "Önemli:",
        list_item1: "Anımsatıcı ifadenizi yazın ve güvenli bir yerde saklayın",
        list_item2: "Kimseyle paylaşmayın",
        list_item3: "Sisteme giriş yapmak için kullanın",
        list_item4: "İfadenizi kaybederseniz, hesap kurtarma mümkün değildir",
        part4:
          "Güvenliğiniz önceliğimizdir. Kişisel verilerin olmaması anonimliğinizi garanti eder ancak anımsatıcı ifadenin sorumlu bir şekilde saklanmasını gerektirir.",
        error:
          "Maalesef anımsatıcı ifade oluşturulamadı. Lütfen tekrar deneyin. Sorun devam ederse destek ekibimizle iletişime geçin.",
        already_registered:
          "Zaten bir anımsatıcı ifadeniz varsa, hesabınıza giriş yapın",
      },
      generated: {
        title: "Tebrikler!",
        warning:
          "Uyarı: Bu sayfadan ayrıldıktan veya sayfayı yeniledikten sonra anımsatıcı ifadenizi tekrar göremeyeceksiniz. Güvenli bir yerde sakladığınızdan emin olun.",
        copy: "Kopyala",
        login: "Giriş Yap",
        copy_success: "Anımsatıcı ifade panoya kopyalandı",
      },
      confirm_dialog: {
        title:
          "Bir anımsatıcı ifade oluşturmak için hazır olduğunuzu onaylayın",
        button: "Oluştur",
        text: "Benzersiz anımsatıcı ifadeniz görüntülenmek üzere hazır. Lütfen yalnızca bir kez gösterileceğini unutmayın. İfadeyi hemen yazmanızı veya kopyalamanızı ve güvenli bir yerde saklamanızı öneririz. Maalesef, bu ifade kaybolursa, müşteri desteği aracılığıyla bile kurtarılamaz. Bu olmadan, hesabınıza erişim mümkün olmayacaktır. Anımsatıcı ifadenizi görüntülemeye ve kaydetmeye hazır mısınız?",
        confirm: "Devam et",
        cancel: "İptal",
      },
    },
    auth: {
      title: "Hesaba giriş yap",
      phrase: "Anımsatıcı ifadeniz",
      description: "12 kelimelik anımsatıcı ifade",
      login: "Giriş Yap",
      register: "Kayıt Ol",
      validation_error: "Geçersiz anımsatıcı ifade. Lütfen tekrar deneyin.",
    },
    account: {
      subscription: {
        title: "Abonelik bilgileri",
        onetimeTitle: "Ödeme Bilgileri",
        provider: "Sağlayıcı",
        status: "Durum",
        amount: "Tutar",
        error: "Hata",
        manage: "Aboneliği yönet",
        inactive: "Aktif abonelik bulunamadı.",
        pay: "Öde",
        cancel: "Aboneliği iptal et",
        cancel_desc:
          "VPN aboneliğinizi iptal etmek için ödeme sırasında kullandığınız e-posta adresini girin:",
        cancel_btn: "Abonelikten çık",
        cancel_result: "Geri ödeme 7 gün içinde işlenecektir.",
        hook: {
          successful:
            "Abonelik ödemeniz başarılı oldu. İşlem birkaç dakika sürebilir.",
          failed:
            "Abonelik ödemesi başarısız oldu. Lütfen tekrar deneyin veya müşteri hizmetleriyle iletişime geçin.",
          refresh: "Yenile",
        },
      },
    },
    status: {
      connection: "Bağlantı durumu",
      services: "Servis durumu",
      databases: "API ve veritabanı durumu",
      check: "Durum ayrıntılarını görüntüle",
    },
    dashboard: {
      title: "Bağlantılar",
      xrayDescription:
        "XRay, Rusya ve Çin gibi sıkı sansür uygulayan ülkelerde kısıtlamaları aşmak için uygundur. Kararlı bağlantılar ve yüksek güvenlik sağlar.",
      shadowsocksDescription:
        "Shadowsocks, katı internet kısıtlamaları olmayan ülkeler için basit ve hafif bir protokoldür. Diğer araçlara kıyasla kurması ve kullanması daha kolaydır.",
      openInApp: "Uygulamada Aç",
      copy: "Kopyala",
      showQr: "QR Göster",
      country: "Ülke",
      config: "Yapılandırma",
      allCountries: "Tüm Ülkeler",
      status: "Durum",
      traffic_limit: "Trafik limitiniz",
      used_traffic: "Kullanılan",
      error_message: "Bir hata oluştu, lütfen sayfayı yeniden yükleyin",
      reload_button: "Yeniden Yükle",
    },
  },
  components: {
    email: {
      invalid: "Geçersiz e-posta adresi",
    },
    bash_command: {
      copied: "Kopyalandı!",
    },
  },
  not_found: {
    "404": "Sayfa bulunamadı",
    "404_sub":
      "Üzgünüz, bu sayfayı kaybetmiş görünüyoruz, ama sizi kaybetmek istemiyoruz.",
    search: "Ara",
    search_site: "Sitede ara",
  },
} as const
