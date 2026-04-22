import { useState, useEffect } from 'react'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products }) {
  const [page, setPage] = useState(1)
  const perPage = 24

  // jab filter change ho to page reset
  useEffect(() => {
    setPage(1)
  }, [products])

  const visible = products.slice(0, page * perPage)

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">No products found. Try another filter.</p>
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{products.length} deals found</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {visible.map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {visible.length < products.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setPage(p => p + 1)}
            className="px-8 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-black transition"
          >
            Load More ({products.length - visible.length} more)
          </button>
        </div>
      )}
    </section>
  )
}