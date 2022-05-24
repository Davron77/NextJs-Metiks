import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import Product from '../components/Product'

const Services = () => {
  const page = 'Рулон из оцинкованной стали с полимерным покрытием'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <Product />
    </>
  )
}

export default Services
