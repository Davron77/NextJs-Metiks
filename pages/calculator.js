import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import RoofCalculator from '../components/RoofCalculator'

const Calculator = () => {
  const page = 'Калькулятор расчета кровли'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <RoofCalculator />
    </>
  )
}

export default Calculator
