import { memo } from 'react'
import { Link } from 'react-router-dom'
import AnimateIn from './ui/AnimateIn'
import videoThumbnail from '../assets/t3.png'

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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          <span style={{ color: '#1a1a1a' }}>Meet </span>
          <span style={{ color: '#d63031' }}>Maria Rodriguez.</span>
        </h2>
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
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-base font-semibold transition-all duration-200 hover:gap-3"
          style={{ color: '#d63031' }}
        >
          Learn more about the candidate
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
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
