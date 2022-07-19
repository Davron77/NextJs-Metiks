//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

export default function Info() {
  const { t } = useTranslation()

  const data = [
    {
      name: t('Delivery'),
      description: t('info component text 1'),
      imageSrc: '/info-img-1.png',
    },
    {
      name: t('Online support'),
      description: t('info component text 2'),
      imageSrc: '/info-img-2.png',
    },
    {
      name: t('Flexible Payment'),
      description: t('info component text 3'),
      imageSrc: '/info-img-3.png',
    },
    {
      name: t('Guarantee'),
      description: t('info component text 4'),
      imageSrc: '/info-img-4.png',
    },
  ]

  return (
    <div className="info bg-[#F5F5F5]">
      <div className="w-full">
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8">
          <div className="lg:py-30 mx-auto max-w-2xl py-24 lg:max-w-none">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-16 lg:space-y-0">
              {data.map((item) => (
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
