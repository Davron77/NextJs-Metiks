import Image from 'next/image'
import InfoCard from '../data/data-info'

export default function Info() {
  return (
    <div className="info bg-[#F5F5F5]">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:py-30 mx-auto max-w-2xl py-24 lg:max-w-none">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-16 lg:space-y-0">
              {InfoCard.map((item) => (
                <div key={item.name} className="group relative text-center">
                  <div className="m-auto mb-8 h-20 w-full overflow-hidden group-hover:opacity-75">
                    <img
                      className=" m-auto"
                      src={item.imageSrc}
                      alt={item.name}
                    />
                  </div>
                  <h2 className="mb-3.5 text-xl font-bold">{item.name}</h2>
                  <p className="text-base font-semibold text-zinc-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
