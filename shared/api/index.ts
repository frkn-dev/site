import { API_BASE_URL } from "@/app/config"
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
