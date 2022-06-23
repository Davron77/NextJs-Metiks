import Header from '../Header'
import Navbar from '../Navbar'
import Info from '../Info'
import Footer from '../Footer'

export const WithLayout = (Component) => {
  return (props) => (
    <div>
      <Header />
      <Navbar />
      <div>
        <Component className="w-full" {...props} />
        <Info />
        <Footer />
      </div>
    </div>
  )
}
