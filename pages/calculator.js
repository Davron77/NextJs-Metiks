import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import PageTitle from '../components/pageTitle'
import SliderInstagram from '../components/SliderInstagram'
import ContactBanner from '../components/ContactBanner'

const Calculator = () => {
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
      <SliderInstagram />
    </>
  )
}

export default Calculator
