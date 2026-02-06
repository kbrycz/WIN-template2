import { useState } from 'react'
import heroImage from '../assets/hero.png'
import logoImage from '../assets/logo.png'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'

function HeroSection() {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '')
    const limitedNumber = phoneNumber.slice(0, 10)
    
    if (limitedNumber.length === 0) return ''
    if (limitedNumber.length <= 3) return `(${limitedNumber}`
    if (limitedNumber.length <= 6) return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`
    return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`
  }

  const handlePhoneChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value))
  }

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <section className="w-full overflow-hidden">
      {/* ===== NAVBAR (transparent, overlaid on hero) ===== */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="w-full px-6 sm:px-8 lg:px-14 py-1 lg:py-2">
          <div className="flex items-start justify-between">
            {/* Logo */}
            <AnimateIn delay={0}>
              <a href="#" className="flex-shrink-0">
                <img 
                  src={logoImage}
                  alt="Logo"
                  className="h-28 lg:h-36 xl:h-44 w-auto brightness-0 invert ml-4 lg:ml-8"
                />
              </a>
            </AnimateIn>

            {/* Desktop Navigation - White bordered buttons */}
            <div className="hidden lg:flex items-center gap-3 lg:gap-4 mt-8 lg:mt-10">
              {navItems.map((item, index) => (
                <AnimateIn key={item.name} delay={0.1 * (index + 1)}>
                  <a 
                    href={item.href}
                    className="text-neutral-800 bg-white hover:bg-neutral-100 hover:scale-105 hover:shadow-lg active:scale-95 font-semibold px-5 lg:px-6 py-2 text-sm uppercase tracking-widest transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </AnimateIn>
              ))}
            </div>

            {/* Right side - Social icons + Donate */}
            <div className="hidden lg:flex items-center gap-4 mt-5 lg:mt-7">
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-neutral-100 hover:scale-110 active:scale-95 flex items-center justify-center text-neutral-800 transition-all duration-200" aria-label="Facebook">
                  <span className="font-bold text-xs">f</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-neutral-100 hover:scale-110 active:scale-95 flex items-center justify-center text-neutral-800 transition-all duration-200" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-neutral-100 hover:scale-110 active:scale-95 flex items-center justify-center text-neutral-800 transition-all duration-200" aria-label="X (Twitter)">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

              {/* Donate Button */}
              <AnimateIn delay={0.5}>
                <button className="text-white font-bold px-7 py-2.5 transition-all duration-200 uppercase tracking-widest text-sm hover:scale-105 hover:shadow-lg active:scale-95 hover:brightness-110" style={{ backgroundColor: '#d63031' }}>
                  Donate
                </button>
              </AnimateIn>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-primary-700/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 hover:text-white hover:bg-white/10 font-medium py-2.5 px-4 rounded transition-colors duration-200 uppercase tracking-wider text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-3 pt-3 px-4">
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                  <span className="font-bold text-sm">f</span>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="X (Twitter)">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold px-6 py-3 transition-colors duration-200 uppercase tracking-wider text-sm mt-3">
                Donate
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ===== MOBILE & TABLET HERO ===== */}
      <div className="lg:hidden">
        {/* Full-width hero image with gradient overlay */}
        <div className="relative min-h-[90vh]">
          <img 
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover absolute inset-0"
            style={{ objectPosition: '80% center' }}
          />
          {/* Gradient overlay - covers most of the image on mobile */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(214, 48, 49, 0.95) 0%, rgba(214, 48, 49, 0.85) 60%, rgba(214, 48, 49, 0.7) 100%)',
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 px-5 sm:px-8 md:px-12 pt-24 pb-10 flex flex-col justify-center min-h-[90vh]">
            {/* Headline */}
            <TextAnimate 
              as="h1" 
              animation="fadeIn" 
              by="word" 
              delay={0.2} 
              once 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 md:mb-10 leading-tight"
            >
              Making a real difference for working families.
            </TextAnimate>

            {/* Form */}
            <form className="w-full max-w-md md:max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <AnimateIn delay={0.3}>
                <div className="flex flex-col gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-5 py-4 rounded bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all text-base font-medium"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all text-base font-medium"
                    required
                  />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.4}>
                <div className="flex flex-col gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    pattern="[0-9]{5}"
                    maxLength="5"
                    className="w-full px-5 py-4 rounded bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all text-base font-medium"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="14"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    className="w-full px-5 py-4 rounded bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all text-base font-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-5 py-4 rounded bg-white hover:bg-neutral-100 text-neutral-900 font-bold transition-colors duration-200 focus:outline-none text-base uppercase tracking-wider"
                  >
                    Submit
                  </button>
                </div>
              </AnimateIn>
            </form>

            {/* Disclaimer with checkbox */}
            <AnimateIn delay={0.5}>
              <label className="flex items-start gap-3 cursor-pointer max-w-md md:max-w-lg">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-white/50 bg-white/20 text-primary-500 focus:ring-primary-300 flex-shrink-0"
                />
                <span className="text-white/80 text-xs leading-relaxed">
                  By providing your phone number or email, you consent to receive periodic campaign updates. Message and data rates may apply. Message frequency may vary. Text STOP to opt out, HELP for help. Privacy policy available at{' '}
                  <a href="#" className="underline hover:no-underline transition-all">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP HERO ===== */}
      <div className="hidden lg:block relative h-screen min-h-[750px]">
        {/* Full-width hero image background */}
        <img 
          src={heroImage}
          alt="Hero"
          className="w-full h-full absolute inset-0 object-cover object-right"
        />
        
        {/* Gradient overlay from left (primary color) to right (transparent) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(214, 48, 49, 1) 0%, rgba(214, 48, 49, 1) 20%, rgba(214, 48, 49, 0.97) 30%, rgba(214, 48, 49, 0.9) 40%, rgba(214, 48, 49, 0.75) 50%, rgba(214, 48, 49, 0.5) 60%, rgba(214, 48, 49, 0.25) 70%, rgba(214, 48, 49, 0.1) 78%, transparent 85%)',
          }}
        ></div>

        {/* Content - positioned on the left side */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-xl lg:max-w-2xl pl-10 lg:pl-16 xl:pl-20 pr-8 pt-28 lg:pt-32">
            {/* Headline */}
            <TextAnimate 
              as="h1" 
              animation="fadeIn" 
              by="word" 
              delay={0.2} 
              once 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-10 leading-tight"
            >
              Making a real difference for working families.
            </TextAnimate>

            {/* Form */}
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: First Name + Email */}
              <AnimateIn delay={0.4}>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-5 py-4 rounded bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all text-sm font-medium"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all text-sm font-medium"
                    required
                  />
                </div>
              </AnimateIn>

              {/* Row 2: ZIP Code + Phone Number + Submit */}
              <AnimateIn delay={0.5}>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    pattern="[0-9]{5}"
                    maxLength="5"
                    className="w-full px-5 py-4 rounded bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all text-sm font-medium"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="14"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    className="w-full px-5 py-4 rounded bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all text-sm font-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-5 py-4 rounded bg-white hover:bg-neutral-100 text-neutral-900 font-bold transition-colors duration-200 focus:outline-none text-sm uppercase tracking-wider"
                  >
                    Submit
                  </button>
                </div>
              </AnimateIn>
            </form>

            {/* Disclaimer with checkbox */}
            <AnimateIn delay={0.6}>
              <label className="flex items-start gap-3 cursor-pointer max-w-lg">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-white/50 bg-white/20 text-primary-500 focus:ring-primary-300 flex-shrink-0"
                />
                <span className="text-white/80 text-xs leading-relaxed">
                  By providing your phone number or email, you consent to receive periodic campaign updates. Message and data rates may apply. Message frequency may vary. Text STOP to opt out, HELP for help. Privacy policy available at{' '}
                  <a href="#" className="underline hover:no-underline transition-all">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
