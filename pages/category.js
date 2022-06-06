import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb'
import ProductCategory from '../components/ProductCategory'
import ButtonCatalog from '../components/ButtonCatalog'
import ButtonFilter from '../components/ButtonFilter'
// API
import { productAPI } from '../api'
//REDUX
import { useDispatch } from 'react-redux'
import { dataCatalog } from '../redux/user'

export async function getStaticProps() {
  const resCtg = await productAPI.category()

  return {
    props: {
      category: resCtg.data.data,
    },
  }
}

const Category = ({ category }) => {
  const page = 'Рулон из оцинкованной стали с полимерным покрытием'
  const dispatch = useDispatch()

  dispatch(dataCatalog(category))

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <div className="flex">
        <ButtonCatalog />
        <ButtonFilter />
      </div>
      <Breadcrumb page={page} />
      <ProductCategory category={category} />
    </>
  )
}

export default Category
