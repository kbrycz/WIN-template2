import { useState } from 'react'
import heroImage from '../assets/hero.png'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'

function HeroSection() {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
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

  return (
    <section className="w-full overflow-hidden">

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
                    className="w-full px-5 py-4 rounded bg-white hover:bg-neutral-100 font-bold transition-all duration-200 focus:outline-none text-base uppercase tracking-wider hover:shadow-lg hover:scale-[1.02]"
                    style={{ color: '#d63031' }}
                  >
                    Submit
                  </button>
                </div>
              </AnimateIn>
            </form>

            {/* Disclaimer */}
            <AnimateIn delay={0.5}>
              <p className="text-white/80 text-xs leading-relaxed max-w-md md:max-w-lg">
                By providing your phone number or email, you consent to receive periodic campaign updates. Message and data rates may apply. Message frequency may vary. Text STOP to opt out, HELP for help. Privacy policy available at{' '}
                <a href="#" className="underline hover:no-underline transition-all">
                  Privacy Policy
                </a>
                .
              </p>
            </AnimateIn>

            {/* Social Icons */}
            <AnimateIn delay={0.6}>
              <div className="flex items-center gap-3 mt-5">
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Facebook">
                  <span className="font-bold text-sm">f</span>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95" aria-label="X (Twitter)">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
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
                    className="w-full px-5 py-4 rounded bg-white hover:bg-neutral-100 font-bold transition-all duration-200 focus:outline-none text-sm uppercase tracking-wider hover:shadow-lg hover:scale-[1.02]"
                    style={{ color: '#d63031' }}
                  >
                    Submit
                  </button>
                </div>
              </AnimateIn>
            </form>

            {/* Disclaimer */}
            <AnimateIn delay={0.6}>
              <p className="text-white/80 text-xs leading-relaxed max-w-lg">
                By providing your phone number or email, you consent to receive periodic campaign updates. Message and data rates may apply. Message frequency may vary. Text STOP to opt out, HELP for help. Privacy policy available at{' '}
                <a href="#" className="underline hover:no-underline transition-all">
                  Privacy Policy
                </a>
                .
              </p>
            </AnimateIn>

            {/* Social Icons */}
            <AnimateIn delay={0.7}>
              <div className="flex items-center gap-3 mt-5">
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Facebook">
                  <span className="font-bold text-sm">f</span>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95" aria-label="X (Twitter)">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
