import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Videos from '../components/Videos'
import DevWork from '../components/DevWork'
import Gallery from '../components/Gallery'
import Music from '../components/Music'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main style={{background:'#00000a',minHeight:'100vh'}}>
      <Navbar />
      <Hero />
      <About />
      <Videos />
      <DevWork />
      <Gallery />
      <Music />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
