/**
 * Site Data Configuration
 *
 * All candidate-specific content lives here.
 * To re-skin this template for a new candidate, update this file
 * and swap out the images in src/assets/.
 */

const siteData = {
  // ── Candidate ──────────────────────────────────────────────
  candidate: {
    firstName: 'Maria',
    lastName: 'Rodriguez',
    fullName: 'Maria Rodriguez',
    office: 'Governor',
  },

  // ── Campaign ───────────────────────────────────────────────
  campaign: {
    name: 'Maria Rodriguez Campaign',
    slogan: 'Making a real difference for working families.',
    tagline: 'Maria Rodriguez will be a Governor for All of Us.',
    quote: "I\u2019m running for Governor because I understand the everyday challenges families face \u2014 and I\u2019ve dedicated my career to making sure every voice is heard. Every citizen, no matter their background, deserves access to good jobs, quality education, and a government that truly serves them. That\u2019s the promise of this campaign \u2014 building a future for all of us.",
    videoHeadline: 'Meet Maria Rodriguez.',
    videoDescription: 'Hear, in their own words, why they\u2019re running for office and what drives their passion for making a difference in our community.',
    donateUrl: '#',
  },

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: 'support@winadvocacy.com',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
    },
    privacyUrl: '#',
    termsUrl: '#',
  },

  // ── Donation ───────────────────────────────────────────────
  donation: {
    amounts: [10, 25, 50, 100, 250],
    popupAmounts: [3, 15, 50, 100, 250],
    disclaimer: 'Contributions are not deductible for federal income tax purposes.',
    popupHeadline: 'Your community needs a champion like you.',
    popupSubtitle: 'Become a founding donor to our campaign today',
    actblueDisclaimer: "If you\u2019ve saved your payment information with ActBlue Express, your donation will go through immediately.",
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    headline: 'Making a real difference for working families.',
    disclaimerText: 'By providing your phone number or email, you consent to receive periodic campaign updates. Message and data rates may apply. Message frequency may vary. Text STOP to opt out, HELP for help.',
  },

  // ── About Page ─────────────────────────────────────────────
  about: {
    sectionLabel: 'Our Story',
    headline: 'Maria Rodriguez is fighting for the people who built this community.',
    intro: [
      'Maria has spent her career showing up for the families and neighborhoods that need it most. She believes real change doesn\u2019t happen in boardrooms alone \u2014 it happens on front porches, at kitchen tables, and through the everyday acts of people coming together.',
      'That\u2019s why Maria has dedicated herself to building bridges, not walls \u2014 connecting families with the resources they need, advocating for policies that uplift working people, and creating a future where everyone has a fair shot.',
    ],
    bioHeading: 'About Maria',
    bio: [
      'Maria Rodriguez was born and raised right here in our community \u2014 growing up wasn\u2019t always easy. Economic hardship, family struggles, and a system that too often looked the other way shaped Maria\u2019s determination to fight for something better.',
      'A community organizing program opened the door to public service and the power of collective action. Maria found her voice as an organizer, discovered her purpose, and built a belief that change was possible \u2014 not someday, but now.',
      'Today, Maria continues the fight \u2014 standing up for working families, expanding opportunity, and making sure every voice in our community is heard. Because for Maria, leadership isn\u2019t about titles \u2014 it\u2019s about showing up every single day for the people who count on you.',
    ],
    trackRecordHeading: "Maria's Track Record",
    trackRecordSubheading: 'From the city council to the state legislature, Maria has delivered real results for the people she serves.',
    accomplishments: [
      {
        title: 'Community Investment',
        description: 'Maria secured millions in funding for affordable housing, youth programs, and neighborhood development \u2014 putting resources directly into the hands of the communities that need them most.',
      },
      {
        title: 'Healthcare Access',
        description: 'Maria championed legislation to expand healthcare access and protect reproductive rights \u2014 because she believes everyone deserves quality care, regardless of zip code.',
      },
      {
        title: 'Criminal Justice Reform',
        description: 'Maria co-authored legislation to modernize criminal justice policy, replacing outdated systems with smaller, trauma-informed facilities closer to home.',
      },
      {
        title: 'Economic Opportunity',
        description: 'Maria has led efforts to protect renters and homeowners from predatory practices, and pushed for fair wages and workforce development programs across the state.',
      },
    ],
  },

  // ── Plan Page ──────────────────────────────────────────────
  plan: {
    sectionLabel: 'Her Vision for America',
    headline: 'A bold plan to restore freedom, security, and prosperity.',
    intro: [
      'Maria believes that government should work for the people \u2014 not the other way around. Her plan puts American families first, cuts wasteful spending, and restores the values that made this nation great.',
      'From securing our borders to defending our constitutional rights, Maria has a clear, actionable roadmap to deliver results from day one. No empty promises \u2014 just a commitment to the hardworking people of this community.',
    ],
    timelineHeading: 'The Plan: A Timeline for Action',
    timelineSubheading: "Real leadership means having a plan and executing it. Here\u2019s exactly what Maria will fight for \u2014 and when.",
    timeline: [
      {
        label: 'Day One',
        title: 'Secure the Border',
        description: 'Finish the wall, end catch-and-release, and restore order at our southern border. Maria will push for stronger enforcement, more border patrol agents, and zero tolerance for illegal crossings.',
      },
      {
        label: 'First 100 Days',
        title: 'Cut Taxes & Reduce Spending',
        description: "Put money back in the pockets of hardworking families by cutting income taxes, eliminating wasteful government spending, and balancing the budget so our children aren\u2019t buried in debt.",
      },
      {
        label: 'Year One',
        title: 'Back the Blue',
        description: 'Fully fund law enforcement, provide officers with the training and resources they need, and pass legislation that protects our men and women in uniform. Safe streets start with strong support for police.',
      },
      {
        label: 'Year Two',
        title: 'Protect the Second Amendment',
        description: "Defend every law-abiding citizen\u2019s constitutional right to keep and bear arms. Maria will oppose any legislation that infringes on the Second Amendment and champion concealed carry reciprocity.",
      },
      {
        label: 'Year Three',
        title: 'American Energy Independence',
        description: 'Unleash American energy by cutting red tape on oil, gas, and clean coal production. Lower gas prices, create thousands of jobs, and end our dependence on foreign energy sources.',
      },
      {
        label: 'By End of Term',
        title: 'Strengthen the Economy & Bring Jobs Home',
        description: 'Renegotiate bad trade deals, incentivize companies to manufacture in America, and invest in vocational training so every American who wants a good-paying job can find one.',
      },
    ],
    prioritiesHeading: 'Core Priorities',
    prioritiesSubheading: "These aren\u2019t just talking points \u2014 they\u2019re the pillars of Maria\u2019s platform and the values she\u2019ll carry into office every single day.",
    priorities: [
      {
        number: '01',
        title: 'Faith & Family Values',
        description: 'Protect the sanctity of life, defend religious liberty, and ensure parents \u2014 not the government \u2014 have the final say in how their children are raised and educated.',
      },
      {
        number: '02',
        title: 'Strong National Defense',
        description: 'Rebuild our military to be the strongest in the world. Support our veterans with the healthcare and benefits they earned, and stand firm against adversaries who threaten American interests.',
      },
      {
        number: '03',
        title: 'Free Market Economy',
        description: 'Get government out of the way so small businesses can thrive. Reduce regulations, lower the corporate tax burden, and create an environment where entrepreneurs and innovation flourish.',
      },
      {
        number: '04',
        title: 'Election Integrity',
        description: 'Require voter ID, clean up voter rolls, and ban ballot harvesting. Every legal vote must count, and every illegal vote must be stopped. Trust in elections is the foundation of our republic.',
      },
    ],
    ctaHeading: "Join Maria's Movement",
    ctaText: "Change doesn\u2019t happen from the sidelines. Maria needs patriots like you to stand up, speak out, and fight for the America we believe in. Whether you donate, volunteer, or simply spread the word \u2014 every action matters.",
  },

  // ── Meta / SEO ─────────────────────────────────────────────
  meta: {
    title: 'Maria Rodriguez | Making a Real Difference for Working Families',
    description: 'Maria Rodriguez is fighting for the people who built this community. Join her campaign to make a real difference for working families.',
    keywords: 'Maria Rodriguez, campaign, working families, community, elect Maria Rodriguez',
  },
}

export default siteData
