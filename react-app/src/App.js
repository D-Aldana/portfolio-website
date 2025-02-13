import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import RPS from './components/RPS'
import Secret from './components/Secret'
import Valentines from './components/Valentines'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/valentines') {
      document.body.classList.add('valentines-theme')
    } else {
      document.body.classList.remove('valentines-theme')
    }
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rps" element={<RPS />} />
        <Route path="/secret" element={<Secret />} />
      </Route>

      <Route path="/valentines" element={<Valentines />} />
    </Routes>
  )
}

export default App
