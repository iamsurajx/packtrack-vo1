import { useState } from 'react'

export default function Header({ onSearch }) {
  const [q, setQ] = useState('')

  const handleChange = (e) => {
    const val = e.target.value
    setQ(val)
    onSearch?.(val) // live search, Enter ki zarurat nahi
  }

  return (
    <>
      <div className="bg-amber-50 text-amber-900 text- text-center py-2 px-4">
        Disclosure: PackTrack Myntra, Flipkart se affiliate commission earn karta hai. Aapko extra charge nahi.
      </div>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold tracking-tight">Pack<span className="text-indigo-600">Track</span></span>
          </div>

          <div className="flex-1 max-w-2xl mx-auto">
            <input
              value={q}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-full px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Shirts under 500 search karein..."
            />
          </div>

          <a href="https://t.me/" target="_blank" className="hidden md:inline-flex bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-indigo-700">
            Telegram
          </a>
        </div>
      </header>
    </>
  )
}