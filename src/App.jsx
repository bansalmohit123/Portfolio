import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import './App.css'

function App() {
  

  return (
    <>
    <Header />
    <main>
      <Hero/>
      <About />
      <Skill />
    </main>
    </>
  )
}

export default App
