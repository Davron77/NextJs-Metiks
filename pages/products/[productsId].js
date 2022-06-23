import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../../components/Breadcrumb'
import Product from '../../components/Product'
import { useRouter } from 'next/router'
// API
import { productAPI } from '../../api'

export async function getStaticPaths() {
  const res = await productAPI.products()
  const products = res.data.data

  const paths = products.map((product) => ({
    params: { productsId: product.id.toString() },
  }))

  return {
    paths: [{ params: { productsId: '23' }, params: { productsId: '122' } }],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  console.log('params', params)

  const res = await productAPI.product(params.productsId)

  return {
    props: {
      products: res.data.data,
    },
  }
}

const ProductDetails = ({ products }) => {
  const page = 'Рулон из оцинкованной стали с полимерным покрытием'

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <Product products={products} />
    </>
  )
}
export default ProductDetails
// export async function getStaticPaths() {
//   const res = await productAPI.products()
//   const products = res.data.data

//   const paths = products.map((product) => ({
//     params: { id: product.id.toString() },
//   }))

//   return { paths, fallback: true }
// }

// export async function getStaticProps({ params }) {
//   const res = await productAPI.product(params.id)

//   return {
//     props: {
//       products: res.data,
//     },
//   }
// }
