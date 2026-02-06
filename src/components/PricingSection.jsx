import { useState, memo } from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'

// Separate component for buttons to isolate state changes
function ContributionButtons() {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const amounts = [10, 25, 50, 100, 250, 'Other']

  const handleAmountClick = (amount) => {
    setSelectedAmount(selectedAmount === amount ? null : amount)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {amounts.map((amount, index) => {
        const isSelected = selectedAmount === amount
        return (
          <button
            key={index}
            onClick={() => handleAmountClick(amount)}
            className={`
              px-4 py-4 md:px-6 md:py-5 rounded-md font-semibold text-base md:text-lg
              transition-all duration-200 shadow-md hover:shadow-lg
              ${isSelected 
                ? 'text-white' 
                : 'bg-white text-neutral-800'
              }
            `}
            style={{
              backgroundColor: isSelected ? '#d63031' : '#ffffff',
              border: `2px solid ${isSelected ? '#d63031' : '#d63031'}`,
              color: isSelected ? '#ffffff' : '#d63031',
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.target.style.backgroundColor = '#fde8e8'
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.target.style.backgroundColor = '#ffffff'
              }
            }}
          >
            {typeof amount === 'number' ? `$${amount}` : amount}
          </button>
        )
      })}
    </div>
  )
}

// Memoized heading to prevent re-renders
const SectionHeading = memo(function SectionHeading() {
  return (
    <TextAnimate 
      as="h2" 
      animation="fadeIn" 
      by="word" 
      delay={0.2} 
      once 
      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 leading-tight tracking-tight text-center" 
      style={{ color: '#d63031' }}
    >
      Choose Your Contribution
    </TextAnimate>
  )
})

// Memoized info text to prevent re-renders
const InfoText = memo(function InfoText() {
  return (
    <div className="text-center space-y-2">
      <TextAnimate 
        as="p" 
        animation="fadeIn" 
        by="word" 
        delay={0} 
        once 
        className="text-sm md:text-base" 
        style={{ color: '#a82425' }}
      >
        Your support helps us continue our mission to create positive change.
      </TextAnimate>
      <TextAnimate 
        as="p" 
        animation="fadeIn" 
        by="word" 
        delay={0.1} 
        once 
        className="text-xs md:text-sm" 
        style={{ color: '#c0292a' }}
      >
        Contributions are not deductible for federal income tax purposes.
      </TextAnimate>
    </div>
  )
})

function PricingSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16" style={{ backgroundColor: '#fde8e8' }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <SectionHeading />

        {/* Toggle Buttons Grid */}
        <AnimateIn delay={0.4}>
          <ContributionButtons />
        </AnimateIn>

        {/* Informational Text */}
        <AnimateIn delay={0.6}>
          <InfoText />
        </AnimateIn>
      </div>
    </section>
  )
}

export default PricingSection
