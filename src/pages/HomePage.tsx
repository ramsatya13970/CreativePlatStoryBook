
import HeroVideo from '../components/HeroVideo/HeroVideo'
import IntroSection from '../components/IntroSection/IntroSection'
import GuidelineScroller from '../components/GuidelineScroller/GuidelineScroller'
import WhyPlatform from '../components/WhyPlatform/WhyPlatform'
import InspirationGallery from '../components/InspirationGallery/InspirationGallery'
import type { GuidelinePage } from '../App'

type HomePageProps = {
  onSelectGuideline: (page: GuidelinePage) => void
}

export default function HomePage({ onSelectGuideline }: HomePageProps){
  const handleNavigate = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <><HeroVideo onNavigate={handleNavigate}/><IntroSection/><GuidelineScroller onSelectGuideline={onSelectGuideline}/><WhyPlatform/><InspirationGallery/></>
}
