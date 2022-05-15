import Image from 'next/image'
import InfoImage1 from '../public/info-img-1.png'
import InfoImage2 from '../public/info-img-2.png'
import InfoImage3 from '../public/info-img-3.png'
import InfoImage4 from '../public/info-img-4.png'

const callouts = [
  {
    name: 'Доставка',
    description: 'Доставляем товары по всему Ташкенту. ',
    imageSrc: InfoImage1,
  },
  {
    name: 'Онлайн-поддержка',
    description: 'Онлайн-поддержка круглосуточно 24/7.',
    imageSrc: InfoImage2,
  },
  {
    name: 'Гибкая Оплата',
    description: 'Гибкая оплата картами или наличными средствами.',
    imageSrc: InfoImage3,
  },
  {
    name: 'Гарантия',
    description: 'Мы несём ответственность за качество нашей продукции.',
    imageSrc: InfoImage4,
  },
]

export default function Info() {
  return (
    <div className="info bg-[#F5F5F5]">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:py-30 mx-auto max-w-2xl py-24 lg:max-w-none">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-16 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative text-center">
                  <div className="m-auto mb-8 h-20 w-full overflow-hidden group-hover:opacity-75">
                    <Image src={callout.imageSrc} />
                  </div>
                  <h2 className="mb-3.5 text-xl font-bold">{callout.name}</h2>
                  <p className="text-base font-semibold text-zinc-600">
                    {callout.description}
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
