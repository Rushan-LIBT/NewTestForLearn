import { useState } from 'react'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Dashboard/>
      <About/>
    </>
  )
}

export default App
