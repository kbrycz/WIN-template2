import { useState } from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import { colors } from '@/config/colors'
import candidatePhoto from '../assets/t4.png'

function SignupSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    zipCode: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    setFormData({ firstName: '', email: '', zipCode: '' })
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left - Sign Up Form */}
        <div
          className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20"
          style={{ backgroundColor: colors.signup.background }}
        >
          <div className="max-w-md mx-auto w-full lg:ml-auto lg:mr-16">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold tracking-[0.25em] uppercase mb-3"
                style={{ color: colors.signup.text, opacity: 0.85 }}
              >
                Sign Up To
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <TextAnimate
                as="h2"
                animation="fadeIn"
                by="word"
                delay={0.1}
                once
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight tracking-tight"
                style={{ color: colors.signup.text }}
              >
                Receive Updates
              </TextAnimate>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <style>{`
                  .signup-input::placeholder {
                    font-weight: 700;
                    color: ${colors.signup.placeholder};
                  }
                `}</style>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="signup-input w-full px-5 py-4 rounded-md bg-white border-2 text-neutral-900 focus:outline-none transition-all shadow-sm text-lg font-semibold"
                  style={{ borderColor: '#ffffff' }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.3)'
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = 'none'
                  }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="signup-input w-full px-5 py-4 rounded-md bg-white border-2 text-neutral-900 focus:outline-none transition-all shadow-sm text-lg font-semibold"
                  style={{ borderColor: '#ffffff' }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.3)'
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = 'none'
                  }}
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP Code*"
                  pattern="[0-9]{5}"
                  maxLength="5"
                  className="signup-input w-full px-5 py-4 rounded-md bg-white border-2 text-neutral-900 focus:outline-none transition-all shadow-sm text-lg font-semibold"
                  style={{ borderColor: '#ffffff' }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.3)'
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = 'none'
                  }}
                  required
                />
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 font-bold text-sm tracking-[0.15em] uppercase transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: 'transparent',
                      color: colors.signup.text,
                      borderBottom: `3px solid ${colors.signup.text}`,
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </AnimateIn>
          </div>
        </div>

        {/* Right - Candidate Photo */}
        <div
          className="relative min-h-[350px] lg:min-h-full overflow-hidden"
        >
          <img
            src={candidatePhoto}
            alt="Candidate"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default SignupSection
