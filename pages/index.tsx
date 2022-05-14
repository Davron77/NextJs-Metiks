import React from 'react'
import { WithLayout } from '../layout/layout'
import HomeBanner from '../components/HomeBanner'

const Landing = () => {
  return (
    <div>
      <HomeBanner />
    </div>
  )
}

export default WithLayout(Landing)

// import type { NextPage } from 'next'
// import Head from 'next/head'
// // COMPONENTS
// import Header from '../components/Header'
// import Navbar from '../components/Navbar'
// import Info from '../components/Info'
// import { useState } from 'react'
// import Footer from '../components/Footer'
// import Catalog from '../components/Catalog'
// import HomeBanner from '../components/HomeBanner'

// const Home: NextPage = () => {
//   const [isOpenCatalog, setIsOpenCatalog] = useState(false)

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center">
//       <Head>
//         <title>Metiks</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Header />
//       <Navbar
//         isOpenCatalog={isOpenCatalog}
//         setIsOpenCatalog={setIsOpenCatalog}
//       />
//       <Catalog isOpenCatalog={isOpenCatalog} />
//       <main className="w-full">
//         <HomeBanner />
//       </main>
//       <Info />
//       <Footer />
//     </div>
//   )
// }

// export default Home
