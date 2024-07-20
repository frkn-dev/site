import logo from "@/app/assets/images/main-logo.svg"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Header() {
  return (
    <div className="h-[91px] max-lg:text-[10px] text-[#fff] flex justify-between  max-lg:gap-[10px] items-center">
      {" "}
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <div>
        <nav className="flex items-center  max-lg:gap-[15px] gap-[40px]">
          <ul className="flex items-center max-lg:gap-[15px] gap-[40px]">
            <li>
              <Link href="/">Цены</Link>
            </li>
            <li>
              <Link href="/">Скачать</Link>
            </li>
            <li>
              <Link href="/">Помощь</Link>
            </li>
          </ul>
          <div className="flex items-center gap-[7px]">
            <Select defaultValue={"RU"}>
              <SelectTrigger className="w-[60px] text-[16px] max-lg:text-[10px] bg-[none] border-none  text-[#ffffff]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Язык</SelectLabel>
                  <SelectItem value="RU">RU</SelectItem>
                  <SelectItem value="EN">EN</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </nav>
      </div>
      <Button className="tracking-[1px] max-lg:text-[10px]  max-lg:px-[15px] max-lg:py-[0]  px-[36px] py-[8px] font-[600]">
        Войти
      </Button>
    </div>
  )
}
