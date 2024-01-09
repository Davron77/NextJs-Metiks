import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import ProductCategory from '../../components/ProductCategory'
import ButtonCatalog from '../../components/ButtonCatalog'
import ButtonFilter from '../../components/ButtonFilter'
// API
import { productAPI } from '../../api'
//REDUX
import { useDispatch } from 'react-redux'
import { dataCatalog } from '../../redux/catalog'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Products = ({ category, product }) => {
  const [products, setProducts] = useState(product)
  const [title, setTitle] = useState('')

  const page = title
  const dispatch = useDispatch()

  dispatch(dataCatalog(category))

  return (
    <>
      <div className="flex">
        <ButtonCatalog />
        <ButtonFilter setProducts={setProducts} />
      </div>
      <Breadcrumb page={page} />
      <ProductCategory
        setTitle={setTitle}
        title={title}
        category={category}
        products={products}
        setProducts={setProducts}
      />
    </>
  )
}

export default Products

export async function getServerSideProps({ locale }) {
  const resCtg = await productAPI.category()
  const resPro = await productAPI.products()

  return {
    props: {
      category: resCtg.data.data,
      product: resPro.data.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
