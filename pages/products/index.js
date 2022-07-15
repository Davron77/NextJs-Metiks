import React, { useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '../../components/Breadcrumb'
import ProductCategory from '../../components/ProductCategory'
import ButtonCatalog from '../../components/ButtonCatalog'
import ButtonFilter from '../../components/ButtonFilter'
// API
import { productAPI } from '../../api'
//REDUX
import { useDispatch } from 'react-redux'
import { dataCatalog } from '../../redux/catalog'

export async function getStaticProps() {
  const resCtg = await productAPI.category()
  const resPro = await productAPI.products()

  return {
    props: {
      category: resCtg.data.data,
      product: resPro.data.data,
    },
  }
}

const Products = ({ category, product }) => {
  const [products, setProducts] = useState(product)

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
        <ButtonFilter setProducts={setProducts} />
      </div>
      <Breadcrumb page={page} />
      <ProductCategory
        category={category}
        products={products}
        setProducts={setProducts}
      />
    </>
  )
}

export default Products
