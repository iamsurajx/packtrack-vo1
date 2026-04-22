import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Disclosure from './pages/Disclosure.jsx'
import Privacy from './pages/Privacy.jsx'
import Contact from './pages/Contact.jsx'
import Couple from './pages/Couple.jsx'
import Party from './pages/Party.jsx'
import Summer from './pages/Summer.jsx'
import Wedding from './pages/Wedding.jsx'
import Girls from './pages/Girls.jsx'
import MyntraOffers from './pages/MyntraOffers.jsx'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout onSearch={setSearch} />}>
          <Route path="/" element={<Home search={search} setSearch={setSearch} />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Collection Pages */}
          <Route path="/couple" element={<Couple />} />
          <Route path="/party" element={<Party />} />
          <Route path="/summer" element={<Summer />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/myntra" element={<MyntraOffers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}