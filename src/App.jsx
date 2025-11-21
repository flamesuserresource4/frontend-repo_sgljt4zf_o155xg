import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Features />
      <section id="story" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">The KAYAN Ethos</h2>
            </div>
            <div className="text-black/70 leading-relaxed">
              <p>
                KAYAN is a study in restraint. Black and white. Light and shadow. Notes that breathe. 
                We design perfumes that speak softly and stay with you.
              </p>
              <p className="mt-4">
                Each bottle is an object of quiet luxury — minimal, architectural, considered. 
                A companion to your daily rituals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
