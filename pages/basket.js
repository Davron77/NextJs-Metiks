import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import Shopping from '../components/Shopping'
import Checkout from '../components/Checkout'

const Basket = () => {
  const [check, setCheck] = useState(false)

  const page = `${check ? 'Оформление заказа' : 'Корзина'} `

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      {check ? (
        <Checkout setCheck={setCheck} />
      ) : (
        <Shopping setCheck={setCheck} />
      )}
    </>
  )
}

export default Basket
