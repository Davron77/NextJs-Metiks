import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Products from '../components/Products'
import Services from '../components/Services'
import Recommendations from '../components/Recommendations'
import SliderInstagram from '../components/SliderInstagram'
import VideoContent from '../components/VideoContent'
import ButtonCatalog from '../components/ButtonCatalog'
//REDUX
import { useDispatch } from 'react-redux'
import { dataCatalog } from '../redux/catalog'
import { product } from '../redux/product'
// API
import { productAPI } from '../api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = ({ data, settings, category, reviews, banner, products }) => {
  const dispatch = useDispatch()

  dispatch(dataCatalog(category))
  dispatch(product(products))

  return (
    <>
      <ButtonCatalog />
      <HomeBanner settings={settings} banner={banner} />
      <Products category={category} />
      <Services />
      <Recommendations reviews={reviews} />
      <SliderInstagram data={data} />
      <VideoContent settings={settings} />
    </>
  )
}

export default Home

export async function getServerSideProps({ locale }) {
  const res = await productAPI.instagram()
  const resSet = await productAPI.settings(locale)
  const resCtg = await productAPI.category(locale)
  const resRev = await productAPI.reviews(locale)
  const resBan = await productAPI.banner(locale)
  const resPro = await productAPI.products(locale)

  return {
    props: {
      data: res.data.data,
      settings: resSet.data.data,
      category: resCtg.data.data,
      reviews: resRev.data.data,
      banner: resBan.data.data,
      products: resPro.data.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
