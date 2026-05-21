type GuidelinePageProps = {
  onBack: () => void
}

export default function VisualGuidelines({ onBack }: GuidelinePageProps){return <div className="section"><button type="button" className="back-button" onClick={onBack}>Back</button><div className="card"><h1>Visual Guidelines</h1></div></div>}
