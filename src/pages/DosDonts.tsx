type GuidelinePageProps = {
  onBack: () => void
}

export default function DosDonts({ onBack }: GuidelinePageProps){return <div className="section"><button type="button" className="back-button" onClick={onBack}>Back</button><div className="card"><h1>Do's & Don'ts</h1></div></div>}
