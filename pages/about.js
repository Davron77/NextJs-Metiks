import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import AboutInfo from '../components/AboutInfo'
import VideoContent from '../components/VideoContent'
// APIA
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const page = t('About')

  console.log('data', data)

  return (
    <>
      <Breadcrumb page={page} />
      <div className="font-Bebas my-5 text-center text-[22px] font-bold sm:my-7 sm:text-[40px]">
        {t('company metiks')}
      </div>
      <VideoContent Settings={Settings} />
      <AboutInfo data={data} />
    </>
  )
}

export default About
