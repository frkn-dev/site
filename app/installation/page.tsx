import type { Metadata } from "next"
import { Instruction } from "./Instruction"

export const metadata: Metadata = {
  title: "Установка FRKN VPN",
}

export default function Installation() {
  return <Instruction />
}
