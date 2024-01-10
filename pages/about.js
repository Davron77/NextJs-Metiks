import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AboutInfo from '../components/AboutInfo'
import VideoContent from '../components/VideoContent'
// APIA
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const About = ({ data, Settings }) => {
  const { t } = useTranslation()
  const page = t('About')

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

export async function getServerSideProps({ locale }) {
  const res = await productAPI.about(locale)
  const resSet = await productAPI.settings(locale)

  return {
    props: {
      data: res.data.data,
      Settings: resSet.data.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
