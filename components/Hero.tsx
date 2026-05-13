'use client'
import { useEffect, useState, useRef } from 'react'
import { ChevronDown, Play, Code2, Video, Sparkles } from 'lucide-react'

const ROLES = ['AI Video Prompt Engineer','Fullstack Developer','Creative Technologist']

export default function Hero() {
  const [ri, setRi] = useState(0)
  const [txt, setTxt] = useState('')
  const [fwd, setFwd] = useState(true)
  const [vis, setVis] = useState(false)
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t) }, [])

  // Typing
  useEffect(() => {
    const role = ROLES[ri]
    if (fwd) {
      if (txt.length < role.length) { const t = setTimeout(() => setTxt(role.slice(0, txt.length+1)), 52); return () => clearTimeout(t) }
      else { const t = setTimeout(() => setFwd(false), 2100); return () => clearTimeout(t) }
    } else {
      if (txt.length > 0) { const t = setTimeout(() => setTxt(txt.slice(0,-1)), 26); return () => clearTimeout(t) }
      else { setRi((ri+1)%ROLES.length); setFwd(true) }
    }
  }, [txt, fwd, ri])

  // Particles
  useEffect(() => {
    const c = canvas.current; if (!c) return
    const ctx = c.getContext('2d'); if (!ctx) return
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)
    const COLS = ['rgba(99,102,241,','rgba(6,182,212,','rgba(244,63,94,','rgba(251,191,36,','rgba(16,185,129,']
    const ps = Array.from({length:70}, () => ({
      x: Math.random()*c.width, y: Math.random()*c.height,
      vx:(Math.random()-.5)*.28, vy:(Math.random()-.5)*.28,
      r: Math.random()*1.6+.4,
      col: COLS[Math.floor(Math.random()*COLS.length)],
      a: Math.random()*.55+.15,
    }))
    let raf: number
    function draw() {
      if (!ctx||!c) return
      ctx.clearRect(0,0,c.width,c.height)
      ps.forEach(p => {
        p.x+=p.vx; p.y+=p.vy
        if(p.x<0) p.x=c.width; if(p.x>c.width) p.x=0
        if(p.y<0) p.y=c.height; if(p.y>c.height) p.y=0
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fillStyle=p.col+p.a+')'; ctx.fill()
      })
      raf=requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize',resize) }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden stars">
      <canvas ref={canvas} className="absolute inset-0 pointer-events-none" style={{opacity:.65}} />
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] -top-28 -left-28" style={{background:'radial-gradient(circle,rgba(99,102,241,.38),transparent)'}} />
      <div className="orb w-[420px] h-[420px] -bottom-16 -right-16" style={{background:'radial-gradient(circle,rgba(6,182,212,.28),transparent)',animationDelay:'3s'}} />
      <div className="orb w-64 h-64 top-1/2 right-1/4" style={{background:'radial-gradient(circle,rgba(244,63,94,.12),transparent)',animationDelay:'5s'}} />
      {/* Grid */}
      <div className="absolute inset-0 pgrid pointer-events-none" />

      <div className={`relative z-10 max-w-6xl mx-auto px-5 md:px-8 text-center transition-all duration-1000 ${vis?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10 cursor-default hover:scale-105 transition-transform"
          style={{background:'rgba(99,102,241,.1)',border:'1px solid rgba(99,102,241,.3)',boxShadow:'0 0 25px rgba(99,102,241,.18)'}}>
          <span className="relative flex w-2.5 h-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"/>
            <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-emerald-400"/>
          </span>
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.68rem',letterSpacing:'.18em',color:'#67e8f9'}}>AVAILABLE FOR PROJECTS</span>
          <Sparkles size={11} className="text-indigo-300" />
        </div>

        {/* Name */}
        <h1 className="mb-6 leading-none" style={{fontFamily:'Orbitron,monospace',fontWeight:900,fontSize:'clamp(3.8rem,14vw,9.5rem)',letterSpacing:'-.03em'}}>
          <span style={{background:'linear-gradient(135deg,#818cf8 0%,#67e8f9 30%,#fb7185 60%,#fde68a 100%)',backgroundSize:'300% 300%',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',animation:'prism 5s ease infinite',filter:'drop-shadow(0 0 50px rgba(99,102,241,.55))'}}>
            JOYEL SHAJI
          </span>
        </h1>

        {/* Dual badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{background:'rgba(99,102,241,.12)',border:'1px solid rgba(99,102,241,.35)'}}>
            <Video size={13} style={{color:'#a5b4fc'}} />
            <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.7rem',color:'#a5b4fc',letterSpacing:'.1em'}}>AI VIDEO CREATOR</span>
          </div>
          <span style={{color:'rgba(148,163,184,.3)',fontSize:'1rem'}}>+</span>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{background:'rgba(6,182,212,.1)',border:'1px solid rgba(6,182,212,.3)'}}>
            <Code2 size={13} style={{color:'#67e8f9'}} />
            <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.7rem',color:'#67e8f9',letterSpacing:'.1em'}}>WEB DEVELOPER</span>
          </div>
        </div>

        {/* Typing line */}
        <div className="h-10 flex items-center justify-center mb-8">
          <p style={{fontSize:'1.1rem',fontWeight:700,color:'#a5b4fc',letterSpacing:'.02em'}}>
            {txt}<span className="cur"/>
          </p>
        </div>

        {/* Bio */}
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-base">
          I live at the intersection of <span style={{color:'#a5b4fc',fontWeight:700}}>creativity</span> and{' '}
          <span style={{color:'#67e8f9',fontWeight:700}}>technology</span> — crafting AI videos scene-by-scene,
          building web apps from scratch, and exploring every corner of generative AI.{' '}
          <span style={{color:'#fbbf24',fontWeight:600}}>The future is being built right now, and I want to be part of building it.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a href="#videos" className="btn-p flex items-center gap-2.5 font-bold tracking-widest px-9 py-4 rounded-full text-sm uppercase w-full sm:w-auto justify-center"
            style={{fontFamily:'JetBrains Mono,monospace'}}>
            <Play size={14} fill="white"/> Watch My Work
          </a>
          <a href="#devwork" className="btn-g flex items-center gap-2.5 font-bold tracking-widest px-9 py-4 rounded-full text-sm uppercase w-full sm:w-auto justify-center"
            style={{fontFamily:'JetBrains Mono,monospace'}}>
            <Code2 size={14}/> Dev Projects
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto mb-20">
          {[['6+','AI Videos'],['3+','Web Apps'],['50+','Prompts'],['5+','AI Tools']].map(([n,l],i) => (
            <div key={l} className="glass rounded-2xl px-4 py-4 cursor-default group hover:scale-105 hover:border-indigo-400/40 transition-all reveal" style={{animationDelay:`${.1+i*.08}s`}}>
              <div style={{fontFamily:'Orbitron,monospace',fontWeight:900,fontSize:'1.8rem',background:'linear-gradient(135deg,#a5b4fc,#67e8f9)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',filter:'drop-shadow(0 0 14px rgba(99,102,241,.5))'}}>{n}</div>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'rgba(148,163,184,.5)',letterSpacing:'.1em',textTransform:'uppercase',marginTop:'4px'}}>{l}</div>
            </div>
          ))}
        </div>

        <a href="#about" className="inline-flex flex-col items-center gap-1.5 group transition-all hover:scale-105">
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.62rem',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(148,163,184,.35)'}} className="group-hover:text-indigo-400 transition-colors">Scroll</span>
          <ChevronDown size={16} style={{color:'rgba(148,163,184,.3)'}} className="animate-bounce group-hover:text-indigo-400 transition-colors"/>
        </a>
      </div>
    </section>
  )
}
