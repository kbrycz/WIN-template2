import AnimateIn from './ui/AnimateIn'

function QuoteSection() {
  return (
    <section className="w-full">
      {/* Quote / Statement Area */}
      <div className="bg-neutral-50 py-20 md:py-28 lg:py-36 px-6 sm:px-10 lg:px-20 xl:px-28">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Heading */}
          <AnimateIn animation="fadeIn" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-neutral-900 mb-10 lg:mb-14" style={{ lineHeight: '1.15' }}>
              Maria Rodriguez will be a Governor for{' '}
              <span className="text-primary-600">All of Us.</span>
            </h2>
          </AnimateIn>

          {/* Quote */}
          <AnimateIn animation="fadeIn" delay={0.25}>
            <blockquote className="text-neutral-600 text-xl sm:text-2xl lg:text-3xl leading-loose lg:leading-relaxed mb-10 lg:mb-14 max-w-6xl mx-auto">
              &ldquo;I&rsquo;m running for Governor because I understand the everyday challenges families face &mdash; and I&rsquo;ve dedicated my career to making sure{' '}
              <strong className="text-neutral-800 font-bold underline underline-offset-2">
                every voice is heard
              </strong>
              . Every citizen, no matter their background, deserves access to good jobs, quality education, and a government that truly serves them. That&rsquo;s the promise of this campaign &mdash; building a future for{' '}
              <strong className="text-neutral-800 font-bold italic underline underline-offset-2">
                all of us
              </strong>
              .&rdquo;
            </blockquote>
          </AnimateIn>

          {/* Attribution */}
          <AnimateIn animation="fadeIn" delay={0.4}>
            <p className="text-neutral-500 text-2xl lg:text-3xl italic">
              &ndash; Maria Rodriguez
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
