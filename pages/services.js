import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ServicesInfo from '../components/ServicesInfo'
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Services = ({ data }) => {
  const { t } = useTranslation()

  const page = t('Services')

  return (
    <>
      <Breadcrumb page={page} />
      <ServicesInfo data={data} />
    </>
  )
}

export default Services

export async function getServerSideProps({ locale }) {
  const { data } = await productAPI.services()

  return {
    props: {
      data: data.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
