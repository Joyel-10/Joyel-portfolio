'use client'
import { useState } from 'react'
import { Send, Mail, Github, Linkedin, Twitter, CheckCircle, Sparkles, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [sent,setSent]=useState(false)
  const [form,setForm]=useState({name:'',email:'',type:'',msg:''})
  const [fc,setFc]=useState<string|null>(null)

  const ist=(id:string):React.CSSProperties=>({
    background:fc===id?'rgba(99,102,241,.07)':'rgba(255,255,255,.025)',
    border:fc===id?'1px solid rgba(99,102,241,.58)':'1px solid rgba(255,255,255,.08)',
    boxShadow:fc===id?'0 0 0 3px rgba(99,102,241,.12),0 0 28px rgba(99,102,241,.15)':'none',
    transition:'all .3s ease',color:'#e2e8f0',outline:'none',fontFamily:'Syne,sans-serif',width:'100%',
  })
  
  return (
    <section id="contact" className="sp relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] -bottom-40 left-1/2 -translate-x-1/2" style={{background:'radial-gradient(circle,rgba(99,102,241,.2),transparent)'}}/>
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <div className="sl justify-center mb-5">Get In Touch</div>
          <h2 className="font-black mb-4" style={{fontFamily:'Orbitron,monospace',fontSize:'clamp(1.9rem,5vw,3.5rem)'}}>
            Let's Build <span className="tg">Something</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">AI video project, a web app, or just exploring what's possible — I'm always up for a conversation.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card rounded-3xl p-6" style={{borderColor:'rgba(99,102,241,.2)'}}>
              <h3 className="font-black text-slate-100 mb-5 flex items-center gap-2" style={{fontFamily:'Orbitron,monospace',fontSize:'.8rem',letterSpacing:'.1em'}}>
                <Sparkles size={14} style={{color:'#a5b4fc'}}/> Available For
              </h3>
              {([['🎬','AI Video Projects','Scene gen, showreels, brand videos','#6366f1'],
                 ['💻','Web Development','React / Next.js apps & portfolios','#06b6d4'],
                 ['✍️','Prompt Packs','Custom AI video prompt libraries','#f59e0b'],
                 ['🎮','Creative Tech','Experimental AI + web projects','#f43f5e']] as const).map(([e,t,d,c])=>(
                <div key={t} className="flex items-start gap-3 mb-4 last:mb-0 group cursor-default">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 text-base"
                    style={{background:`${c}15`,border:`1px solid ${c}28`}}>{e}</div>
                  <div>
                    <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{t}</div>
                    <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.62rem',color:'rgba(148,163,184,.5)'}}>{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card rounded-3xl p-5" style={{borderColor:'rgba(6,182,212,.2)'}}>
              <h3 className="font-bold text-slate-100 mb-4 text-sm flex items-center gap-2" style={{fontFamily:'Orbitron,monospace',letterSpacing:'.1em'}}>
                <MessageSquare size={13} style={{color:'#67e8f9'}}/> Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[{icon:Mail,label:'Email',color:'#6366f1',href:'ashjoyel@gmail.com'},
                  {icon:Linkedin,label:'LinkedIn',color:'#06b6d4',href:'https://www.linkedin.com/in/joyel-shaji/'},
                  {icon:Github,label:'GitHub',color:'#a5b4fc',href:'https://github.com/Joyel-10'},
                  {icon:Twitter,label:'Twitter',color:'#67e8f9',href:'#'}].map(({icon:Icon,label,color,href})=>(
                  <a key={label} href={href}
                    className="soc flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold"
                    style={{background:`${color}10`,border:`1px solid ${color}25`,color}}>
                    <Icon size={13}/>{label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 card rounded-3xl p-7 md:p-8" style={{borderColor:'rgba(99,102,241,.2)'}}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{background:'rgba(16,185,129,.15)',border:'1px solid rgba(16,185,129,.3)',boxShadow:'0 0 40px rgba(16,185,129,.2)'}}>
                  <CheckCircle size={28} className="text-emerald-400"/>
                </div>
                <h3 className="font-black text-slate-100 mb-2" style={{fontFamily:'Orbitron,monospace',fontSize:'1rem'}}>Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6">Thanks! I'll get back to you soon.</p>
                <button onClick={()=>setSent(false)} style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.75rem',color:'#a5b4fc'}}
                  className="hover:text-cyan-300 transition-colors">← Send another</button>
              </div>
            ):(
              <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[{id:'name',label:'Your Name',type:'text',ph:'Arjun Kumar'},{id:'email',label:'Email',type:'email',ph:'you@email.com'}].map(f=>(
                    <div key={f.id}>
                      <label style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'rgba(165,180,252,.6)',letterSpacing:'.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} required value={form[f.id as keyof typeof form]}
                        onChange={e=>setForm({...form,[f.id]:e.target.value})}
                        onFocus={()=>setFc(f.id)} onBlur={()=>setFc(null)}
                        className="rounded-xl px-4 py-3 text-sm" style={ist(f.id)}/>
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'rgba(165,180,252,.6)',letterSpacing:'.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Project Type</label>
                  <input type="text" placeholder="AI Video / Web App / Prompt Pack / Just chatting" required value={form.type}
                    onChange={e=>setForm({...form,type:e.target.value})}
                    onFocus={()=>setFc('type')} onBlur={()=>setFc(null)}
                    className="rounded-xl px-4 py-3 text-sm" style={ist('type')}/>
                </div>
                <div>
                  <label style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'rgba(165,180,252,.6)',letterSpacing:'.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Message</label>
                  <textarea placeholder="Tell me about your idea, project, or just say hello..." rows={5} required value={form.msg}
                    onChange={e=>setForm({...form,msg:e.target.value})}
                    onFocus={()=>setFc('msg')} onBlur={()=>setFc(null)}
                    className="rounded-xl px-4 py-3 text-sm resize-none" style={ist('msg')}/>
                </div>
                <button type="submit" className="btn-p w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold tracking-widest uppercase text-sm"
                  style={{fontFamily:'JetBrains Mono,monospace'}}>
                  <Send size={14}/> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
