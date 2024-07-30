import { API_BASE_URL } from "@/shared/config"
import type { paths } from "./schema"

// #region Locations
export type Locations =
  paths["/locations"]["get"]["responses"][200]["content"]["application/json"]

export async function getLocations(): Promise<Locations | null> {
  try {
    const data = await fetch(API_BASE_URL + "/locations")
    return data.json()
  } catch (error) {
    console.error("getLocations API_METHOD", error)
    return null
  }
}
// #endregion

// #region Peer
export type Peer =
  paths["/peer"]["get"]["responses"][200]["content"]["application/json"]

type PeerParam = paths["/peer"]["get"]["parameters"]["query"]["location"]

export async function getPeer(location: PeerParam): Promise<Peer | null> {
  try {
    const data = await fetch(`${API_BASE_URL}/peer?location=${location}`)
    return data.json()
  } catch (error) {
    console.error("getPeer API_METHOD", error)
    return null
  }
}
// #endregion

// #region User
type User =
  paths["/user/auth"]["post"]["responses"][200]["content"]["application/json"]

export async function login(password: string): Promise<User | null> {
  try {
    const data = await fetch("/api/user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    return data.json()
  } catch (error) {
    console.error("login API_METHOD", error)
    return null
  }
}

type Status =
  paths["/user/register"]["post"]["responses"][200]["content"]["application/json"]

export async function register(password: string): Promise<Status | null> {
  try {
    const data = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    return data.json()
  } catch (error) {
    console.error("register API_METHOD", error)
    return null
  }
}

type UserInfo =
  paths["/user/me"]["get"]["responses"][200]["content"]["application/json"]

export async function isAuth(): Promise<UserInfo | null> {
  try {
    const data = await fetch("/api/user/me")
    return data.json()
  } catch (error) {
    console.error("register API_METHOD", error)
    return null
  }
}
// #endregion
