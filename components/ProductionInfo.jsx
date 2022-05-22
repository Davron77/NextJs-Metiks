import React from 'react'

function ProductionInfo() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mt-7 grid-cols-2 gap-10 sm:mt-12 lg:grid">
          <img className="mb-5 w-full lg:mb-0" src="/page-img/3.png" />
          <div className="text-[#434343]">
            <h3 className="font-Bebas mb-5 text-[20px] font-bold leading-[26px] text-black sm:text-[40px] sm:leading-[50px]">
              Воспользуйтесь нашим сервисом доставки образцов по всей
              Узбекистана.
            </h3>
            <p>
              Наличие собственных производственных мощностей, позволяющих
              осуществлять резку металла под потребности заказчика позволяют
              Metiks предлагать своим клиентам максимум индивидуальных сервисных
              решений. Кроме того, в условиях жесткой ценовой политики
              поставщиков рост доли продаж продуктов с более высокой добавленной
              стоимостью обеспечивает устойчивость бизнеса Metiks.
            </p>
            <p className="mt-2.5">
              Metiks - широкий ассортимент металлической продукции. Мы
              предлагаем только лучшее высококачественное сырье, которое
              соответствует требованиям нормативной документации ГОСТ
              34180-2017, ГОСТ 30246-2016.
            </p>
          </div>
        </div>
        <div className="mt-12 grid-cols-2 gap-10 lg:grid">
          <img className="mb-5 w-full lg:mb-0" src="/page-img/4.png" />
          <div className="text-[#434343]">
            <h3 className="font-Bebas mb-5 text-[20px] font-bold leading-[26px] text-black sm:text-[40px] sm:leading-[50px]">
              Производство продукции Metiks.
            </h3>
            <p>Наши ассортименты:</p>
            <ul className="list-disc pl-7">
              <li>
                Профнастил: С-8, С-10, С-15, С-17, С-18, HС-21, HC-35, H-57,
                H-75.
              </li>
              <li>
                Сендвич панель: Кровленный сендвич панель, Стенавой сендвич
                панель.
              </li>
              <li>Сайдинг металлический лист</li>
              <li>Рулон из оцинкованной стали</li>
              <li>Рулон из полимерным покрытием</li>
              <li>Профиль для гипсокартона</li>
              <li>Горячекатаный лист</li>
              <li>Холодный лист</li>
              <li>Арматура и другие продукты.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductionInfo
