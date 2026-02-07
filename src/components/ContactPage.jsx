import { useState } from 'react'
import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import { colors } from '@/config/colors'

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '')
    const limitedNumber = phoneNumber.slice(0, 10)
    if (limitedNumber.length === 0) return ''
    if (limitedNumber.length <= 3) return `(${limitedNumber}`
    if (limitedNumber.length <= 6) return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`
    return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  }

  const inputClasses = `w-full px-5 py-4 rounded-lg bg-white border-2 border-neutral-200 text-neutral-900 text-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all duration-200 shadow-sm placeholder:font-bold placeholder:text-neutral-400`

  return (
    <div className="min-h-screen">
      <section className="w-full bg-white pt-10 pb-6 md:pt-14 md:pb-8 lg:pt-16 lg:pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <AnimateIn delay={0.1}>
              <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: colors.primary[600] }}>
                Get In Touch
              </p>
            </AnimateIn>
            <TextAnimate as="h1" animation="fadeIn" by="word" delay={0.15} once className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              We'd love to hear from you.
            </TextAnimate>
            <AnimateIn delay={0.3}>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Whether you have a question, want to get involved, or just want to say hello — drop us a message and we'll get back to you as soon as possible.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-20 md:pb-28 lg:pb-32 pt-6 md:pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <AnimateIn delay={0.1}>
                <div className="text-center py-16 px-8 rounded-2xl" style={{ backgroundColor: colors.primary[50] }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: colors.primary[600] }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">Message Sent!</h2>
                  <p className="text-neutral-600 text-lg mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 uppercase tracking-widest text-sm hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95" style={{ backgroundColor: colors.primary[600] }}>
                    Send Another Message
                  </button>
                </div>
              </AnimateIn>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <AnimateIn delay={0.2}><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className={inputClasses} required /></AnimateIn>
                  <AnimateIn delay={0.25}><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className={inputClasses} required /></AnimateIn>
                </div>
                <AnimateIn delay={0.3}><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClasses} required /></AnimateIn>
                <AnimateIn delay={0.35}><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" maxLength="14" pattern="\(\d{3}\) \d{3}-\d{4}" className={inputClasses} /></AnimateIn>
                <AnimateIn delay={0.4}><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={6} className={`${inputClasses} resize-none`} required /></AnimateIn>
                <AnimateIn delay={0.45}>
                  <button type="submit" className="w-full text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 uppercase tracking-widest text-base hover:scale-[1.02] hover:shadow-lg hover:brightness-110 active:scale-[0.98]" style={{ backgroundColor: colors.primary[600] }}>
                    Send Message
                  </button>
                </AnimateIn>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
