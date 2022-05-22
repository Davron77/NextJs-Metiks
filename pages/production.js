import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ProductionInfo from '../components/ProductionInfo'
import Banner from '../components/Banner'
import PageTitle from '../components/pageTitle'

const Production = () => {
  const page = 'Производство'
  const urlIma = '/production-banner.png'
  const title = 'Производство metiks'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <PageTitle title={title} />
      <Banner urlIma={urlIma} />
      <ProductionInfo />
    </>
  )
}

export default Production
