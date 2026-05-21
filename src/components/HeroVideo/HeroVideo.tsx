export default function HeroVideo() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <img src="/videos/dummy-hero-video.svg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.45)', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', color:'white' }}>
        <div>
          <h1 style={{ fontSize:'4rem', marginBottom:'20px' }}>Moments you can't get with a click</h1>
          <h2 style={{ fontSize:'2rem' }}>Creative Platform</h2>
        </div>
      </div>
    </section>
  )
}
