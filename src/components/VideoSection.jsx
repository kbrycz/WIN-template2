import { memo } from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import videoThumbnail from '../assets/t3.png'

const SocialButton = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
    style={{ backgroundColor: '#d63031', color: '#ffffff' }}
  >
    {children}
  </a>
)

const VideoPlaceholder = memo(function VideoPlaceholder() {
  return (
    <AnimateIn delay={0.2}>
      <div
        className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
        style={{ backgroundColor: '#1a1a1a' }}
      >
        {/* Video thumbnail image */}
        <img
          src={videoThumbnail}
          alt="Meet the Candidate"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(214,48,49,0.15) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* Location text */}
        <div className="absolute bottom-6 left-6 text-white/80 text-sm font-medium tracking-wide">
          Campaign Headquarters
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: '#d63031' }}
          >
            <svg
              className="w-7 h-7 md:w-8 md:h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </AnimateIn>
  )
})

const VideoInfo = memo(function VideoInfo() {
  return (
    <div className="flex flex-col justify-center h-full space-y-6">
      <AnimateIn delay={0.3}>
        <TextAnimate
          as="h2"
          animation="fadeIn"
          by="word"
          delay={0.2}
          once
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
          style={{ color: '#d63031' }}
        >
          Meet the Candidate.
        </TextAnimate>
      </AnimateIn>

      <AnimateIn delay={0.4}>
        <p
          className="text-lg md:text-xl leading-relaxed"
          style={{ color: '#525252' }}
        >
          Hear, in their own words, why they're running for office and what drives their passion for making a difference in our community.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.5}>
        <div className="space-y-3">
          <p
            className="text-sm font-bold tracking-[0.2em] uppercase"
            style={{ color: '#b82828' }}
          >
            Share Now
          </p>
          <div className="flex gap-3">
            <SocialButton label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialButton>
            <SocialButton label="X / Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialButton>
            <SocialButton label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialButton>
            <SocialButton label="Copy Link">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </SocialButton>
          </div>
        </div>
      </AnimateIn>
    </div>
  )
})

function VideoSection() {
  return (
    <section
      className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: '#fdf2f2' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Video Placeholder - Left */}
          <VideoPlaceholder />

          {/* Info - Right */}
          <VideoInfo />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
