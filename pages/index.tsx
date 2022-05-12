import type { NextPage } from 'next'
import Head from 'next/head'
// COMPONENTS
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Footer from '../components/Footer'
import Catalog from '../components/Catalog'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Metiks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar
        isOpenCatalog={isOpenCatalog}
        setIsOpenCatalog={setIsOpenCatalog}
      />
      <Catalog isOpenCatalog={isOpenCatalog} />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold uppercase">Metiks</h1>
      </main>
      <Info />
      <Footer />
    </div>
  )
}

export default Home
