import { isAuth } from "../api/legacy"

export function getAuth() {
  return isAuth()
}
