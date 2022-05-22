import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import AboutInfo from '../components/AboutInfo'
import PageTitle from '../components/pageTitle'
import VideoContent from '../components/VideoContent'

const About = () => {
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
      <VideoContent />
      <AboutInfo />
    </>
  )
}

export default About
