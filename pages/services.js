import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ServicesInfo from '../components/ServicesInfo'
import PageTitle from '../components/PageTitle'
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
  const title = 'наши Услуги'

  // useEffect(async () => {
  //   const res = await productAPI.services()
  //       console.log(res)
  //   if (res.status === 200) {
  //     console.log(res)
  //   }

  //   return () => {
  //     second
  //   }
  // }, [])

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <PageTitle title={title} />
      <ServicesInfo data={data} />
    </>
  )
}

export default Services
