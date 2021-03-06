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

export async function getStaticProps() {
  const res = await productAPI.instagram()
  const resSet = await productAPI.settings()
  const resCtg = await productAPI.category()
  const resRev = await productAPI.reviews()
  const resBan = await productAPI.banner()
  const resPro = await productAPI.products()

  return {
    props: {
      data: res.data.data,
      settings: resSet.data.data,
      category: resCtg.data.data,
      reviews: resRev.data.data,
      banner: resBan.data.data,
      products: resPro.data.data,
    },
  }
}

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
