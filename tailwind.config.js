/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: { xs: '400px' },
      keyframes: {
        float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-18px)'}},
        glow:{'0%,100%':{opacity:'0.2',transform:'scale(1)'},'50%':{opacity:'0.35',transform:'scale(1.1)'}},
        shimmer:{'0%':{backgroundPosition:'-200% center'},'100%':{backgroundPosition:'200% center'}},
        prism:{'0%,100%':{backgroundPosition:'0% 50%'},'50%':{backgroundPosition:'100% 50%'}},
        scan:{'0%':{transform:'translateY(-100%)'},'100%':{transform:'translateY(800%)'}},
        drift:{'0%,100%':{transform:'translateX(0) translateY(0)'},'33%':{transform:'translateX(8px) translateY(-6px)'},'66%':{transform:'translateX(-5px) translateY(4px)'}},
        borderGlow:{'0%,100%':{borderColor:'rgba(99,102,241,0.4)'},'33%':{borderColor:'rgba(6,182,212,0.4)'},'66%':{borderColor:'rgba(244,63,94,0.4)'}},
        reveal:{'0%':{opacity:'0',transform:'translateY(24px)'},'100%':{opacity:'1',transform:'translateY(0)'}},
        countUp:{'0%':{opacity:'0',transform:'scale(0.8)'},'100%':{opacity:'1',transform:'scale(1)'}},
        blink:{'0%,100%':{opacity:'1'},'50%':{opacity:'0'}},
        spin:{'0%':{transform:'rotate(0deg)'},'100%':{transform:'rotate(360deg)'}},
        ping:{'75%,100%':{transform:'scale(2)',opacity:'0'}},
      },
      animation: {
        float:'float 7s ease-in-out infinite',
        'float-d':'float 9s ease-in-out infinite 2s',
        glow:'glow 6s ease-in-out infinite',
        shimmer:'shimmer 2.8s linear infinite',
        prism:'prism 6s ease infinite',
        scan:'scan 4s linear infinite',
        drift:'drift 8s ease-in-out infinite',
        borderGlow:'borderGlow 4s linear infinite',
        reveal:'reveal 0.7s cubic-bezier(0.23,1,0.32,1) forwards',
        countUp:'countUp 0.5s cubic-bezier(0.23,1,0.32,1) forwards',
        blink:'blink 1s step-end infinite',
        'spin-slow':'spin 16s linear infinite',
        'spin-rev':'spin 22s linear infinite reverse',
        ping:'ping 1s cubic-bezier(0,0,0.2,1) infinite',
      }
    }
  },
  plugins: [],
}
