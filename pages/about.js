import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import AboutInfo from '../components/AboutInfo'
import PageTitle from '../components/pageTitle'
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
  const title = 'кОМПАНИя metiks '

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <PageTitle title={title} />
      <VideoContent Settings={Settings} />
      <AboutInfo data={data} />
    </>
  )
}

export default About
