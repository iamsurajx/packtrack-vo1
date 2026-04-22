import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-white text-xl font-bold">Pack<span className="text-indigo-400">Track</span></div>
          <p className="text-sm mt-2 text-gray-400">Greater Noida se curated deals. No fake discounts.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Trust</h4>
          <p className="text-sm text-gray-400">We earn commission from Myntra, Flipkart at no extra cost to you. Prices verified daily.</p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">© 2026 PackTrack. All rights reserved.</div>
    </footer>
  )
}