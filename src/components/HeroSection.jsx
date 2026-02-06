import { useState } from 'react'
import heroImage from '../assets/hero.png'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'

function HeroSection() {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [agreed, setAgreed] = useState(false)

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
