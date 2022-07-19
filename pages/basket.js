import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import Shopping from '../components/Shopping'
import Checkout from '../components/Checkout'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

const Basket = () => {
  const [check, setCheck] = useState(false)
  const [sum, setSum] = useState(0)
  const { t } = useTranslation()

  const page = `${check ? t('Checkout') : t('Cart')} `

  return (
    <>
      <Breadcrumb page={page} />
      {check ? (
        <Checkout setCheck={setCheck} sum={sum} />
      ) : (
        <Shopping setCheck={setCheck} setSum={setSum} />
      )}
    </>
  )
}

export default Basket
