"use client"
import { login } from "@/shared/api"
import * as bip39 from "@scure/bip39"
import { wordlist } from "@scure/bip39/wordlists/english"
import { sha3_512 } from "js-sha3"
import { useState } from "react"

export default function Auth() {
  const [mnemonic, setMnemonic] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (mnemonic.trim() === "") {
      return setError("Заполните поле")
    }
    if (!bip39.validateMnemonic(mnemonic, wordlist)) {
      return setError("Неправильная мнемофраза")
    }

    setLoading(true)
    login(sha3_512(mnemonic))
    setLoading(false)
  }

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Авторизация</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="mnemonic" className="block text-gray-300 mb-2">
              Мнемофраза
            </label>
            <input
              type="text"
              id="mnemonic"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={mnemonic}
              onChange={({ target }) => {
                setError("")
                setMnemonic(target.value)
              }}
            />
            {error && <div className="text-red-500 mb-4">{error}</div>}
          </div>
          <button
            type="submit"
            className={`w-full font-bold py-3 px-4 rounded-lg flex items-center justify-center ${loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"}`}
            disabled={loading}
            onClick={(e) => submit(e)}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 mr-3 border-4 border-white border-t-transparent rounded-full"
                viewBox="0 0 24 24"
              ></svg>
            )}
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}
