import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const CONTACT_EMAIL = 'nunoomensahemmanuel224@gmail.com'
const GOOGLE_MAPS_QUERY = 'Ashongman Estate, Accra Ghana'

const Contact = () => {
  return (
    <section id='contact' className='relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden'>
      {/* subtle accents */}
      <div className="pointer-events-none absolute -z-10 -top-24 -left-24 w-72 h-72 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-0 -right-24 w-80 h-80 rounded-full bg-cyan-200/50 blur-3xl" />

      <div className='w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
        {/* Left: details + form */}
        <div>
          <span className="inline-block text-[11px] md:text-xs uppercase tracking-wider font-medium bg-gradient-to-r from-cyan-900 to-cyan-500 text-white rounded-full px-3 py-1 mb-2 md:mb-3 shadow-sm">Contact</span>
          <h3 className='text-3xl md:text-4xl font-semibold text-gray-900'>Let’s work together</h3>
          <p className='mt-3 text-gray-700'>Tell me about your project. I’ll get back within 24 hours.</p>

          <div className='mt-6 space-y-3 text-gray-700'>
            <div className='flex items-center gap-3'>
              <Mail size={18} />
              <a href={`mailto:${CONTACT_EMAIL}`} className='font-medium hover:text-cyan-900'>{CONTACT_EMAIL}</a>
            </div>
            <div className='flex items-center gap-3'>
              <Phone size={18} />
              <span className='font-medium'>+233 257676119</span>
            </div>
            <div className='flex items-center gap-3'>
              <MapPin size={18} />
              <span className='font-medium'>Accra, Ghana</span>
            </div>
          </div>

          <form className='mt-8 grid grid-cols-1 gap-4' action={`mailto:${CONTACT_EMAIL}`} method='GET'>
            <input type='text' name='subject' placeholder='Subject' className='w-full rounded-md border border-cyan-100 bg-white/70 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-300' />
            <textarea name='body' placeholder='Tell me about your project...' rows={5} className='w-full rounded-md border border-cyan-100 bg-white/70 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-300' />
            <button type='submit' className='bg-gradient-to-r from-cyan-900 to-cyan-500 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full sm:w-auto'>
              Send Email
            </button>
          </form>
        </div>

        {/* Right: Google Map */}
        <div>
          <div className='rounded-2xl overflow-hidden shadow-xl border border-cyan-100 bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur'>
            <iframe
              title='Google Map'
              src={`https://www.google.com/maps?q=${encodeURIComponent(GOOGLE_MAPS_QUERY)}&output=embed`}
              width='100%'
              height='530'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
          <div className='mt-3 text-right'>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_MAPS_QUERY)}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center font-medium text-cyan-900 border-b border-cyan-300/70 pb-1 hover:border-cyan-900'
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;















































