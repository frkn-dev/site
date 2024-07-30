"use client"
import { register } from "@/shared/api"
import * as bip39 from "@scure/bip39"
import { wordlist } from "@scure/bip39/wordlists/english"
import { sha3_512 } from "js-sha3"
import { useState } from "react"

export default function Registration() {
  const [mnemonic, setMnemonic] = useState("")
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)
    const mnemonic = bip39.generateMnemonic(wordlist)
    setMnemonic(mnemonic)

    await register(sha3_512(mnemonic))
    setLoading(false)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center p-8">
        {!mnemonic && (
          <>
            <h1 className="text-4xl mb-4">Регистрация</h1>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={submit}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-4 border-white border-t-transparent rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "Сгенерировать идентификатор"
              )}
            </button>
          </>
        )}

        {mnemonic && (
          <div className="mt-8">
            <p className="text-xl mb-2">Поздравляем! Ваша мнемофраза:</p>
            <p className="text-2xl font-bold mb-4">
              {mnemonic}
              <br />
              <button
                id="copy-btn"
                className="bg-gray-700 hover:bg-gray-900 py-2 px-4 rounded "
                onClick={() => navigator.clipboard.writeText(mnemonic)}
              >
                📋
              </button>
            </p>
            <p className="mb-4">
              Это единственный идентификатор, необходимый для использования VPN.
              Никаких имен, логинов и почтовых ящиков.
            </p>
            <p>
              Сохраните мнемофразу в надежном месте и не сообщайте ее другим
              лицам.
            </p>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                window.location.href = "/auth"
              }}
            >
              Войти
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
