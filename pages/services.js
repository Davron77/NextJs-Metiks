import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ServicesInfo from '../components/ServicesInfo'
import { productAPI } from '../api'

export async function getStaticProps() {
  const { data } = await productAPI.services()

  return {
    props: {
      data: data.data,
    },
  }
}

const Services = ({ data }) => {
  const page = 'Услуги'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <ServicesInfo data={data} />
    </>
  )
}

export default Services
