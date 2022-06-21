import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../../components/Breadcrumb'
import Products from '../../components/Product'
import { useRouter } from 'next/router'
// API
import { productAPI } from '../../api'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false, // false or 'blocking'
  }
}
6

let id = 122

export async function getStaticProps() {
  const res = await productAPI.product(122)

  return {
    props: {
      products: res.data,
    },
  }
}

const ProductDetails = ({ products }) => {
  const page = 'Рулон из оцинкованной стали с полимерным покрытием'

  console.log(getId())

  return (
    <>
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <Breadcrumb page={page} />
      <Products products={products} />
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
