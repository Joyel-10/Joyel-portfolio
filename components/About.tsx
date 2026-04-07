'use client'
import { Brain, Rocket, Heart, Globe, Zap, Sparkles } from 'lucide-react'

const TRAITS = [
  {icon:Brain, label:'AI Enthusiast', desc:"I use AI for everything — video, code, music, writing. It's not a trend for me, it's my natural way of working.", color:'#6366f1'},
  {icon:Rocket, label:'Always Exploring', desc:'Every week I try a new AI tool, a new prompt technique, or build something I\'ve never done before. The exploration never stops.', color:'#06b6d4'},
  {icon:Heart, label:'Fully Passionate', desc:'When I\'m generating scenes, crafting prompts, or debugging code — I\'m completely in my element. This work makes me happy.', color:'#f43f5e'},
  {icon:Globe, label:'Craving What\'s Next', desc:'I look at AI video, generative media, and spatial computing and see a future I genuinely want to help build.', color:'#f59e0b'},
  {icon:Zap, label:'Eager to Learn', desc:'Both in AI creation and web development, I want to keep growing. The fact that there\'s so much more to learn excites me every day.', color:'#10b981'},
  {icon:Sparkles, label:'Creative at Core', desc:'I directed AI scenes like a filmmaker, composed music with AI, and built portfolio sites from scratch. Creativity runs through everything I do.', color:'#8b5cf6'},
]

export default function About() {
  return (
    <section id="about" className="sp relative overflow-hidden">
      <div className="orb w-96 h-96 top-0 right-0" style={{background:'radial-gradient(circle,rgba(6,182,212,.22),transparent)'}} />
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Top: Photo + Text */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute w-80 h-80 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{border:'1px dashed rgba(99,102,241,.18)',animation:'spin 18s linear infinite'}} />
            <div className="absolute w-64 h-64 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{border:'1px dashed rgba(6,182,212,.14)',animation:'spin 24s linear infinite reverse'}} />

            <div className="relative z-10 prism rounded-[2rem]">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-[2rem] scan overflow-hidden"
                style={{border:'1px solid rgba(255,255,255,.1)',boxShadow:'0 0 90px rgba(99,102,241,.38),0 0 45px rgba(6,182,212,.18),inset 0 1px 0 rgba(255,255,255,.18)'}}>
                <div className="w-full h-full flex items-center justify-center relative"
                  style={{background:'linear-gradient(145deg,rgba(99,102,241,.22) 0%,rgba(6,182,212,.14) 50%,rgba(244,63,94,.1) 100%)'}}>
                  <div className="absolute inset-0 pgrid opacity-20" />
                 
                  <div className="relative z-10 text-center">
                   
                    <img src="2.png" alt="" />
                    
                  </div>
                </div>
              </div>
              {/* Corner accents */}
              {([['top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl','#6366f1'],['top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl','#06b6d4'],['bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl','#06b6d4'],['bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl','#f43f5e']] as const).map(([cls,clr],i) => (
                <div key={i} className={`absolute -inset-0.5 w-9 h-9 ${cls}`} style={{borderColor:clr,boxShadow:`0 0 14px ${clr}77`}} />
              ))}
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 z-20 px-4 py-3 rounded-2xl cursor-default hover:scale-105 transition-transform"
              style={{background:'rgba(0,0,10,.95)',backdropFilter:'blur(20px)',border:'1px solid rgba(16,185,129,.35)',boxShadow:'0 0 32px rgba(16,185,129,.22)'}}>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',color:'rgba(148,163,184,.45)',letterSpacing:'.1em',textTransform:'uppercase'}}>Status</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"/>
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400"/>
                </span>
                <span style={{fontSize:'.82rem',fontWeight:700,color:'#6ee7b7'}}>Open to work</span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 z-20 px-4 py-3 rounded-2xl cursor-default hover:scale-105 transition-transform"
              style={{background:'rgba(0,0,10,.95)',backdropFilter:'blur(20px)',border:'1px solid rgba(99,102,241,.35)',boxShadow:'0 0 22px rgba(99,102,241,.18)'}}>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.68rem',color:'#a5b4fc'}}>📍 Kerala, India</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="sl mb-5">About Me</div>
            <h2 className="font-black mb-6 leading-tight" style={{fontFamily:'Orbitron,monospace',fontSize:'clamp(1.9rem,4.5vw,3rem)'}}>
              I Don't Just Use AI.<br/><span className="tg">I Think in AI.</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                Hey, I'm Joyel — a creative from Kerala who genuinely gets excited waking up to explore the latest AI tools.
                Whether it's generating cinematic video scenes, building a web app, or composing music with AI —{' '}
                <span style={{color:'#a5b4fc',fontWeight:600}}>I'm completely all in.</span>
              </p>
              <p>
                I came from a finance background and somehow ended up directing AI short films scene by scene,
                building portfolio websites from scratch, and exploring every corner of generative AI.
                That journey taught me that{' '}
                <span style={{color:'#67e8f9',fontWeight:600}}>curiosity and the right tools can take you anywhere.</span>
              </p>
              <p>
                There's so much more to explore in AI video, web development, and what happens when they combine.
                I'm eager to learn more in both — and honestly,{' '}
                <span style={{color:'#fbbf24',fontWeight:600}}>the fact that I'm still at the beginning is the most exciting part.</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['AI Video','Prompt Engineering','React','Next.js','Three.js','CapCut','Kling AI','Runway ML','Flat AI','Midjourney'].map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Trait cards */}
        <div className="text-center mb-10">
          <div className="sl justify-center mb-4">What Drives Me</div>
          <h3 className="font-black" style={{fontFamily:'Orbitron,monospace',fontSize:'clamp(1.6rem,3.5vw,2.5rem)'}}>
            <span className="tg">The Real Story</span>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAITS.map(({icon:Icon,label,desc,color},i) => (
            <div key={label} className={`card rounded-2xl p-6 cursor-default reveal d${i+1}`} style={{borderColor:`${color}22`}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                style={{background:`${color}15`,border:`1px solid ${color}30`}}>
                <Icon size={19} style={{color}}/>
              </div>
              <h4 className="font-bold text-slate-100 mb-2" style={{fontSize:'.92rem'}}>{label}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
