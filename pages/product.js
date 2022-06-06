import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import Product from '../components/Product'
// API
import { productAPI } from '../api'

export async function getStaticProps() {
  const resPro = await productAPI.products()

  return {
    props: {
      products: resPro.data.data,
    },
  }
}

const Services = ({ products }) => {
  const page = 'Рулон из оцинкованной стали с полимерным покрытием'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <Product products={products} />
    </>
  )
}

export default Services
