import React from 'react'
import Head from 'next/head'
import HomeBanner from '../components/HomeBanner'
import Products from '../components/Products'
import Services from '../components/Services'
import Recommendations from '../components/Recommendations'
import SliderInstagram from '../components/SliderInstagram'
import VideoContent from '../components/VideoContent'
import ButtonCatalog from '../components/ButtonCatalog'
import Bestsellers from '../components/Bestsellers'
import Interested from '../components/Interested'
//REDUX
import { useDispatch } from 'react-redux'
import { dataCatalog } from '../redux/catalog'
import { product } from '../redux/product'
// API
import { productAPI } from '../api'

export async function getStaticProps({ locale }) {
  const res = await fetch(`https://api.metiks.uz/api/${locale}/about`)
  const posts = await res.json()

  console.log('posts', posts)

  return {
    props: {
      data: posts,
    },
  }

  // const res = await productAPI.instagram('en')
  // // const resSet = await productAPI.settings()
  // const resCtg = await productAPI.category({ locale })
  // // const resRev = await productAPI.reviews()
  // // const resBan = await productAPI.banner()
  // // const resPro = await productAPI.products()

  // console.log('local', locale)

  // return {
  //   props: {
  //     data: locale,
  //     // Settings: resSet.data.data,
  //     category: resCtg.data.data,
  //     // reviews: resRev.data.data,
  //     // banner: resBan.data.data,
  //     // products: resPro.data.data,
  //   },
  // }
}

const Home = ({ data, category }) => {
  // const dispatch = useDispatch()

  // dispatch(dataCatalog(category))
  // dispatch(product(products))

  console.log('data', data)

  console.log(
    typeof window !== 'undefined' && localStorage.getItem('i18nextLng')
  )

  return (
    <>
      {/* <ButtonCatalog />
      <HomeBanner settings={Settings} banner={banner} /> */}
      {/* <Products category={category} /> */}
      {/* <Bestsellers />
      <Interested />
      <Services />
      <Recommendations reviews={reviews} /> */}
      {/* <SliderInstagram data={data} /> */}
      {/* <VideoContent Settings={Settings} /> */}
    </>
  )
}

export default Home
