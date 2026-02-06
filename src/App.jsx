import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import QuoteSection from './components/QuoteSection'
import PricingSection from './components/PricingSection'
import VideoSection from './components/VideoSection'
import SignupSection from './components/SignupSection'
import Footer from './components/Footer'
import PopupModal from './components/PopupModal'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import MariasPlan from './components/MariasPlan'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'

function HomePage() {
  return (
    <>
      <PopupModal />
      <HeroSection />
      <QuoteSection />
      <PricingSection />
      <VideoSection />
      <SignupSection />
      <Footer />
    </>
  )
}

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen">
      <Navbar variant={isHome ? 'transparent' : 'white'} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/marias-plan" element={<MariasPlan />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  )
}

export default App
