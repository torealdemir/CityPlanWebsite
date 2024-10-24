import { useState } from 'react'
import './App.css'
import MyNavbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Features from './components/Features'

function App() {

  return (
      <div>
          <MyNavbar /> 
          <MainContent />
          <Features />
          <Footer />
      </div>  
  )
}

export default App
