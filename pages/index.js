import React from 'react'
import Head from 'next/head'
import HomeBanner from '../components/HomeBanner'
import Products from '../components/Products'
import Services from '../components/Services'
import Recommendations from '../components/Recommendations'
import SliderInstagram from '../components/SliderInstagram'
import VideoContent from '../components/VideoContent'
import ButtonCatalog from '../components/ButtonCatalog'
import Bestsellers from '../components/Bestsellers'
import Interested from '../components/Interested'

// APIA
import { productAPI } from '../api'

export async function getStaticProps() {
  const res = await productAPI.instagram()

  return {
    props: {
      data: res.data.data,
    },
  }
}

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <ButtonCatalog />
      <HomeBanner />
      <Products />
      <Bestsellers />
      <Interested />
      <Services />
      <Recommendations />
      <SliderInstagram data={data} />
      <VideoContent />
    </>
  )
}

export default Home
