import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-2 items-end min-h-[80vh]">
        <div className="max-w-xl">
          <p className="uppercase tracking-[0.3em] text-xs text-black/60">Eau de Parfum</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">KAYAN</h1>
          <p className="mt-4 text-black/70 max-w-md">A black & white minimal house for modern fragrance. Crafted with restraint. Worn with intent.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#shop" className="px-5 py-2.5 bg-black text-white rounded-full text-sm hover:bg-black/90 transition-colors">Discover</a>
            <a href="#story" className="px-5 py-2.5 border border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors">Our Story</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
    </section>
  )
}

export default Hero
