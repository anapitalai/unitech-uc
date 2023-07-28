import '../src/scss/bootstrap.css'
import '../src/scss/fontawesome.css'
import '../src/scss/styles.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Icons from './components/Icons'
import Details from './components/Details'

import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navigation />
      <Header />
      <Icons></Icons>
      <Details></Details>

      <Footer></Footer>


    </>
  )
}

export default App
