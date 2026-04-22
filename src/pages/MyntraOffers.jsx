import { useNavigate } from 'react-router-dom'

const offers = [
  {
    id: 1,
    title: "Personal Care Under ₹1200",
    image: "https://asset22.ckassets.com/resources/image/staticpage_images/%E2%80%A81-1776426300.png",
    price: 799,
    starting: "Shipped in 3-4 days",
    profit: "Upto 8% Profit",
    link: "https://myntr.it/pJDb64D"
  },
  {
    id: 2,
    title: "Jewellery Sets",
    image: "https://asset22.ckassets.com/resources/image/staticpage_images/02%2031-1738578816.jpg",
    price: 244,
    starting: "Starting from",
    profit: "Upto 8% Profit",
    link: "https://myntr.it/GRH1CS6"
  },
]

export default function MyntraOffers() {
  const navigate = useNavigate()

  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
    const t = document.createElement('div')
    t.textContent = 'Copied!'
    t.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm z-50 shadow-lg'
    document.body.appendChild(t)
    setTimeout(() => t.remove(), 1200)
  }

  const shareWhatsApp = (link, title) => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${link}`)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-300 via-teal-300 to-cyan-400 p-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 text-white/90 hover:text-white font-medium"
        >
          ← Back
        </button>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {offers.map((o) => (
            <div 
              key={o.id} 
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* IMAGE AREA */}
              <div className="relative h-64 flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                
                {/* Myntra Logo */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow-md">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">MYNTRA</span>
                </div>

                {/* Profit Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-md">
                  {o.profit}
                </div>

                <img 
                  src={o.image} 
                  alt={o.title} 
                  className="max-h-52 max-w-[80%] object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105" 
                />
              </div>

              {/* DETAILS */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900 line-clamp-2">{o.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{o.starting}</p>
              <p className="text-xl font-bold text-gray-900 mt-1">₹{o.price}</p>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => copyLink(o.link)}
                  className="flex-1 h-11 bg-gray-100 text-gray-900 text-sm font-semibold rounded-xl hover:bg-gray-200 active:scale-95 transition"
                >
                  Copy Link
                </button>
                <button
                  onClick={() => shareWhatsApp(o.link, o.title)}
                  className="flex-1 h-11 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 transition flex items-center justify-center gap-2"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2.9-2 2v12c0 1.1.9 2 2 2h14l4 4V6c0-1.1-.9-2-2-2z"/>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
