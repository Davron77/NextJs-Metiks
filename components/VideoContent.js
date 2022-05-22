export default function VideoContent() {
  return (
    <div>
      <div className="mx-auto max-w-[1440px]">
        <div className="lg:flex">
          <div className="flex basis-1/2 flex-row justify-center bg-black pt-8 pb-10 text-white sm:py-28">
            <div>
              <div className="font-Bebas text-[32px] sm:text-[44px] sm:leading-[54px]">
                <span className="text-[#016059]">Metiks производит </span>
                <br />
                <span className="text-[#d6a300]">широкий ассортимент </span>
                <br />
                <span>и разные виды металла.</span>
              </div>
              <p className=" font-Inter mt-4 mb-8 text-base font-normal text-neutral-400">
                Более 30 видов металла товаров <br /> Большой спектр выбора
                продукции.
              </p>
              <a
                href="#"
                className="rounded-sm bg-white py-2 px-[14px] text-base font-normal text-black"
              >
                Каталог продукции
              </a>
            </div>
          </div>
          <div className="basis-1/2">
            <img src="/video-picture.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
