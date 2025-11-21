import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/10 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-black tracking-widest text-xl">KAYAN</a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#fragrances" className="text-black/70 hover:text-black transition-colors">Fragrances</a>
          <a href="#story" className="text-black/70 hover:text-black transition-colors">Story</a>
          <a href="#contact" className="text-black/70 hover:text-black transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#shop" className="hidden md:inline-flex px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors rounded-full text-sm">Shop</a>
          <button className="md:hidden p-2 border border-black rounded-full" aria-label="Menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
