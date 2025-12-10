import logo from '../assets/1747971427723pits.jpg'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 py-12 px-4 border-t border-gray-200 dark:border-blue-500/20 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Panacea IT Solutions" className="h-12 w-auto rounded-lg" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Panacea IT Solutions</h3>
                <p className="text-sm text-blue-600 dark:text-blue-300">Connecting Talent, Delivering Solutions</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Your trusted partner for accessing world-class South American IT talent and comprehensive technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Why Us</a></li>
              <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Process</a></li>
              <li><a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Facebook</a></li>
              <li><a href="mailto:info@panaceaitsolutions.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-blue-500/20 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2025 Panacea IT Solutions. All rights reserved.</p>
          <p className="text-gray-500 dark:text-gray-500 mt-2">Bridging continents, building futures.</p>
        </div>
      </div>
    </footer>
  )
}
