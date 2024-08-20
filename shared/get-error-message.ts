export function getErrorMessage(e: unknown, fallback = "An error occurred") {
  if (e instanceof Error) {
    return e.message
  }

  return fallback
}
