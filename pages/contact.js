import React from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import SliderInstagram from '../components/SliderInstagram'
import ContactBanner from '../components/ContactBanner'
import ContactForm from '../components/ContactForm'

// APIA
import { productAPI } from '../api'

export async function getStaticProps() {
  const res = await productAPI.instagram()
  const resSettings = await productAPI.settings()

  return {
    props: {
      data: res.data.data,
      settings: resSettings.data.data,
    },
  }
}

const About = ({ data, settings }) => {
  const page = 'Контакты'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <ContactBanner settings={settings} />
      <ContactForm settings={settings} />
      <SliderInstagram data={data} />
    </>
  )
}

export default About
