import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import HomeBanner from '../components/HomeBanner'
import Products from '../components/Products'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBanner />
      <Products />
    </>
  )
}

export default Home
