function Features() {
  const items = [
    { title: 'Minimal Form', desc: 'Monochrome design. Iconic silhouette. Elevated presence.' },
    { title: 'Refined Notes', desc: 'Cedar, bergamot, iris. A composition of clarity and depth.' },
    { title: 'Considered Craft', desc: 'Small batches. Responsible sourcing. Lasting impression.' },
  ]
  return (
    <section id="fragrances" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((it) => (
            <div key={it.title} className="border-t border-black/10 pt-6">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-black/70 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
