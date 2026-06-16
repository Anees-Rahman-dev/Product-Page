import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Custom from './components/Custom'
import Faq from './components/Faq'
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Custom/>
      <Faq />
    </div>
  )
}

export default App