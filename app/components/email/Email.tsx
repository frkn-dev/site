import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

export function Email() {
  return (
    <section className="mb-[80px]">
      <div className="mb-[40px] max-w-[640px] mx-auto">
        <p className="text-[18px] max-lg:text-[16px] max-lg:text-center px-[40px] max-lg:leading-[23px] opacity-[80%] text-[#FAFAFA] text-left  font-[400]">
          Получайте ежемесячную информацию о нашем продукте на свою электронную
          почту, мы гарантируем отсутствие спама.
        </p>
      </div>
      <div className="flex justify-center h-[60px] max-lg:flex-col max-lg:items-center gap-[15px] max-lg:text-[16px]">
        <Input
          className="border-[2px] border-[rgba(255,255,255,0.2)] pl-[28px] max-lg:placeholder:text-[16px] max-lg:text-[16px] max-w-[465px] bg-[#6C6F874D] h-[100%] placeholder:text-[rgba(127,130,159,1)] placeholder:text-[20px] placeholder:font-[400] text-[rgba(127,130,159,1)] text-[20px] font-[400]"
          type="email"
          placeholder="Введите email"
        />
        <Button className="w-[200px] max-lg:min-h-[30px] tracking-[0.5px] h-[100%]">
          Подписаться
        </Button>
      </div>
    </section>
  )
}
