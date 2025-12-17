export default function WhyUs() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Perfect Match Guarantee',
      description: 'Our rigorous vetting process ensures you get developers who aren\'t just skilled, but culturally aligned with your team and business goals.'
    },
    {
      icon: '⏱️',
      title: 'Rapid Deployment',
      description: 'Access pre-vetted talent within 48 hours. Our streamlined process gets your team up and running faster than traditional hiring.'
    },
    {
      icon: '💰',
      title: 'Cost-Effective Excellence',
      description: 'Access world-class South American talent at competitive rates without compromising on quality or communication.'
    },
    {
      icon: '🌐',
      title: 'Timezone Compatibility',
      description: 'South American developers work in similar timezones to US companies, enabling real-time collaboration and faster project delivery.'
    },
    {
      icon: '🛡️',
      title: 'Trial Period',
      description: 'We offer a 2-week trial period with no questions asked replacement guarantee to ensure the perfect fit.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Account Manager',
      description: 'Your success is our priority. Each client gets a dedicated account manager for seamless communication and support.'
    }
  ]

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Why <span className="text-blue-600 dark:text-blue-400">Panacea IT</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We bridge continents and connect exceptional talent with visionary companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gradient-to-br dark:from-blue-950/40 dark:to-slate-900/40 p-8 rounded-xl border border-gray-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all group hover:transform hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{reason.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
