import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import RoofCalculator from '../components/RoofCalculator'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Calculator = () => {
  const { t } = useTranslation()

  const page = t('Roof Calculator')

  return (
    <>
      <Breadcrumb page={page} />
      <RoofCalculator />
    </>
  )
}

export default Calculator

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
