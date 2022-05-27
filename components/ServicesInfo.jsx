import React from 'react'
import parse from 'html-react-parser'

function ServicesInfo({ data }) {
  console.log(data)
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-y-12">
        {data.map((item) => (
          <div className="grid-cols-2 gap-10 lg:grid" key={item.id}>
            <img className="mb-5 w-full lg:mb-0" src={item.media} />
            <div className="text-[#434343]">
              <h3 className=" font-Bebas mb-5 text-[20px] font-bold leading-[26px] text-black sm:text-[40px] sm:leading-[50px]">
                {item.title}
              </h3>
              <div className="list-disc"> {parse(item.description)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesInfo

{
  /* <div className="grid-cols-2 gap-10 lg:grid">
          <img className="mb-5 w-full lg:mb-0" src="/page-img/1.png" />
          <div className="text-[#434343]">
            <h3 className=" font-Bebas mb-5 text-[20px] font-bold leading-[26px] text-black sm:text-[40px] sm:leading-[50px]">
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
        <div className="mt-12 grid-cols-2 gap-10 lg:grid">
          <img className="mb-5 w-full lg:mb-0" src="/page-img/2.png" />
          <div className="text-[#434343]">
            <h3 className=" font-Bebas mb-5 text-[20px] font-bold leading-[26px] text-black sm:text-[40px] sm:leading-[50px]">
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
        </div> */
}
