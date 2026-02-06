import { Link } from 'react-router-dom'
import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import t2Image from '../assets/t2.png'
import ab4Image from '../assets/ab4.png'

const timelineItems = [
  {
    label: 'Day One',
    title: 'Secure the Border',
    description:
      'Finish the wall, end catch-and-release, and restore order at our southern border. Maria will push for stronger enforcement, more border patrol agents, and zero tolerance for illegal crossings.',
  },
  {
    label: 'First 100 Days',
    title: 'Cut Taxes & Reduce Spending',
    description:
      'Put money back in the pockets of hardworking families by cutting income taxes, eliminating wasteful government spending, and balancing the budget so our children aren\'t buried in debt.',
  },
  {
    label: 'Year One',
    title: 'Back the Blue',
    description:
      'Fully fund law enforcement, provide officers with the training and resources they need, and pass legislation that protects our men and women in uniform. Safe streets start with strong support for police.',
  },
  {
    label: 'Year Two',
    title: 'Protect the Second Amendment',
    description:
      'Defend every law-abiding citizen\'s constitutional right to keep and bear arms. Maria will oppose any legislation that infringes on the Second Amendment and champion concealed carry reciprocity.',
  },
  {
    label: 'Year Three',
    title: 'American Energy Independence',
    description:
      'Unleash American energy by cutting red tape on oil, gas, and clean coal production. Lower gas prices, create thousands of jobs, and end our dependence on foreign energy sources.',
  },
  {
    label: 'By End of Term',
    title: 'Strengthen the Economy & Bring Jobs Home',
    description:
      'Renegotiate bad trade deals, incentivize companies to manufacture in America, and invest in vocational training so every American who wants a good-paying job can find one.',
  },
]

const priorities = [
  {
    number: '01',
    title: 'Faith & Family Values',
    description:
      'Protect the sanctity of life, defend religious liberty, and ensure parents — not the government — have the final say in how their children are raised and educated.',
  },
  {
    number: '02',
    title: 'Strong National Defense',
    description:
      'Rebuild our military to be the strongest in the world. Support our veterans with the healthcare and benefits they earned, and stand firm against adversaries who threaten American interests.',
  },
  {
    number: '03',
    title: 'Free Market Economy',
    description:
      'Get government out of the way so small businesses can thrive. Reduce regulations, lower the corporate tax burden, and create an environment where entrepreneurs and innovation flourish.',
  },
  {
    number: '04',
    title: 'Election Integrity',
    description:
      'Require voter ID, clean up voter rolls, and ban ballot harvesting. Every legal vote must count, and every illegal vote must be stopped. Trust in elections is the foundation of our republic.',
  },
]

function MariasPlan() {
  return (
    <div className="min-h-screen">

      {/* ===== SECTION 1: Intro (White Background) ===== */}
      <section className="w-full bg-white pt-10 pb-20 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <AnimateIn delay={0.1}>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: '#d63031' }}
                >
                  Her Vision for America
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
                A bold plan to restore freedom, security, and prosperity.
              </TextAnimate>

              {/* Image - shows here on mobile, hidden on desktop */}
              <AnimateIn delay={0.2} className="lg:hidden mb-8">
                <div className="w-full overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={t2Image}
                    alt="Maria connecting with the community"
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  Maria believes that government should work for the people — not the other way around. Her plan puts American families first, cuts wasteful spending, and restores the values that made this nation great.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.4}>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  From <strong>securing our borders</strong> to <strong>defending our constitutional rights</strong>, Maria has a clear, actionable roadmap to deliver results from day one. No empty promises — just a commitment to the hardworking people of this community.
                </p>
              </AnimateIn>
            </div>

            {/* Image - shows here on desktop, hidden on mobile */}
            <AnimateIn delay={0.2} className="hidden lg:block">
              <div className="w-full overflow-hidden rounded-lg shadow-xl">
                <img
                  src={t2Image}
                  alt="Maria connecting with the community"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Timeline (Primary Color Background) ===== */}
      <section className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#d63031' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
              The Plan: A Timeline for Action
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-14 lg:mb-16">
              Real leadership means having a plan and executing it. Here's exactly what Maria will fight for — and when.
            </p>
          </AnimateIn>

          {/* Timeline */}
          <div className="relative">
            {/* Center line (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/30 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <AnimateIn key={index} delay={0.2 + index * 0.1} animation={isLeft ? 'slideRight' : 'slideLeft'}>
                    <div className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Content Card */}
                      <div className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:pr-0 lg:text-right' : 'lg:pl-0 lg:text-left'}`}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                            {item.label}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-white/85 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Center Dot (desktop) */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 items-center justify-center" style={{ borderColor: '#d63031' }}>
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>

                      {/* Spacer for the other side */}
                      <div className="hidden lg:block w-[calc(50%-2rem)]" />
                    </div>
                  </AnimateIn>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Core Priorities (White Background) ===== */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 text-center">
              Core Priorities
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-neutral-600 text-lg text-center max-w-2xl mx-auto mb-14 lg:mb-16">
              These aren't just talking points — they're the pillars of Maria's platform and the values she'll carry into office every single day.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorities.map((priority, index) => (
              <AnimateIn key={index} delay={0.2 + index * 0.1}>
                <div className="bg-neutral-50 rounded-xl p-6 h-full border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#d63031' }}
                  >
                    <span className="text-white font-bold text-sm">{priority.number}</span>
                  </div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-2">{priority.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{priority.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Call to Action (Primary Color Background) ===== */}
      <section className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#d63031' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text + Buttons */}
            <div>
              <AnimateIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Join Maria's Movement
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Change doesn't happen from the sidelines. Maria needs patriots like you to stand up, speak out, and fight for the America we believe in. Whether you donate, volunteer, or simply spread the word — <strong className="text-white">every action matters</strong>.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <button
                    className="bg-white font-bold px-8 py-3 text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                    style={{ color: '#d63031' }}
                  >
                    Donate Now
                  </button>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white font-bold px-8 py-3 text-sm uppercase tracking-widest transition-all duration-200 hover:bg-white hover:scale-105 hover:shadow-lg active:scale-95 no-underline"
                    style={{ '--hover-color': '#d63031' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#d63031' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff' }}
                  >
                    Contact Us
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Image */}
            <AnimateIn delay={0.2}>
              <div className="w-full overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={ab4Image}
                  alt="Maria connecting with supporters"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MariasPlan
