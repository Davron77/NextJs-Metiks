import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SliderInstagram from '../components/SliderInstagram'
import ContactBanner from '../components/ContactBanner'
import ContactForm from '../components/ContactForm'
// APIA
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export async function getServerSideProps({ locale }) {
  const res = await productAPI.instagram()
  const resSettings = await productAPI.settings(locale)

  return {
    props: {
      data: res.data.data,
      settings: resSettings.data.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
