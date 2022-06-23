import Services from '../data/data-services'
import { ChevronRightIcon } from '@heroicons/react/outline'

export default function Service() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-6 px-4 sm:py-12 sm:px-8">
        <div className="page-title mb-9">
          <h1 className=" w-36 sm:w-full">
            Сервисы расчет <span>Продуктов MEtiks</span>
          </h1>
          <a href="#" className="sm:w-52">
            Посмотреть все <ChevronRightIcon className=" h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-5 gap-x-6 transition-all delay-150 ease-in-out sm:gap-y-10 lg:grid-cols-2 xl:gap-x-8">
          {Services.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className={`group h-[200px] w-full rounded-lg bg-[#F0F0F0] bg-cover bg-center bg-no-repeat p-6 hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)] sm:h-[300px] md:h-[400px]`}
              style={{ backgroundImage: `url(${service.imageSrc})` }}
            >
              <h3 className="font-Bebas text-center text-xl text-[#434343] group-hover:text-[#1D1D1D] sm:text-[32px]">
                {service.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
