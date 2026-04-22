export default function ProductCard({ p }) {
  const shareText = `🔥 ${p.title}\n₹${p.price} (was ₹${p.mrp}, ${p.discount}% OFF)\n${p.store} deal via PackTrack\n\n${p.link}`
  const waLink = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition group">
      <div className="relative">
        {/* IMAGE FIX */}
        <div className="bg-gray-50 w-full aspect-square flex items-center justify-center p-3">
          <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300" />
        </div>
        <span className="absolute top-3 left-3 bg-black/70 text-white text- px-2 py-1 rounded-full">{p.store}</span>
        {p.discount > 0 && (
          <span className="absolute top-3 right-3 bg-green-600 text-white text- px-2 py-1 rounded-full">{p.discount}% OFF</span>
        )}
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500">{p.brand}</div>
        <h3 className="font-medium mt-1 line-clamp-2 h-12">{p.title}</h3>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-bold">₹{p.price}</span>
          <span className="text-sm line-through text-gray-400">₹{p.mrp}</span>
        </div>

        <div className="mt-1 text- text-gray-500">⭐ {p.rating} ({p.reviews})</div>

        <div className="mt-4 flex gap-2">
          <a href={p.link} target="_blank" rel="noreferrer" className="flex-1 bg-indigo-600 text-white text-center py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-700">
            Buy Now
          </a>
          <a href={waLink} target="_blank" rel="noreferrer" className="px-3 py-2.5 border border-green-500 text-green-600 rounded-xl text-sm font-medium hover:bg-green-50">
            Share
          </a>
        </div>
      </div>
    </div>
  )
}