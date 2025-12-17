export default function Testimonials() {
  const testimonials = [
    {
      quote: "Panacea IT found us three exceptional React developers within a week. They integrated seamlessly with our team and helped us launch on time.",
      author: "Pier Dupont",
      role: "CTO, FinTech Startup",
      company: "Rack"
    },
    {
      quote: "The quality of developers is outstanding. We've been working with Panacea for 2 years and have scaled from 2 to 15 developers without any hiccups.",
      author: "Michael Johnson",
      role: "VP of Engineering",
      company: "Ambar"
    },
    {
      quote: "Best decision we made. Their end-to-end solution delivered our mobile app under budget and ahead of schedule. Highly recommend!",
      author: "Jessica Martinez",
      role: "Product Manager",
      company: "Education Plus"
    }
  ]

  const industries = ['FinTech', 'HealthTech', 'E-Commerce', 'SaaS', 'Education', 'Real Estate', 'Logistics', 'Media & Entertainment']

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Trusted by companies across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gradient-to-br dark:from-blue-950/40 dark:to-slate-900/40 p-8 rounded-xl border border-gray-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all group hover:transform hover:scale-105">
              <div className="text-blue-600 dark:text-blue-400 text-6xl mb-4 opacity-50">"</div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed italic">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold">{testimonial.author}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span key={industry} className="px-6 py-3 bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-gray-200 dark:border-blue-500/30 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
