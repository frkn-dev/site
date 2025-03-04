import { generateKeyPairSync } from "node:crypto"

export function generateWireGuardKeys() {
  const { privateKey, publicKey } = generateKeyPairSync("x25519", {
    privateKeyEncoding: { format: "der", type: "pkcs8" },
    publicKeyEncoding: { format: "der", type: "spki" },
  })

  // The last 32 bytes of the key are X25519
  const privateKeyRaw = privateKey.slice(-32)
  const publicKeyRaw = publicKey.slice(-32)

  return {
    privateKey: privateKeyRaw.toString("base64"),
    publicKey: publicKeyRaw.toString("base64"),
  }
}
