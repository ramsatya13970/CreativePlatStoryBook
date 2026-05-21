
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import VisualGuidelines from './pages/VisualGuidelines'
import CopyGuidelines from './pages/CopyGuidelines'
import DosDonts from './pages/DosDonts'

export type GuidelinePage = 'visual' | 'copy' | 'dos-donts'

export default function App() {
  const [activePage, setActivePage] = useState<GuidelinePage | 'home'>('home')

  useEffect(() => {
    const basePath = import.meta.env.BASE_URL

    if (window.location.pathname !== basePath) {
      window.history.replaceState(null, '', basePath)
    }
  }, [])

  const handleSelectPage = (page: GuidelinePage) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackHome = () => {
    setActivePage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (activePage === 'visual') {
    return <VisualGuidelines onBack={handleBackHome} />
  }

  if (activePage === 'copy') {
    return <CopyGuidelines onBack={handleBackHome} />
  }

  if (activePage === 'dos-donts') {
    return <DosDonts onBack={handleBackHome} />
  }

  return (
    <HomePage onSelectGuideline={handleSelectPage} />
  )
}
