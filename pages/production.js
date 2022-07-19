import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ProductionInfo from '../components/ProductionInfo'
// API
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

export async function getStaticProps() {
  const res = await productAPI.manufacture()
  const resSettings = await productAPI.settings()

  return {
    props: {
      data: res.data.data,
      resSettings: resSettings.data.data,
    },
  }
}

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
