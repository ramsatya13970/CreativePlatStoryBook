type GuidelinePageProps = {
  onBack: () => void
}

export default function CopyGuidelines({ onBack }: GuidelinePageProps){return <div className="section"><button type="button" className="back-button" onClick={onBack}>Back</button><div className="card"><h1>Copy Guidelines</h1></div></div>}
