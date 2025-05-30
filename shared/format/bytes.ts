export function formatBytes(bytes?: number | null, unit = true): string {
  if (bytes === undefined || bytes === null) return "∞"

  const megabytes = bytes / (1024 * 1024)

  if (megabytes >= 1024) {
    const gibibytes = megabytes / 1024
    return unit ? `${gibibytes.toFixed(0)} GiB` : gibibytes.toFixed()
  }

  return unit ? `${megabytes.toFixed()} MB` : megabytes.toFixed()
}
