import { useState, useEffect } from 'react'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

/**
 * Popup Modal Component
 * Shows on first visit with donation amount buttons.
 * Set ALWAYS_SHOW_POPUP to true to always show (ignores localStorage).
 */
const ALWAYS_SHOW_POPUP = true

function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [isOther, setIsOther] = useState(false)

  useEffect(() => {
    const hasSeenPopup = ALWAYS_SHOW_POPUP ? false : localStorage.getItem('hasSeenSignupPopup')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        requestAnimationFrame(() => { setIsAnimating(true) })
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsOpen(false)
      localStorage.setItem('hasSeenSignupPopup', 'true')
    }, 300)
  }

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount)
    setIsOther(false)
    setCustomAmount('')
    const donationUrl = `${siteData.campaign.donateUrl}?amount=${amount}`
    window.open(donationUrl, '_blank')
  }

  const handleOtherClick = () => {
    setIsOther(true)
    setSelectedAmount(null)
  }

  const handleCustomSubmit = (e) => {
    e.preventDefault()
    if (customAmount && Number(customAmount) > 0) {
      const donationUrl = `${siteData.campaign.donateUrl}?amount=${customAmount}`
      window.open(donationUrl, '_blank')
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isAnimating ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-2xl rounded-2xl shadow-2xl p-10 md:p-12 transition-all duration-300 ${isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
        style={{ backgroundColor: colors.primary[600] }}
      >
        <button onClick={handleClose} className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200" aria-label="Close popup">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-3 leading-tight pr-6">
          {siteData.donation.popupHeadline}
        </h2>
        <p className="text-white/90 text-center text-lg md:text-xl font-medium mb-8">
          {siteData.donation.popupSubtitle}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {siteData.donation.popupAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountClick(amount)}
              className={`py-4 px-6 rounded-lg text-xl md:text-2xl font-bold transition-all duration-200 border-2 cursor-pointer ${
                selectedAmount === amount
                  ? 'bg-red-100 border-red-300 text-primary-700 scale-[1.03] shadow-lg'
                  : 'bg-white border-white text-primary-800 hover:bg-red-50 hover:border-red-200 hover:scale-[1.02] hover:shadow-md'
              }`}
            >
              <span className="text-base md:text-lg mr-0.5">$</span>{amount}
            </button>
          ))}
          <button
            onClick={handleOtherClick}
            className={`py-4 px-6 rounded-lg text-xl md:text-2xl font-bold transition-all duration-200 border-2 cursor-pointer ${
              isOther
                ? 'bg-red-100 border-red-300 text-primary-700 scale-[1.03] shadow-lg'
                : 'bg-white border-white text-primary-800 hover:bg-red-50 hover:border-red-200 hover:scale-[1.02] hover:shadow-md'
            }`}
          >
            Other
          </button>
        </div>

        {isOther && (
          <form onSubmit={handleCustomSubmit} className="mb-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-700 font-bold text-lg">$</span>
                <input type="number" min="1" step="1" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} placeholder="Enter amount" className="w-full pl-8 pr-4 py-3 rounded-lg bg-white border-2 border-white text-primary-800 font-bold text-lg focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-white/30" autoFocus />
              </div>
              <button type="submit" className="px-6 py-3 rounded-lg bg-white text-primary-700 font-bold text-lg hover:bg-red-50 transition-colors duration-200 border-2 border-white hover:border-red-200">
                Donate
              </button>
            </div>
          </form>
        )}

        <p className="text-white/70 text-xs text-center leading-relaxed mt-2">
          {siteData.donation.actblueDisclaimer}
        </p>
      </div>
    </div>
  )
}

export default PopupModal
