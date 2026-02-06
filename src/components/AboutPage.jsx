import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import sectionImage from '../assets/section.png'
import t2Image from '../assets/t2.png'
import ab2Image from '../assets/ab2.png'

function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ===== SECTION 1: Intro (White Background) ===== */}
      <section className="w-full bg-white pt-10 pb-20 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Mobile-only title (shown above image on small screens) */}
          <div className="lg:hidden">
            <AnimateIn delay={0.1}>
              <p 
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: '#d63031' }}
              >
                Our Story
              </p>
            </AnimateIn>
            <TextAnimate
              as="h1"
              animation="fadeIn"
              by="word"
              delay={0.15}
              once
              className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8 leading-tight"
            >
              Maria Rodriguez is fighting for the people who built this community.
            </TextAnimate>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content - hidden title on mobile (already shown above), visible on desktop */}
            <div className="order-last lg:order-first">
              <div className="hidden lg:block">
                <AnimateIn delay={0.1}>
                  <p 
                    className="text-sm font-bold uppercase tracking-widest mb-4"
                    style={{ color: '#d63031' }}
                  >
                    Our Story
                  </p>
                </AnimateIn>
                <TextAnimate
                  as="h1"
                  animation="fadeIn"
                  by="word"
                  delay={0.15}
                  once
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight"
                >
                  Maria Rodriguez is fighting for the people who built this community.
                </TextAnimate>
              </div>
              <AnimateIn delay={0.3}>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  Maria has spent her career showing up for the families and neighborhoods that need it most. She believes real change doesn't happen in boardrooms alone — it happens on front porches, at kitchen tables, and through the everyday acts of people coming together.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.4}>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  That's why Maria has dedicated herself to <strong>building bridges, not walls</strong> — connecting families with the resources they need, advocating for policies that uplift working people, and creating a future where everyone has a fair shot.
                </p>
              </AnimateIn>
            </div>

            {/* Image - shows first on mobile, second (right) on desktop */}
            <AnimateIn delay={0.2} className="w-full flex justify-center order-first lg:order-last">
              <img
                src={sectionImage}
                alt="Community gathering"
                className="w-full max-w-xl h-auto block"
                style={{
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
                }}
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Bio (Primary Color Background) ===== */}
      <section className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#d63031' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 lg:mb-12 text-center">
              About Maria
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <AnimateIn delay={0.2}>
              <div className="w-full overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={t2Image}
                  alt="Maria Rodriguez in the community"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </AnimateIn>

            {/* Bio Text */}
            <div>
              <AnimateIn delay={0.3}>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Maria Rodriguez was born and raised right here in our community</strong> — growing up wasn't always easy. Economic hardship, family struggles, and a system that too often looked the other way shaped Maria's determination to fight for something better.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.4}>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  A community organizing program opened the door to public service and the power of collective action. Maria found her voice as an organizer, discovered her purpose, and built a belief that change was possible — <strong className="text-white">not someday, but now</strong>.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.5}>
                <p className="text-white/90 text-lg leading-relaxed">
                  Today, Maria continues the fight — standing up for working families, expanding opportunity, and making sure <strong className="text-white">every voice in our community is heard</strong>. Because for Maria, leadership isn't about titles — it's about showing up every single day for the people who count on you.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Highlights (White Background) ===== */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 text-center">
              Maria's Track Record
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-neutral-600 text-lg text-center max-w-2xl mx-auto mb-14 lg:mb-16">
              From the city council to the state legislature, Maria has delivered real results for the people she serves.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - shows first on mobile, last on desktop */}
            <AnimateIn delay={0.2} className="order-first lg:order-last">
              <div className="w-full overflow-hidden rounded-lg shadow-xl">
                <img
                  src={ab2Image}
                  alt="Maria Rodriguez meeting with community members"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </AnimateIn>

            {/* Accomplishments - shows second on mobile, first on desktop */}
            <div className="space-y-8 order-last lg:order-first">
              <AnimateIn delay={0.3}>
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#d63031' }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 font-bold text-lg mb-1">Community Investment</h3>
                    <p className="text-neutral-600 leading-relaxed">Maria secured millions in funding for affordable housing, youth programs, and neighborhood development — putting resources directly into the hands of the communities that need them most.</p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#d63031' }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 font-bold text-lg mb-1">Healthcare Access</h3>
                    <p className="text-neutral-600 leading-relaxed">Maria championed legislation to expand healthcare access and protect reproductive rights — because she believes everyone deserves quality care, regardless of zip code.</p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.5}>
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#d63031' }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 font-bold text-lg mb-1">Criminal Justice Reform</h3>
                    <p className="text-neutral-600 leading-relaxed">Maria co-authored legislation to modernize criminal justice policy, replacing outdated systems with smaller, trauma-informed facilities closer to home.</p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.6}>
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#d63031' }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 font-bold text-lg mb-1">Economic Opportunity</h3>
                    <p className="text-neutral-600 leading-relaxed">Maria has led efforts to protect renters and homeowners from predatory practices, and pushed for fair wages and workforce development programs across the state.</p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
