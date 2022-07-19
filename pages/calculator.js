import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import RoofCalculator from '../components/RoofCalculator'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

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
