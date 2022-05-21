import React from 'react'

function ServicesInfo() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className=" font-Bebas my-7 text-center text-[40px] font-bold">
          наши Услуги
        </h1>
      </div>
      <div>
        <div className="flex gap-10">
          <img src="/page-img/1.png" />
          <div className="text-[#434343]">
            <h3 className=" font-Bebas mb-5 text-[40px] font-bold leading-[50px] text-black">
              Компания "Metiks" предоставляет услуги по продольно-поперечной
              резке металла.
            </h3>
            <p>
              Сегодня компания METIKS - это современный металлосервисный центр,
              предлагающий своим клиентам, наряду с поставками металлопродукции,
              еще и широкий перечень услуг по обработке металла.
              Продольная-поперечной резка рулонного проката, резка длинномерного
              проката - вот неполный перечень услуг, оказываемых нашей
              компанией.
            </p>
            <ul className="my-2.5 list-disc pl-7">
              <li>
                Распускать металл поперечно на мерные листы и штабелировать их в
                пачку;
              </li>
              <li>Распускать металл продольно, наматывая штрипсы в рулоны;</li>
              <li>
                распускать металл продольно-поперечно на заготовки определенной
                длины и ширины;
              </li>
            </ul>
            <p>
              За более подробной информацией обращайтесь к нашим специалистам.
            </p>
          </div>
        </div>
        <div className="mt-12 flex gap-10">
          <img src="/page-img/2.png" />
          <div className="text-[#434343]">
            <h3 className=" font-Bebas mb-5 text-[40px] font-bold leading-[50px] text-black">
              Воспользуйтесь нашим сервисом доставки образцов по всей
              Узбекистана.
            </h3>
            <p>
              Транспортная служба компании METIKS обеспечивает своевременную
              доставку Ваших заказов в любой регион Узбекистана. Загрузка
              нескольких автомобилей одновременно позволит сэкономить время и
              избежать длительных простоев транспорта.
            </p>
            <p className="mt-2.5">
              Транспортная служба компании METIKS обеспечивает своевременную
              доставку Ваших заказов в любой регион Узбекистана. Загрузка
              нескольких автомобилей одновременно позволит сэкономить время и
              избежать длительных простоев транспорта.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesInfo