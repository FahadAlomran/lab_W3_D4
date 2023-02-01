import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Home from './component/Home'
import Blug from './component/Blug'

function App() {
 

  return (
    <>
    <nav>
    <Nav/>
    </nav>
    
    <Home/>
    <Blug/>
    <Blug/>
    <footer>
      <Footer/>
      
    </footer>
    
    </>
  )
}

export default App
