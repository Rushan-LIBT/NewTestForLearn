import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import navBar from './pages/navBar'

function App() {
  return (
    <>
      <navBar />
      <Dashboard />
    </>
  )
}

export default App
