import { BashCommand } from "@/components/bash-command"

export function Linux() {
  return (
    <div>
      <div className="bg-zinc-950 p-6 rounded-lg">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Обновите систему:
            <BashCommand command="sudo apt-get update && sudo apt-get upgrade" />
          </li>
          <li>
            Установите WireGuard:
            <BashCommand command="sudo apt-get install wireguard" />
          </li>
          <li>Скачайте файл конфигурации с сайта</li>
          <li>
            Переместите файл конфигурации:
            <BashCommand command="sudo mv [путь до файла]/frkn.conf /etc/wireguard/" />
          </li>
          <li>
            Управление соединением:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                Подключение:{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded font-mono text-sm">
                  sudo wg-quick up frkn
                </code>
              </li>
              <li>
                Проверка статуса:{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded font-mono text-sm">
                  sudo wg show
                </code>
              </li>
              <li>
                Отключение:{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded font-mono text-sm">
                  sudo wg-quick down frkn
                </code>
              </li>
            </ul>
          </li>
        </ol>
        <p className="mt-8 text-sm text-gray-600">
          Примечание: Если возникает ошибка "resolvconf: command not found",
          установите resolvconf:
        </p>
        <BashCommand command="sudo apt-get install resolvconf" />
      </div>
    </div>
  )
}
