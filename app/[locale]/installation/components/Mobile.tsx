import { ExternalLink } from "@/components/external-link"

export function Mobile() {
  return (
    <div>
      <div className="bg-zinc-950 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">
          Метод 1: Установка с помощью QR-кода
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Сгенерируйте QR-код</li>
          <li>
            Установите приложение WireGuard (
            <ExternalLink href="https://apps.apple.com/us/app/wireguard/id1441195209">
              iOS
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://play.google.com/store/apps/details?id=com.wireguard.android">
              Android
            </ExternalLink>
            )
          </li>
          <li>Откройте приложение WireGuard</li>
          <li>Нажмите "+" в правом верхнем углу</li>
          <li>Выберите "Создать из QR-кода"</li>
          <li>Отсканируйте QR-код, сгенерированный на сайте</li>
        </ol>
      </div>

      <div className="bg-zinc-950 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">
          Метод 2: Установка из файла конфигурации
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Установите приложение WireGuard (
            <ExternalLink href="https://apps.apple.com/us/app/wireguard/id1441195209">
              iOS
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://play.google.com/store/apps/details?id=com.wireguard.android">
              Android
            </ExternalLink>
            )
          </li>
          <li>Скачайте файл конфигурации с сайта</li>
          <li>Откройте приложение WireGuard</li>
          <li>Нажмите "+" в правом верхнем углу</li>
          <li>Выберите "Создать из файла или архива"</li>
          <li>
            Найдите и выберите скачанный файл конфигурации (с расширением .conf)
          </li>
          <li>Используйте переключатель для включения/выключения VPN</li>
        </ol>
      </div>

      <div className="bg-zinc-950 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">
          Альтернативный метод: Использование AmneziaVPN
        </h3>
        <p>
          Вы также можете использовать клиент{" "}
          <ExternalLink href="https://amnezia.org/en/downloads">
            AmneziaVPN
          </ExternalLink>
          .
        </p>
      </div>
    </div>
  )
}
