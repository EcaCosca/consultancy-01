export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'Share your needs, timeline, and budget. We discuss your project requirements and team culture.',
      icon: '📞'
    },
    {
      step: '02',
      title: 'Talent Matching',
      description: 'We handpick candidates from our vetted talent pool who match your technical and cultural requirements.',
      icon: '🔍'
    },
    {
      step: '03',
      title: 'Interview & Select',
      description: 'Meet the candidates, conduct interviews, and choose the perfect fit for your team.',
      icon: '✅'
    },
    {
      step: '04',
      title: 'Onboard & Scale',
      description: 'Your new team member starts working. Scale up or down as needed with our flexible engagement model.',
      icon: '🚀'
    }
  ]

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-blue-600 dark:text-blue-400">Simple Process</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From consultation to deployment in 4 easy steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all group hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 group-hover:scale-110 transition-transform relative z-10">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
