import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ServicesInfo from '../components/ServicesInfo'
import PageTitle from '../components/PageTitle'

const Services = () => {
  const page = 'Услуги'
  const title = 'наши Услуги'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <PageTitle title={title} />
      <ServicesInfo />
    </>
  )
}

export default Services
