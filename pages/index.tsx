import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import HomeBanner from '../components/HomeBanner'
import Products from '../components/Products'
import Services from '../components/Services'
import Recommendations from '../components/Recommendations'
import SliderInstagram from '../components/SliderInstagram'
import VideoContent from '../components/VideoContent'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <HomeBanner />
      <Products />
      <Services />
      <Recommendations />
      <SliderInstagram />
      <VideoContent />
    </>
  )
}

export default Home
