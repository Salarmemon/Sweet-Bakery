import { useState } from 'react'

import './App.css'
import Header from './components/header';
import About from './components/About';
import Menu from './components/menu';
import Footer from './components/Footer';
function App() {
  
  return (
    <main className="App font-text">

      <Header />
      <About />
      <Menu />
      <Footer />
    </main>
  )
}

export default App
  