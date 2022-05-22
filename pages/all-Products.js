import React from 'react'
import Head from 'next/head'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Bestsellers from '../components/Bestsellers'
import Interested from '../components/Interested'
import SliderInstagram from '../components/SliderInstagram'
import VideoContent from '../components/VideoContent'

const urlIma = '/Product-banner.png'

const AllProducts = () => {
  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Banner urlIma={urlIma} />
      <Products />
      <Bestsellers />
      <Interested />
      <SliderInstagram />
      <VideoContent />
    </>
  )
}

export default AllProducts
