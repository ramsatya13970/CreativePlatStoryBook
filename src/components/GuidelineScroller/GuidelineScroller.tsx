import type { GuidelinePage } from '../../App'

const items = [
  { title: 'Visual Guidelines', page: 'visual' },
  { title: 'Copy Guidelines', page: 'copy' },
  { title: "Do's & Don'ts", page: 'dos-donts' },
] satisfies Array<{ title: string; page: GuidelinePage }>

type GuidelineScrollerProps = {
  onSelectGuideline: (page: GuidelinePage) => void
}

export default function GuidelineScroller({ onSelectGuideline }: GuidelineScrollerProps) {
  return (
    <section className="section">
      <h2 style={{ marginBottom: '30px' }}>Guidelines</h2>
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => onSelectGuideline(item.page)}
            className="card guideline-button"
            style={{
              minWidth: '320px',
              height: '220px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </section>
  )
}
