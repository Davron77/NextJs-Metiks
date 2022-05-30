import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ProductionInfo from '../components/ProductionInfo'
import Banner from '../components/Banner'
import PageTitle from '../components/pageTitle'
// APIA
import { productAPI } from '../api'

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
  const page = 'Производство'
  const title = 'Производство metiks'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <PageTitle title={title} />
      <ProductionInfo data={data} resSettings={resSettings} />
    </>
  )
}

export default Production
