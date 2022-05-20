import React from 'react'
import Head from 'next/head'
import ProductBanner from '../components/ProductBanner'
import Products from '../components/Products'
import Bestsellers from '../components/Bestsellers'
import Interested from '../components/Interested'
import SliderInstagram from '../components/SliderInstagram'
import VideoContent from '../components/VideoContent'

const AllProducts = () => {
  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <ProductBanner />
      <Products />
      <Bestsellers />
      <Interested />
      <SliderInstagram />
      <VideoContent />
    </>
  )
}

export default AllProducts
