import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import AboutInfo from '../components/AboutInfo'
import VideoContent from '../components/VideoContent'
// APIA
import { productAPI } from '../api'

export async function getStaticProps() {
  const res = await productAPI.about()
  const resSet = await productAPI.settings()

  return {
    props: {
      data: res.data.data,
      Settings: resSet.data.data,
    },
  }
}

const About = ({ data, Settings }) => {
  const page = 'О компании'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <div className="font-Bebas my-5 text-center text-[22px] font-bold sm:my-7 sm:text-[40px]">
        кОМПАНИя metiks
      </div>
      <VideoContent Settings={Settings} />
      <AboutInfo data={data} />
    </>
  )
}

export default About
