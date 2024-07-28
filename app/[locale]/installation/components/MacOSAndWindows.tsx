import { ExternalLink } from "@/components/external-link"

export function MacOSAndWindows() {
  return (
    <div>
      <div className="bg-zinc-950 p-6 rounded-lg">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Установите приложение WireGuard (
            <ExternalLink href="https://apps.apple.com/us/app/wireguard/id1451685025">
              MacOS
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://www.wireguard.com/install/">
              Windows
            </ExternalLink>
            )
          </li>
          <li>Скачайте файл конфигурации с сайта</li>
          <li>Откройте приложение WireGuard</li>
          <li>Нажмите "Импорт туннелей из файла"</li>
          <li>Выберите скачанный файл конфигурации</li>
          <li>Нажмите "Подключить"</li>
        </ol>
      </div>
    </div>
  )
}
