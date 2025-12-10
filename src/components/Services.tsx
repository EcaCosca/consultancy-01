export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Core <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From talent acquisition to complete project delivery, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* IT Staffing */}
          <div className="group bg-white dark:bg-gradient-to-br dark:from-blue-950/50 dark:to-slate-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400/60 transition-all hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-600/20 rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  👥
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">IT Staffing Solutions</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  Access a curated pool of senior developers, engineers, and IT specialists from South America. 
                  We handle vetting, onboarding, and management so you can focus on building great products.
                </p>
                <ul className="space-y-3">
                  {[
                    'Full-stack, Backend, Frontend Developers',
                    'DevOps Engineers & Cloud Architects',
                    'QA Engineers & Product Managers',
                    'Flexible engagement models (Contract, Full-time, Project-based)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* End-to-End Solutions */}
          <div className="group bg-white dark:bg-gradient-to-br dark:from-cyan-950/50 dark:to-slate-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-200 dark:border-cyan-500/30 hover:border-cyan-400 dark:hover:border-cyan-400/60 transition-all hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-600/20 rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  🚀
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">End-to-End Solutions</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  Complete project delivery from ideation to deployment. Our dedicated teams build, 
                  scale, and maintain your applications with cutting-edge technologies and best practices.
                </p>
                <ul className="space-y-3">
                  {[
                    'Custom Software Development',
                    'Cloud Migration & Infrastructure',
                    'Mobile & Web Application Development',
                    'Ongoing Support & Maintenance'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-200 dark:border-blue-500/20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technologies We Master</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {['React', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'TypeScript'].map((tech) => (
              <div key={tech} className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors border border-gray-200 dark:border-blue-500/10 hover:border-blue-400 dark:hover:border-blue-500/30">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
