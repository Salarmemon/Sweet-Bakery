import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/Footer';
import OrderForm from './components/OrderForm';
function App() {
  
  return (
    <main className="App font-text">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderForm />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
  