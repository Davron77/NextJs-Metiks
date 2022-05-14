import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Footer from '../components/Footer'

export const WithLayout = (Component) => {
  return (props) => (
    <div>
      <Header />
      <Navbar />
      <Component className="w-full" {...props} />
      <Info />
      <Footer />
    </div>
  )
}
