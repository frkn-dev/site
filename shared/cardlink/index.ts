import crypto from "node:crypto"

/**
 * @see https://cardlink.link/reference/api#postback
 * @example
 * strtoupper(md5($OutSum . ":" . $InvId . ":" . $apiToken));
 */
export function generateHash(OutSum: number, InvId: string, apiToken: string) {
  return crypto
    .createHash("md5")
    .update(`${OutSum}:${InvId}:${apiToken}`)
    .digest("hex")
    .toUpperCase()
}
