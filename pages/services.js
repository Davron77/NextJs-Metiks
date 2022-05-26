import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ServicesInfo from '../components/ServicesInfo'
import PageTitle from '../components/PageTitle'
import { productAPI } from '../api'

// export async function getStaticProps() {
//   const res = await productAPI.serv
//   ices()
//   if (res.status === 200) {
//     return { props: { data: res.data.data } }
//   }
// }

const Services = ({ data }) => {
  const page = 'Услуги'
  const title = 'наши Услуги'

  useEffect(async () => {
    const res = await productAPI.services()
    if (res.status === 200) {
      console.log(res)
    }

    return () => {
      second
    }
  }, [])

  console.log('Services', data)

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
