import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'

function QuoteSection() {
  return (
    <section className="w-full">
      <div className="bg-neutral-50 py-20 md:py-28 lg:py-36 px-6 sm:px-10 lg:px-20 xl:px-28">
        <div className="w-full max-w-7xl mx-auto text-center">
          <AnimateIn animation="fadeIn" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-neutral-900 mb-10 lg:mb-14" style={{ lineHeight: '1.15' }}>
              {siteData.candidate.fullName} will be a {siteData.candidate.office} for{' '}
              <span className="text-primary-600">All of Us.</span>
            </h2>
          </AnimateIn>

          <AnimateIn animation="fadeIn" delay={0.25}>
            <blockquote className="text-neutral-600 text-xl sm:text-2xl lg:text-3xl leading-loose lg:leading-relaxed mb-10 lg:mb-14 max-w-6xl mx-auto text-left sm:text-center">
              &ldquo;{siteData.campaign.quote}&rdquo;
            </blockquote>
          </AnimateIn>

          <AnimateIn animation="fadeIn" delay={0.4}>
            <p className="text-neutral-500 text-2xl lg:text-3xl italic">
              &ndash; {siteData.candidate.fullName}
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
