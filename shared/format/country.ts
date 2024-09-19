export function extractCountry(uri: string): string {
  const desc = uri.split("#")?.[1]
  if (desc) {
    return decodeURIComponent(desc).split(" [")[0] ?? "UN"
  }
  return "UN"
}
