import { Zap, Heart } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="py-10 relative overflow-hidden" style={{borderTop:'1px solid rgba(99,102,241,.12)'}}>
      <div className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(to top,rgba(99,102,241,.04),transparent)'}}/>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-12"
            style={{background:'linear-gradient(135deg,#4f46e5,#06b6d4)',boxShadow:'0 0 20px rgba(99,102,241,.45)'}}>
            <Zap size={14} className="text-white"/>
          </div>
          <div>
            <div style={{fontFamily:'Orbitron,monospace',fontWeight:900,fontSize:'.75rem',letterSpacing:'.25em',background:'linear-gradient(135deg,#a5b4fc,#67e8f9)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>JOYEL</div>
            <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.5rem',color:'rgba(103,232,249,.5)',letterSpacing:'.12em'}}>AI CREATOR & DEV</div>
          </div>
        </a>
        <p className="flex items-center gap-1.5" style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.62rem',color:'rgba(148,163,184,.3)'}}>
          Built with <Heart size={10} className="text-rose-500" fill="#f43f5e"/> and AI · Kerala, India · {new Date().getFullYear()}
        </p>
        <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.62rem',color:'rgba(148,163,184,.3)'}}>
          <span className="hover:text-indigo-400 transition-colors cursor-default" style={{color:'#818cf8'}}>Next.js</span>
          {' · '}
          <span className="hover:text-cyan-400 transition-colors cursor-default" style={{color:'#67e8f9'}}>Tailwind</span>
          {' · '}
          <span className="hover:text-rose-400 transition-colors cursor-default" style={{color:'#fb7185'}}>Lucide</span>
        </div>
      </div>
    </footer>
  )
}
