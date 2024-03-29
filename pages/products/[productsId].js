import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Product from '../../components/Product'
import { useRouter } from 'next/router'
// API
import { productAPI } from '../../api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ProductDetails = ({ products }) => {
  const page = products?.category

  const router = useRouter()

  return (
    <>
      <Breadcrumb page={page} />
      <Product products={products} productId={+router.query.productsId} />
    </>
  )
}
export default ProductDetails

export async function getStaticPaths() {
  const res = await productAPI.products()
  const products = res.data.data

  const paths = products.map((product) => ({
    params: { productsId: product.id.toString() },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params, locale }) {
  const res = await productAPI.product(params.productsId)

  return {
    props: {
      products: res?.data?.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
