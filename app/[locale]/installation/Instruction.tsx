"use client"
import { cn } from "@/shared/clsx"
import { useState } from "react"
import { QRCode } from "./QRCode"

const buttonStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"

export function Instruction() {
  const [tab, setTab] = useState<"mobile" | "desktop" | "linux">("mobile")

  return (
    <main className="flex flex-col md:flex-row bg-gray-900 text-white min-h-screen">
      <section className="md:w-7/10 w-full p-4">
        <div className="mb-4">
          <button
            className={cn(buttonStyle, tab === "mobile" && "bg-blue-700")}
            onClick={() => setTab("mobile")}
          >
            iOS | Android
          </button>
          <button
            className={cn(buttonStyle, tab === "desktop" && "bg-blue-700")}
            onClick={() => setTab("desktop")}
          >
            MacOS | Windows
          </button>
          <button
            className={cn(buttonStyle, tab === "linux" && "bg-blue-700")}
            onClick={() => setTab("linux")}
          >
            Linux
          </button>
        </div>

        {tab === "mobile" && (
          <div>
            1. Установите приложение WireGuard для вашего устройства ( iOS |
            Android ) <br />
            2. Зайдите в установленное приложение <br />
            3. В правом верхнем углу нажмите на + <br />
            4. Выберите пункт "Создать из QR-кода" <br />
            5. Наведите камеру телефона на сгенерированный QR-код на сайте{" "}
            <br />
            6. Готово!
          </div>
        )}

        {tab === "desktop" && (
          <div>
            1. Установите приложение WireGuard для вашего устройства ( MacOS |
            Windows ) <br />
            2. Скачайте файл конфигурации, нажав на кнопку "Скачать файл
            конфигурации" <br />
            3. Зайдите в установленное приложение <br />
            4. Нажмите на кнопку "Импорт туннелей из файла" <br />
            5. Выберите файл конфигурации, который вы скачали с сайта <br />
            6. Нажмите кнопку "Подключить"
          </div>
        )}

        {tab === "linux" && (
          <div>
            1. Установка из файла конфигурации <br />
            Перед установкой проверьте наличие доступных обновлений в вашей
            системе. При необходимости установите их:
          </div>
        )}
      </section>

      <section className="md:w-3/10 w-full p-4">
        <QRCode />
      </section>
    </main>
  )
}
