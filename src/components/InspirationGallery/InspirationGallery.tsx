
const images=Array.from({length:12},(_,i)=>({id:i,src:`/images/dummy-gallery-${(i % 6) + 1}.svg`}))
export default function InspirationGallery(){
return (<section className="section"><h2 style={{textAlign:'center',marginBottom:'40px'}}>Activation Inspiration</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px'}}>
{images.map(image=><img key={image.id} src={image.src} alt="" style={{width:'100%',borderRadius:'20px'}} />)}
</div></section>)}
