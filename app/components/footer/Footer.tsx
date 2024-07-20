import Image from "next/image"
import logo from "../../assets/images/main-logo.svg"
import Link from "next/link"

import github from "../../assets/icons/github.svg"
import twitter from "../../assets/icons/twitter.svg"
import telegram from "../../assets/icons/telegram.svg"

export function Footer() {
  return (
    <footer className="text-[#ffffff] px-[20px] flex justify-between pt-[40px] max-lg:flex-col max-lg:items-center border-t-[1px] mb-[56px] border-[rgba(255,255,255,1)]">
      <div className="flex max-lg:flex-col-reverse  gap-[50px] max-lg:mb-[30px]">
        <div className="flex flex-col ">
          {" "}
          <Link className="mb-[30px] max-lg:mx-auto " href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <div className="flex flex-col max-lg:items-center gap-[13px]">
            <p>ИНН 773613031776 </p>
            <p>Адрес</p>
            <p>Ф.И.О.</p>
            <p>ОГРН</p>
          </div>
        </div>
        <div className="flex gap-[40px] max-sm:flex-col leading-[19px]">
          <div className="flex flex-col  max-sm:items-center">
            <h4 className="font-[500] text-[18px] mb-[20px] leading-[21px]">
              О нас
            </h4>
            <div className="flex flex-col max-sm:items-center gap-[10px]">
              <Link className="font-[400] text-[16px]" href="/">
                Статус
              </Link>
              <Link className="font-[400] text-[16px]" href="/">
                Блог
              </Link>
              <Link className="font-[400] text-[16px]" href="/">
                Поддержать
              </Link>
              <Link className="font-[400] text-[16px]" href="/">
                Мерч
              </Link>
            </div>
          </div>
          <div className="flex flex-col max-sm:items-center">
            <h4 className="font-[500] text-[18px] mb-[20px] leading-[21px]">
              Контакты
            </h4>
            <div className="flex flex-col gap-[10px] max-sm:items-center">
              <p className="font-[400] text-[16px]">E-mail</p>
              <p className="font-[400] text-[16px]">Чат</p>
            </div>
          </div>
          <div className="flex flex-col max-sm:items-center">
            <h4 className="font-[500] text-[18px] mb-[20px] leading-[21px]">
              Документы
            </h4>
            <div className="flex flex-col gap-[10px] max-sm:items-center">
              <Link className="font-[400] text-[16px] " href="/">
                Пользовательское соглашение
              </Link>
              <Link className="font-[400] text-[16px]" href="/">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[15px]">
        <Link href="/">
          <Image src={github} alt="icon" />
        </Link>
        <Link href="/">
          <Image src={telegram} alt="icon" />
        </Link>
        <Link href="/">
          <Image src={twitter} alt="icon" />
        </Link>
      </div>
    </footer>
  )
}
