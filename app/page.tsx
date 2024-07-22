import Image from "next/image"

import computer from "@/app/assets/icons/laptop-computer.svg"
import protect from "@/app/assets/icons/protect.svg"
import rocket from "@/app/assets/icons/rocket-one.svg"
import benefit1 from "@/app/assets/images/benefit1.png"
import benefit2 from "@/app/assets/images/benefit2.png"
import heroImg from "@/app/assets/images/hero.png"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

export default function Home() {
  return (
    <main className="text-[#ffffff] ">
      <section className="relative max-sm:mb-[100px] mb-[300px] pt-[25px]">
        <div className="relative z-[1] max-lg:w-[450px] max-lg:mx-auto max-sm:w-[100%] w-[495px]">
          <h1 className="leading-[66px] mb-[25px] font-[600] max-lg:text-[36px] max-lg:leading-[40px] text-[56px]">
            Свободный VPN для свободных людей.
          </h1>
          <p className="leading-[28px] mb-[35px] text-[24px]  font-[400]">
            Мы за свободу слова и против какой-либо цензуры. Делаем
            децентрализованный VPN, не собирающий никаких данных.
          </p>
          <Button className="w-[370px] h-[60px]  max-lg:w-[200px] tracking-[1px]">
            Скачать
          </Button>
        </div>
        <Image
          width={950}
          className=" z-[0] right-[-40px] max-lg:right-[5px] max-lg:top-[-25px] absolute top-[0]"
          src={heroImg}
          alt="hero"
        />
      </section>

      <section className="mb-[80px]">
        <div className="flex justify-between max-lg:flex-col items-center gap-[10px] mb-[83px]">
          <div className="max-w-[480px] ">
            <h2 className="font-[700] mb-[25px] text-[37px] max-lg:text-[30px]">
              Отсутствие журналов
            </h2>
            <p className="text-[24px] max-lg:text-[16px] leading-[28px] font-[300]">
              Мы не следим за вашими действиями, не передаём и не продаем вашу
              информацию. Подключаясь к FRKN, вы можете быть уверены: ваша
              онлайн-активность остаётся конфиденциальной. Только вы знаете, что
              делаете в интернете.
            </p>
          </div>
          <Image width={398} height={346} src={benefit1} alt="image" />
        </div>

        <div className="px-[50px] mb-[50px] py-[25px] rounded-[73px] border-[1px] border-[#0697EB]">
          <p className="text-[20px] max-lg:text-[16px] leading-[23px]">
            Мы не сохраняем личные данные пользователей и не используем файлы
            cookie. Вам не потребуется обычный пароль или вход через электронную
            почту — достаточно лишь номера учетной записи для подключения к
            FRKN. Наш сервис не требует указания адреса электронной почты,
            номера телефона или любых других личных данных.
          </p>
        </div>

        <div className="flex justify-between max-lg:flex-col items-center gap-[10px]">
          <Image width={426} height={450} src={benefit2} alt="image" />
          <div className="max-w-[480px]">
            <h2 className="font-[700] mb-[25px] text-[37px] max-lg:text-[30px]">
              Открытый исходный код
            </h2>
            <p className="text-[24px] max-lg:text-[16px] leading-[28px] font-[300]">
              Наш VPN-сервис придерживается политики open-source, обеспечивая
              полную прозрачность и безопасность. Открытый исходный код
              позволяет специалистам и общественности проверять и улучшать наш
              продукт, быстро обнаруживать и устранять уязвимости. Это
              гарантирует, что ваши данные надежно защищены, а использование
              нашего VPN-сервиса безопасно и прозрачно.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="flex gap-[40px]  justify-center max-lg:flex-col  items-center mb-[80px]">
        <div className="bg-[#fff] w-[306px] max-sm:w-[280px] box-border h-[100%] rounded-[20px] p-[30px]">
          <h3 className="text-[30px] pb-[27px] border-b-[1px] text-[#4D4D4D] font-[600] text-center border-[#D4D4D4] mb-[27px]">
            Free
          </h3>

          <ul className="flex flex-col gap-[20px] mb-[27px] pl-[6px]">
            <li className="flex items-center gap-[7px]">
              <Image src={checkDark} alt="check" />
              <p className="text-[13px] font-[400] text-[#AEAEAE]">
                Бесплатно навсегда
              </p>
            </li>
            <li className="flex items-center gap-[7px]">
              <Image src={checkDark} alt="check" />
              <p className="text-[13px] font-[400] text-[#AEAEAE]">4 региона</p>
            </li>
            <li className="flex items-center gap-[7px]">
              <Image src={checkDark} alt="check" />
              <p className="text-[13px] font-[400] text-[#4D4D4D]">
                Протокол Wireguard
              </p>
            </li>
          </ul>
          <div>
            <Button className="mx-auto my-0 flex w-[200px] h-[40px] text-[16px] tracking-[1px]">
              Скачать
            </Button>
          </div>
        </div>

        <div className="bg-[#1E1E1E] w-[306px] max-sm:w-[280px] box-border h-[100%] rounded-[20px] pt-[76px] px-[30px] pb-[30px] max-sm:p-[30px]">
          <h3 className="text-[30px]  text-[#ffffff] font-[600] text-center  mb-[23px]">
            Pro
          </h3>
          <p className="border-[#D4D4D4] text-[18px]  border-b-[1px] pb-[23px] font-[500] mb-[33px] text-center text-[#ffffff]">
            4$
            <span className="  text-[10px]  font-[400] opacity-[50%]">
              / месяц
            </span>
          </p>
          <ul className="flex flex-col gap-[20px] mb-[27px] pl-[6px]">
            <li className="flex items-center gap-[7px]">
              <Image src={checkLight} alt="check" />
              <p className="text-[13px] font-[400] text-[#AEAEAE]">
                36$ при оплате за год
              </p>
            </li>
            <li className="flex items-center gap-[7px]">
              <Image src={checkLight} alt="check" />
              <p className="text-[13px] font-[400] text-[#AEAEAE]">2 региона</p>
            </li>
            <li className="flex items-center gap-[7px]">
              <Image src={checkLight} alt="check" />
              <p className="text-[13px] font-[400] text-[#AEAEAE]">
                Протокол XRay
              </p>
            </li>
          </ul>
          <div>
            <Button className="mx-auto my-0 flex w-[200px] h-[40px]  text-[16px] tracking-[1px]">
              Оплатить
            </Button>
          </div>
        </div>
      </section> */}

      <section className="flex gap-[35px] max-lg:flex-col max-lg:items-center mb-[80px]">
        <div className="flex gap-[20px] w-[360px] max-lg:w-[300px]">
          <div>
            <Image className="min-w-[40px]" src={protect} alt="icon" />
          </div>
          <div>
            <h3 className="mb-[16px] font-[600] text-[24px] leading-[24px]">
              Free VPN
            </h3>
            <p className="leading-[23px] text-[19px] font-[400]">
              Мы уверены, что конфиденциальность и безопасность — это базовые
              права каждого человека, поэтому предлагаем бесплатную версию FRKN.
              В отличие от других бесплатных VPN-сервисов, мы не продаем вашу
              историю посещений.
            </p>
          </div>
        </div>
        <div className="flex gap-[20px] w-[328px] max-lg:w-[300px]">
          <div>
            <Image className="min-w-[40px]" src={rocket} alt="icon" />
          </div>
          <div>
            <h3 className="mb-[16px] font-[600] text-[24px] leading-[24px]">
              Скорость
            </h3>
            <p className="leading-[23px] text-[19px] font-[400]">
              Смотрите видео, загружайте большие файлы и играйте в онлайн-игры с
              быстрым VPN-сервисом. Мы не ограничиваем объем данных даже для
              пользователей бесплатного тарифа.
            </p>
          </div>
        </div>
        <div className="flex gap-[20px] w-[360px] max-lg:w-[300px]">
          <div>
            <Image className="min-w-[40px]" src={computer} alt="icon" />
          </div>
          <div>
            <h3 className="mb-[16px] font-[600] text-[24px] leading-[24px]">
              Надежное шифрование
            </h3>
            <p className="leading-[23px] text-[19px] font-[400]">
              Скройте свое местоположение с помощью передовых алгоритмов
              шифрования. Мы предлагаем самые надежные протоколы, такие как
              WireGuard и XRay, для обеспечения максимально быстрого и
              безопасного соединения.
            </p>
          </div>
        </div>
      </section>

      {/* <Email /> */}
    </main>
  )
}
