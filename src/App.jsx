import './App.css'
import HeroSection from './components/HeroSection'
import QuoteSection from './components/QuoteSection'
import PricingSection from './components/PricingSection'
import VideoSection from './components/VideoSection'
import SignupSection from './components/SignupSection'
import Footer from './components/Footer'
import PopupModal from './components/PopupModal'

function App() {
  return (
    <div className="min-h-screen">
      <PopupModal />
      <HeroSection />
      <QuoteSection />
      <PricingSection />
      <VideoSection />
      <SignupSection />
      <Footer />
    </div>
  )
}

export default App
