import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Custom from './components/Custom'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Products from './components/Products'
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Custom/>
      <Products />
      <Faq />
      <Footer />
    </div>
  )
}

export default App