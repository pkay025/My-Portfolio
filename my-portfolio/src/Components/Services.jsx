import React from 'react'
import { Code2, Palette, Rocket, Shield, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Responsive, accessible UI with React + Tailwind for clean, fast interfaces.',
    Icon: Palette,
  },
  {
    id: 2,
    title: 'Backend APIs',
    description: 'Node.js REST APIs with robust structure, validation, and error handling.',
    Icon: Code2,
  },
  {
    id: 3,
    title: 'Performance & SEO',
    description: 'Improve Core Web Vitals, loading strategy, and metadata for discoverability.',
    Icon: Rocket,
  },
  {
    id: 4,
    title: 'Security & Best Practices',
    description: 'Hardened auth, input sanitization, and safe deployments for reliability.',
    Icon: Shield,
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 px-5 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* subtle background accents */}
      <div className="pointer-events-none absolute -z-10 right-10 -top-10 size-72 rounded-full border border-cyan-200/60" />
      <div className="pointer-events-none absolute -z-10 right-24 -top-24 size-72 rounded-full border border-cyan-100/60" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-[11px] md:text-xs uppercase tracking-wider font-medium bg-gradient-to-r from-cyan-900 to-cyan-500 text-white rounded-full px-3 py-1 mb-3 shadow-sm">Services</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">What I Can Do For You</h2>
          <p className="mt-3 text-gray-700">High-quality, maintainable solutions with performance and accessibility baked in.</p>
        </div>

        {/* Card grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map(({ id, title, description, Icon }) => (
            <div
              key={id}
              className="group relative rounded-2xl border border-cyan-100/70 bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-cyan-50 to-transparent" />
              <div className="relative p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-50 text-cyan-900 shadow-sm ring-1 ring-cyan-100 group-hover:scale-105 transition">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-cyan-900 font-medium border-b border-cyan-300/70 pb-1 hover:border-cyan-900"
                >
                  Get this service <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 md:mt-16 rounded-2xl p-[1px] bg-gradient-to-r from-cyan-900 to-cyan-500">
          <div className="rounded-2xl bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Ready to build something great?</h3>
              <p className="text-gray-700">Let’s align on scope and get your project moving.</p>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-cyan-900 to-cyan-500 text-white px-6 py-3 rounded-full shadow-md font-medium hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-cyan-300">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
