import React from 'react'

function AboutInfo() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mt-7 grid-cols-2 gap-10 sm:mt-12 lg:grid">
          <img className="mb-5 w-full lg:mb-0" src="/page-img/5.png" />
          <div className="text-[#434343]">
            <h3 className=" font-Bebas mb-5 text-[20px] font-bold leading-[26px] text-black sm:text-[40px] sm:leading-[50px]">
              компания Metiks - универсальный производитель и поставщик
              высококачественного металла!
            </h3>
            <p>
              Наша компания на рынке Узбекистана уже более 12 лет. Благодаря
              высокому качеству продукции и нашему бесценному опыту, мы создали
              обширную клиентскую базу и наладили долгосрочные взаимоотношения с
              крупными заказчиками. Нам доверяют, потому что мы следим за тем,
              чтобы качество производимой продукции не ухудшалось, а было только
              выше!
            </p>
          </div>
        </div>
        <div className="mt-12 grid-cols-2 gap-10 lg:grid">
          <img className="mb-5 w-full lg:mb-0" src="/page-img/6.png" />
          <div className="text-[#434343]">
            <h3 className=" font-Bebas mb-5 text-[20px] font-bold leading-[26px] text-black sm:text-[40px] sm:leading-[50px]">
              Управляющая компания находится в ташкенте.
            </h3>
            <p>
              Менеджеры филиала METIKS всегда готовы принять заявки и поставить
              в согласованные сроки металл, соответствующий мировым стандартам
              по приемлемым ценам. Также у клиентов METIKS компании есть
              возможность покупки и оплаты металлопроката онлайн через сайт или
              личный кабинет в любое удобное время сутки.
            </p>
            <p className="mt-2.5">
              Мы видим себя в пятерке лучших производителей кровельных и
              фасадных материалов, заборов в Узбекистане. Хотим чтобы каждый
              третий дом в Ташкенте был построен с использованием продукции
              нашей компании.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
