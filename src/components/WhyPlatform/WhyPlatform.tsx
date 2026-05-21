
const data=[
{title:'Consistency',text:'A creative platform helps us show up clearly and consistently.'},
{title:'Effectiveness',text:'It makes our work simpler and more effective.'},
{title:'Long term / Short term',text:'We can work both long and short term under one platform.'}]

export default function WhyPlatform(){
return (<section className="section">
<h2 style={{marginBottom:'40px'}}>Why a creative platform?</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px'}}>
{data.map(item=><div className="card" key={item.title}><h3 style={{marginBottom:'20px'}}>{item.title}</h3><p>{item.text}</p></div>)}
</div></section>)}
