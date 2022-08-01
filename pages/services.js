import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ServicesInfo from '../components/ServicesInfo'
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

export async function getServerSideProps() {
  const { data } = await productAPI.services()

  return {
    props: {
      data: data.data,
    },
  }
}

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
