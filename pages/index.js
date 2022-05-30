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
  const rescategory = await productAPI.category()
  const resSet = await productAPI.settings()
  const resCtg = await productAPI.category()

  return {
    props: {
      data: res.data.data,
      Settings: resSet.data.data,
      category: resCtg.data.data,
    },
  }
}

const Home = ({ data, Settings, category }) => {
  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <ButtonCatalog />
      <HomeBanner />
      <Products category={category} />
      <Bestsellers />
      <Interested />
      <Services />
      <Recommendations />
      <SliderInstagram data={data} />
      <VideoContent Settings={Settings} />
    </>
  )
}

export default Home
