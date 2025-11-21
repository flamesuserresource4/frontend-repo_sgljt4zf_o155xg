function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} KAYAN — All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-black/70 hover:text-black">Instagram</a>
          <a href="#" className="text-black/70 hover:text-black">X</a>
          <a href="/test" className="text-black/70 hover:text-black">System</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
