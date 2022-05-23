import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ProductCategory from '../components/ProductCategory'
import ButtonCatalog from '../components/ButtonCatalog'
import ButtonFilter from '../components/ButtonFilter'

const Category = () => {
  const page = 'Рулон из оцинкованной стали с полимерным покрытием'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <div className="flex w-full">
        <ButtonCatalog />
        <ButtonFilter />
      </div>
      <Breadcrumb page={page} />
      <ProductCategory />
    </>
  )
}

export default Category
