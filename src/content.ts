import type { GuidelinePage } from './App'

export const navItems = [
  { label: 'Platform', target: 'platform' },
  { label: 'Guidelines', target: 'guidelines' },
  { label: 'Moments', target: 'moments' },
  { label: 'Inspiration', target: 'inspiration' },
]

export const photos = {
  hero: '/images/brief/hero-community.jpg',
  dinner: '/images/brief/dinner-moment.jpg',
  retailSet: '/images/brief/retail-set.jpg',
  drinks: '/images/brief/seasonal-drinks.jpg',
  groupTable: '/images/brief/group-table.jpg',
  beauty: '/images/brief/beauty-moment.jpg',
  shopping: '/images/brief/shopping-energy.jpg',
  family: '/images/brief/family-retail.jpg',
  inclusive: '/images/brief/inclusive-shopping.jpg',
  wardrobe: '/images/brief/wardrobe.jpg',
  copyExample: '/images/brief/copy-example.jpg',
  outdoor: '/images/brief/outdoor-example.jpg',
}

export const platformPillars = [
  {
    title: 'One Platform',
    text: 'A clear creative home for campaign thinking, seasonal retail moments, channel guidance, and production decisions.',
  },
  {
    title: 'Moment First',
    text: 'Every execution should feel like a real, energetic moment of togetherness rather than a generic shopping message.',
  },
  {
    title: 'Easy To Use',
    text: 'Teams can move from idea to execution quickly with simple rules, reusable examples, and practical do and do not guidance.',
  },
]

export const momentCards = [
  { title: 'In the moment', image: photos.beauty, text: 'Close, candid, human expressions that feel present and warm.' },
  { title: 'Togetherness', image: photos.groupTable, text: 'Friends, family, and communities sharing a reason to be together.' },
  { title: 'Retail energy', image: photos.shopping, text: 'The store, the street, and the product world as active parts of the story.' },
  { title: 'Seasonal sparks', image: photos.drinks, text: 'Short-term campaign moments that still connect back to the same platform.' },
]

export const guidelines = [
  {
    page: 'visual',
    title: 'Visual Guidelines',
    eyebrow: 'Look & Feel',
    summary: 'Make every image feel vivid, natural, inclusive, and alive with a real retail or social moment.',
    image: photos.hero,
    points: ['Use close human framing', 'Show real shared energy', 'Keep product in the world', 'Let color feel bright and optimistic'],
  },
  {
    page: 'copy',
    title: 'Copy Guidelines',
    eyebrow: 'Voice',
    summary: 'Write short, direct lines that translate the moment instead of explaining the mechanics.',
    image: photos.copyExample,
    points: ['Lead with the feeling', 'Keep wording simple', 'Use active verbs', 'Avoid corporate language'],
  },
  {
    page: 'dos-donts',
    title: "Do's & Don'ts",
    eyebrow: 'Quality Control',
    summary: 'A practical checklist for keeping the platform consistent across channels and production teams.',
    image: photos.retailSet,
    points: ['Do show togetherness', 'Do keep it fresh', 'Do not over-stage', 'Do not make it purely transactional'],
  },
] satisfies Array<{
  page: GuidelinePage
  title: string
  eyebrow: string
  summary: string
  image: string
  points: string[]
}>

export const gallery = [
  photos.hero,
  photos.dinner,
  photos.retailSet,
  photos.drinks,
  photos.groupTable,
  photos.beauty,
  photos.shopping,
  photos.family,
  photos.inclusive,
  photos.wardrobe,
  photos.copyExample,
  photos.outdoor,
]
