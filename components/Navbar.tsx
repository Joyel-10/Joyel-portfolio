'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const L = [
  {l:'Home',h:'#home'},{l:'About',h:'#about'},{l:'AI Videos',h:'#videos'},
  {l:'Dev Work',h:'#devwork'},{l:'Gallery',h:'#gallery'},{l:'Music',h:'#music'},
  {l:'Skills',h:'#skills'},{l:'Contact',h:'#contact'},
]

export default function Navbar() {
  const [open,setOpen]=useState(false)
  const [sc,setSc]=useState(false)
  useEffect(()=>{
    const fn=()=>setSc(window.scrollY>50)
    window.addEventListener('scroll',fn)
    return ()=>window.removeEventListener('scroll',fn)
  },[])

  const ns:React.CSSProperties=sc?{
    padding:'12px 0',background:'rgba(0,0,10,.88)',
    backdropFilter:'blur(30px) saturate(200%)',
    WebkitBackdropFilter:'blur(30px) saturate(200%)',
    borderBottom:'1px solid rgba(99,102,241,.15)',
    boxShadow:'0 4px 40px rgba(99,102,241,.1)',
  }:{padding:'22px 0'}

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={ns}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            style={{background:'linear-gradient(135deg,#4f46e5,#06b6d4)',boxShadow:'0 0 24px rgba(99,102,241,.5)'}}>
            <Zap size={16} className="text-white"/>
          </div>
          <div>
            <div style={{fontFamily:'Orbitron,monospace',fontWeight:900,fontSize:'.82rem',letterSpacing:'.25em',background:'linear-gradient(135deg,#a5b4fc,#67e8f9)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>JOYEL</div>
            <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.5rem',color:'rgba(103,232,249,.55)',letterSpacing:'.15em'}}>AI CREATOR & DEV</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-0.5">
          {L.map(({l,h})=>(
            <li key={h}><a href={h} className="nav-a px-3.5 py-2 block hover:text-indigo-300">{l}</a></li>
          ))}
        </ul>

        <a href="#contact" className="hidden lg:flex items-center gap-2 btn-p font-bold tracking-widest px-6 py-2.5 rounded-full text-xs uppercase"
          style={{fontFamily:'JetBrains Mono,monospace'}}>
          Hire Me
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"/>
            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400"/>
          </span>
        </a>

        <button onClick={()=>setOpen(!open)} className="lg:hidden transition-all hover:scale-110" style={{color:'#a5b4fc'}}>
          {open?<X size={22}/>:<Menu size={22}/>}
        </button>
      </div>

      {open&&(
        <div className="lg:hidden mt-3 mx-4 rounded-2xl p-5"
          style={{background:'rgba(0,0,10,.97)',backdropFilter:'blur(30px)',border:'1px solid rgba(99,102,241,.22)',boxShadow:'0 20px 60px rgba(99,102,241,.18)'}}>
          {L.map(({l,h})=>(
            <a key={h} href={h} onClick={()=>setOpen(false)}
              className="flex items-center gap-3 py-3 px-3 rounded-xl mb-1 transition-all hover:bg-indigo-500/10 text-slate-300 hover:text-indigo-300"
              style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.78rem',letterSpacing:'.1em',textTransform:'uppercase'}}>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"/>
              {l}
            </a>
          ))}
          <a href="#contact" onClick={()=>setOpen(false)}
            className="btn-p mt-3 font-bold tracking-widest py-3 rounded-xl text-xs uppercase block text-center"
            style={{fontFamily:'JetBrains Mono,monospace'}}>Hire Me ✦</a>
        </div>
      )}
    </nav>
  )
}
