
export default function IntroSection() {
  return (
    <section className="section">
      <div className="card">
        <h2 style={{ marginBottom:'20px' }}>Introducing the Creative Platform</h2>
        <p style={{ lineHeight:1.8, marginBottom:'20px' }}>
          One simple creative platform for everything we say and do, across all channels and touchpoints.
        </p>
        <a href="/docs/creative-platform.pdf" download style={{ display:'inline-block', padding:'12px 24px', background:'#384089', color:'white', borderRadius:'10px' }}>
          Download PDF
        </a>
      </div>
    </section>
  )
}
