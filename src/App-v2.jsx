import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation.jsx'
import { 
  PrivatjetPage, YachtPage, HousekeepingPage,
  HallenPage, MaschinenPage,
  UnterhaltPage, FensterPage
} from './pages/ServicePages.jsx'
import {
  UeberUnsPage, KIIntegrationPage, BlogPage,
  DownloadsPage, GlossarPage, KontaktPage
} from './pages/AdditionalPages.jsx'
import HomePage from './pages/HomePage.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Premium Services */}
          <Route path="/services/privatjet" element={<PrivatjetPage />} />
          <Route path="/services/yacht" element={<YachtPage />} />
          <Route path="/services/housekeeping" element={<HousekeepingPage />} />
          
          {/* Standard Services */}
          <Route path="/services/hallen" element={<HallenPage />} />
          <Route path="/services/maschinen" element={<MaschinenPage />} />
          
          {/* Essentiell Services */}
          <Route path="/services/unterhalt" element={<UnterhaltPage />} />
          <Route path="/services/fenster" element={<FensterPage />} />
          
          {/* Other Pages */}
          <Route path="/ueber-uns" element={<UeberUnsPage />} />
          <Route path="/ki-integration" element={<KIIntegrationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/glossar" element={<GlossarPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
