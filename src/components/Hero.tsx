import VideoBackground from './VideoBackground'

export default function Hero() {
  return (
    <VideoBackground>
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-blue-600/30 backdrop-blur-sm border border-blue-400/50 rounded-full text-blue-200 dark:text-blue-100 text-sm font-semibold">
              🌎 Connecting Talent with Opportunity
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
            Elite IT Staffing &
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent mt-2">
              End-to-End Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Access top-tier developers worldwide. We match your needs with exceptional talent 
            and deliver comprehensive IT solutions that drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/50 flex items-center space-x-2">
              <span>Schedule Free Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#services" className="px-10 py-5 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/80 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 border-2 border-blue-500/50 hover:border-blue-400">
              Explore Our Services
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {[
              { value: '85', label: 'Developers Placed' },
              { value: '35', label: 'Happy Clients' },
              { value: '95%', label: 'Client Retention' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="bg-slate-900/70 backdrop-blur-md p-6 rounded-xl border border-blue-500/30">
                <div className="text-4xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-gray-300 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </VideoBackground>
  )
}
