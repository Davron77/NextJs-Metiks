import React from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import SliderInstagram from '../components/SliderInstagram'
import ContactBanner from '../components/ContactBanner'
import ContactForm from '../components/ContactForm'
// APIA
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  const page = t('Contacts')

  return (
    <>
      <Breadcrumb page={page} />
      <ContactBanner settings={settings} />
      <ContactForm settings={settings} />
      <SliderInstagram data={data} />
    </>
  )
}

export default About
