export default {
  meta: {
    description: "FRKN — быстрый, бесплатный VPN с поддержкой протокола XRay",
  },
  header: {
    pricing: "Цены",
    connect: "Скачать",
    help: "Помощь",
    login: "Войти",
    register: "Регистрация",
    myId: "Скопировать ID",
    payments: "Платежи",
    logout: "Выйти",
    account: "Аккаунт",
  },
  hero: {
    h1: "FRKN — свободный VPN для свободных людей",
    text: "Мы поддерживаем свободу слова и выступаем против любых форм цензуры. Разрабатываем децентрализованный VPN, который не собирает и не хранит пользовательские данные.",
    connect: "Подключиться",
  },
  advantages: {
    no_logs: {
      title: "Отсутствие журналов",
      text: "FRKN обеспечивает полную конфиденциальность вашей онлайн-активности. Мы не отслеживаем, не передаём и не продаем вашу информацию. Ваши личные данные не сохраняются, и мы не используем cookie-файлы. Для подключения требуется только номер учётной записи — без необходимости ввода паролей, email или телефона.",
    },
    open_source: {
      title: "Open source",
      text: "FRKN основан на принципах открытого исходного кода, что гарантирует полную прозрачность и повышает уровень безопасности. Открытый код позволяет специалистам и общественности активно участвовать в проверке и улучшении нашего продукта. Это способствует оперативному обнаружению и исправлению уязвимостей, обеспечивая надежную защиту ваших данных и безопасное использование нашего VPN-сервиса.",
    },
    speed: {
      title: "Скорость",
      text: "FRKN позволяет загружать большие файлы, смотреть видео и играть в онлайн-игры без ограничений, даже в рамках бесплатного тарифа.",
    },
    reliability: {
      title: "Надежность",
      text: "Скройте своё местоположение, используя передовые алгоритмы шифрования. FRKN поддерживает самые надёжные протоколы, такие как WireGuard и XRay, чтобы обеспечить максимально быстрое и безопасное соединение.",
    },
  },
  pricing: {
    free: {
      price: "Бесплатно",
      feature_1: "Бесплатно навсегда",
      feature_2: "6 регионов",
      feature_3: "Поддержка всех ОС",
      feature_4: "100 МБ трафика в день",
      button: "Подключиться",
    },
    pro: {
      price: "400 ₽",
      in_month: "в месяц",
      feature_1: "Всё, что в Free",
      feature_2: "Без лимитов на трафик",
      button: "Купить",
    },
    payment_provider_dialog: {
      title: "Способ оплаты",
      description: "Выберите платежный провайдер",
      lava: "Зарубежные карты",
      lava_rub: "Рублевые карты (Банки РФ)",
      pay: "Оплатить",
      invalid: "Неверный адрес электронной почты",
    },
  },
  newsletter_form: {
    title: "Оставайтесь на связи",
    description:
      "Получайте информацию о нашем продукте на свою электронную почту, мы гарантируем отсутствие спама.",
    subscribe: "Подписаться",
    invalid: "Неверный адрес электронной почты",
    success: "Спасибо за подписку на нашу рассылку!",
  },
  footer: {
    support: "Поддержка",
    contact: "Связаться",
    merch: "Мерч",
    privacy: "Конфиденциальность",
    terms: "Соглашение",
  },
  app: {
    installation: {
      ios_android: {
        method1: {
          title: "Метод 1: Установка с помощью QR-кода",
          step1: "Сгенерируйте QR-код",
          step2: "Установите приложение WireGuard",
          step3: "Откройте приложение WireGuard",
          step4: 'Нажмите "+" в правом верхнем углу',
          step5: 'Выберите "Создать из QR-кода"',
          step6: "Отсканируйте QR-код, сгенерированный на сайте",
        },
        method2: {
          title: "Метод 2: Установка из файла конфигурации",
          step1: "Установите приложение WireGuard",
          step2: "Скачайте файл конфигурации с сайта",
          step3: "Откройте приложение WireGuard",
          step4: 'Нажмите "+" в правом верхнем углу',
          step5: 'Выберите "Создать из файла или архива"',
          step6:
            "Найдите и выберите скачанный файл конфигурации (с расширением .conf)",
          step7: "Используйте переключатель для включения/выключения VPN",
        },
      },
      macos_windows: {
        step1: "Установите приложение WireGuard",
        step2: "Скачайте файл конфигурации с сайта",
        step3: "Откройте приложение WireGuard",
        step4: 'Нажмите "Импорт туннелей из файла"',
        step5: "Выберите скачанный файл конфигурации",
        step6: 'Нажмите "Подключить"',
      },
      linux: {
        step1: "Обновите систему:",
        step2: "Установите WireGuard:",
        step3: "Скачайте файл конфигурации с сайта",
        step4: "Переместите файл конфигурации:",
        step5: "Управление соединением:",
        step5_1: "Подключение:",
        step5_2: "Проверка статуса:",
        step5_3: "Отключение:",
        notice:
          'Примечание: Если возникает ошибка "resolvconf: command not found", установите resolvconf:',
      },
      qr: {
        mobile_button: "Конфиг и QR-код",
        title: "QR-код и файл конфигурации",
        description:
          "Выберите сервер, чтобы сгенерировать QR-код и файл конфигурации",
        choose_server: "Выберите сервер",
        download: "Скачать",
      },
      support:
        "Если у вас возникли какие-либо проблемы с установкой, то напишите нам в телеграм-бот",
    },
    registration: {
      title: "Регистрация",
      description: {
        part1:
          "FRKN обеспечивает полную анонимность без сбора личных данных. При регистрации вам будет предоставлена уникальная мнемофраза из 12 слов.",
        part2: "Эта фраза - ваш единственный ключ доступа к аккаунту.",
        part3: "Важно:",
        list_item1: "Запишите и надежно сохраните вашу мнемофразу",
        list_item2: "Не сообщайте ее никому",
        list_item3: "Используйте ее для входа в систему",
        list_item4: "При утере фразы восстановление аккаунта невозможно",
        part4:
          "Ваша безопасность - наш приоритет. Отсутствие личных данных гарантирует вашу анонимность, но требует ответственного хранения мнемофразы.",
        error:
          "К сожалению, не удалось сгенерировать мнемофразу. Пожалуйста, попробуйте еще раз. Если проблема повторится, обратитесь в службу поддержки.",
        already_registered:
          "Если у вас уже есть мнемофраза, то просто войдите в аккаунт",
      },
      generated: {
        title: "Поздравляем!",
        warning:
          "Внимание: После ухода с этой страницы или перезагрузки вы больше не сможете увидеть свою мнемофразу. Убедитесь, что вы сохранили ее в надежном месте.",
        copy: "Скопировать",
        login: "Войти",
        copy_success: "Мнемофраза скопирована в буфер обмена",
      },
      confirm_dialog: {
        title: "Подтвердите, что вы готовы к созданию мнемофразы",
        button: "Сгенерировать",
        text: "Ваша уникальная мнемофраза готова к показу. Пожалуйста, обратите внимание, что она будет отображена только один раз. Рекомендуем сразу же записать или скопировать фразу и сохранить ее в надежном месте. К сожалению, в случае утери мы не сможем восстановить эту фразу, даже через службу поддержки. Без нее доступ к аккаунту будет невозможен. Вы готовы просмотреть и сохранить вашу мнемофразу?",
        confirm: "Продолжить",
        cancel: "Отменить",
      },
    },
    auth: {
      title: "Вход в аккаунт",
      phrase: "Введите мнемофразу",
      description: "Ваша мнемофраза состоящая из 12 слов",
      login: "Войти",
      register: "Зарегистрироваться",
      validation_error: "Введенная вами мнемофраза не валидна",
    },
    account: {
      subscription: {
        title: "Информация о подписке",
        provider: "Провайдер",
        status: "Статус",
        manage: "Управление подпиской",
        inactive: "Активные подписки не найдены.",
      },
    },
    connect: {
      wg: "Для стран с минимальной цензурой. Когда просто хочется повысить уровень приватности",
      xray: "Для стран с высокой цензурой (РФ, Беларусь, Китай, Иран) для обхода блокировок",
      create: "Создать",
      table: {
        title: "Подключения",
        protocol: "Протокол",
        country: "Страна",
        traffic: "Трафик",
        limit: "Лимит",
        configuration: "Конфигурация",
        qr: "QR-код",
        all: "Все страны",
        premium:
          "Для увеличения текущих лимитов свяжитесь с нашей службой поддержки:",
      },
    },
  },
  components: {
    bash_command: {
      copied: "Скопировано!",
    },
  },
} as const
