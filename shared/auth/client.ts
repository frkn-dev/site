import { useQuery } from "@tanstack/react-query"
import { isAuth } from "../api/legacy"

export function useAuth() {
  return useQuery({
    queryKey: ["me"],
    queryFn: isAuth,
  })
}
