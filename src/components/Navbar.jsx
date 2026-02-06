import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../assets/logo.png'
import logoRedImage from '../assets/logo-red.png'
import AnimateIn from './ui/AnimateIn'

function Navbar({ variant = 'transparent' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const isWhite = variant === 'white'

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: "Maria's Plan", to: '/marias-plan' },
    { name: 'Contact', to: '/contact' },
  ]

  // Styling per variant — with transitions for smooth color flips
  const navBg = isWhite ? 'relative bg-white' : 'absolute top-0 left-0 right-0'

  const navBtnClass = isWhite
    ? 'text-white font-semibold px-5 lg:px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 inline-block hover:brightness-110 hover:scale-105 hover:shadow-lg active:scale-95'
    : 'text-neutral-800 bg-white hover:bg-neutral-100 hover:scale-105 hover:shadow-lg active:scale-95 font-semibold px-5 lg:px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 inline-block'

  const socialBtnClass = isWhite
    ? 'w-8 h-8 rounded-full hover:scale-110 active:scale-95 flex items-center justify-center text-white transition-all duration-300'
    : 'w-8 h-8 rounded-full bg-white hover:bg-neutral-100 hover:scale-110 active:scale-95 flex items-center justify-center text-neutral-800 transition-all duration-300'

  const mobileMenuBtnClass = isWhite
    ? 'lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300 mt-4'
    : 'lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 mt-4'

  const mobileMenuBtnColor = isWhite ? '#d63031' : 'currentColor'

  return (
    <nav className={`${navBg} z-50 transition-colors duration-300`}>
      <div className="w-full px-6 sm:px-8 lg:px-14 py-1 lg:py-2">
        <div className="flex items-start justify-between">
          {/* Logo — both versions stacked, crossfade based on variant */}
          <AnimateIn delay={0}>
            <Link to="/" className="flex-shrink-0 relative block">
              <img 
                src={logoRedImage}
                alt="Logo"
                className={`h-28 lg:h-36 xl:h-44 w-auto ml-4 lg:ml-8 transition-opacity duration-300 ${isWhite ? 'opacity-100' : 'opacity-0'}`}
              />
              <img 
                src={logoImage}
                alt="Logo"
                className={`h-28 lg:h-36 xl:h-44 w-auto brightness-0 invert ml-4 lg:ml-8 absolute top-0 left-0 transition-opacity duration-300 ${isWhite ? 'opacity-0' : 'opacity-100'}`}
              />
            </Link>
          </AnimateIn>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 lg:gap-4 mt-8 lg:mt-10">
            {navItems.map((item, index) => (
              <AnimateIn key={item.name} delay={0.1 * (index + 1)}>
                {item.to ? (
                  <Link 
                    to={item.to}
                    className={navBtnClass}
                    style={isWhite ? { backgroundColor: '#d63031' } : undefined}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    href={item.href}
                    className={navBtnClass}
                    style={isWhite ? { backgroundColor: '#d63031' } : undefined}
                  >
                    {item.name}
                  </a>
                )}
              </AnimateIn>
            ))}
          </div>

          {/* Right side - Social icons + Donate */}
          <div className="hidden lg:flex items-center gap-4 mt-5 lg:mt-7">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="#" className={socialBtnClass} style={isWhite ? { backgroundColor: '#d63031' } : undefined} aria-label="Facebook">
                <span className="font-bold text-xs">f</span>
              </a>
              <a href="#" className={socialBtnClass} style={isWhite ? { backgroundColor: '#d63031' } : undefined} aria-label="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className={socialBtnClass} style={isWhite ? { backgroundColor: '#d63031' } : undefined} aria-label="X (Twitter)">
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
            className={mobileMenuBtnClass}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke={mobileMenuBtnColor} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke={mobileMenuBtnColor} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={isWhite
          ? 'lg:hidden bg-white border-t border-neutral-200'
          : 'lg:hidden bg-primary-700/95 backdrop-blur-sm border-t border-white/10'
        }>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              item.to ? (
                <Link 
                  key={item.name}
                  to={item.to}
                  className={isWhite
                    ? 'block text-white font-medium py-2.5 px-4 rounded transition-all duration-200 uppercase tracking-wider text-sm hover:brightness-110'
                    : 'block text-white/90 hover:text-white hover:bg-white/10 font-medium py-2.5 px-4 rounded transition-colors duration-200 uppercase tracking-wider text-sm'
                  }
                  style={isWhite ? { backgroundColor: '#d63031' } : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a 
                  key={item.name}
                  href={item.href}
                  className={isWhite
                    ? 'block text-white font-medium py-2.5 px-4 rounded transition-all duration-200 uppercase tracking-wider text-sm hover:brightness-110'
                    : 'block text-white/90 hover:text-white hover:bg-white/10 font-medium py-2.5 px-4 rounded transition-colors duration-200 uppercase tracking-wider text-sm'
                  }
                  style={isWhite ? { backgroundColor: '#d63031' } : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="flex gap-3 pt-3 px-4">
              <a href="#" className={isWhite ? 'w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors' : 'w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors'} style={isWhite ? { backgroundColor: '#d63031' } : undefined} aria-label="Facebook">
                <span className="font-bold text-sm">f</span>
              </a>
              <a href="#" className={isWhite ? 'w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors' : 'w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors'} style={isWhite ? { backgroundColor: '#d63031' } : undefined} aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className={isWhite ? 'w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors' : 'w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors'} style={isWhite ? { backgroundColor: '#d63031' } : undefined} aria-label="X (Twitter)">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button className="w-full text-white font-bold px-6 py-3 transition-colors duration-200 uppercase tracking-wider text-sm mt-3" style={{ backgroundColor: '#d63031' }}>
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
