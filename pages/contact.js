import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import PageTitle from '../components/pageTitle'
import SliderInstagram from '../components/SliderInstagram'
import ContactBanner from '../components/ContactBanner'
import ContactForm from '../components/ContactForm'

const About = () => {
  const page = 'Контакты'
  const title = 'наши Контакты'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <PageTitle title={title} />
      <ContactBanner />
      <ContactForm />
      <SliderInstagram />
    </>
  )
}

export default About
