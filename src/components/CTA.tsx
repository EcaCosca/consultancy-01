export default function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-blue-950 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-12 md:p-16 rounded-3xl shadow-2xl shadow-blue-500/50 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let's discuss how we can help you access world-class talent or deliver your next project end-to-end.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <a href="mailto:info@panaceaitsolutions.com" className="group px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule Consultation</span>
            </a>
            {/* <a href="tel:+15551234567" className="px-10 py-5 bg-blue-900 hover:bg-blue-800 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 border-2 border-white/30 flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Us Now</span>
            </a> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@panaceaitsolutions.com</span>
            </div>
            {/* <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (555) 123-4567</span>
            </div> */}
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
