import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductionInfo from '../components/ProductionInfo'
// API
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Production = ({ data, resSettings }) => {
  const { t } = useTranslation()

  const page = t('Production')

  return (
    <>
      <Breadcrumb page={page} />
      <ProductionInfo data={data} resSettings={resSettings} />
    </>
  )
}

export default Production

export async function getServerSideProps({ locale }) {
  const res = await productAPI.manufacture(locale)
  const resSettings = await productAPI.settings(locale)

  return {
    props: {
      data: res.data.data,
      resSettings: resSettings.data.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
