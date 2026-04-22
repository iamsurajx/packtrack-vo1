import { useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'

export default function LookShowcase({ leftImage, ids = [] }) {
  const navigate = useNavigate()
  const items = ids.map(id => productsData.find(p => p.id === id)).filter(Boolean)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black"
      >
        ← Back
      </button>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* LEFT */}
        <div className="rounded-3xl overflow-hidden bg-gray-100 h-">
          <img src={leftImage} alt="Collection" className="w-full h-full object-cover" />
        </div>

        {/* RIGHT */}
        <div className={`grid ${items.length <= 2? 'grid-cols-1' : 'grid-cols-2'} gap-5`}>
          {items.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition p-4 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <span className="text- px-2.5 py-1 bg-[#ff3f6c]/10 text-[#ff3f6c] rounded-full font-semibold">
                  {p.store}
                </span>
                <span className="text- text-gray-500">{p.brand}</span>
              </div>
              <div className="bg-gray-50 rounded-xl h-40 flex items-center justify-center mb-3">
                <img src={p.image} alt={p.title} className="max-h-32 object-contain" />
              </div>
              <h4 className="text- font-medium line-clamp-2 min-h-">{p.title}</h4>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-xl font-bold">₹{p.price}</span>
                {p.mrp && <span className="text-xs text-gray-400 line-through">₹{p.mrp}</span>}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 w-full bg-black text-white text- py-2.5 rounded-full text-center hover:bg-gray-900">
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}