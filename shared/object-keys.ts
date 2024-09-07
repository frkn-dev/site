export type ObjectKeys<T> = T extends Record<string, unknown> ? keyof T : never

export function objectKeys<T extends Record<string, unknown>>(
  obj: T,
): ObjectKeys<T>[] {
  return Object.keys(obj) as ObjectKeys<T>[]
}
