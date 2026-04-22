import productsData from '../data/products.json'
import ProductGrid from '../components/ProductGrid.jsx'

export default function Girls() {
  const products = productsData.filter(p => p.gender === 'women')
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Girls Collections 👗</h1>
      <p className="text-gray-600 mb-8">Trending for her</p>
      <ProductGrid products={products} search="" />
    </div>
  )
}