import { useState } from 'react'

import './App.css'
import Header from './components/header';
import About from './components/About';
import Menu from './components/menu';
import Gallary from './components/gallary';
import Footer from './components/Footer';
function App() {
  
  return (
    <main className="App font-text">

      <Header />
      <About />
      <Menu />
      <Gallary />
      <Footer />
    </main>
  )
}

export default App
  