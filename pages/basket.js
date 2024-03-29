import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Shopping from '../components/Shopping'
import Checkout from '../components/Checkout'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
