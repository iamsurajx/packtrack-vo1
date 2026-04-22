import { useState } from 'react'
import Hero from '../components/Hero.jsx'
import FeaturedLook from '../components/FeaturedLook.jsx'
import CategoryPills from '../components/CategoryPills.jsx'
import FilterBar from '../components/FilterBar.jsx'
import TrustBar from '../components/TrustBar.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { useProductFilter } from '../hooks/useProductFilter.js'

import productsData from '../data/products.json'

export default function Home({ search, setSearch }) {
  const [products] = useState(productsData)
  const [brand, setBrand] = useState('All')
  const [maxPrice, setMaxPrice] = useState(null)

  const filtered = useProductFilter(products, {
    query: search,
    brand,
    maxPrice
  })

  const handleFilter = (type, val) => {
    if (type === 'brand') setBrand(val)
    if (type === 'price') {
      setMaxPrice(val === 'All'? null : parseInt(val.replace(/\D/g, '')))
    }
    if (type === 'reset') {
      setBrand('All')
      setMaxPrice(null)
      setSearch('')
    }
  }

  return (
    <>
      <Hero />

      <CategoryPills onSelect={(cat) => setSearch(cat.toLowerCase())} />
      <FilterBar onFilter={handleFilter} />
      <TrustBar />

      <ProductGrid products={filtered} search={search} />
    </>
  )
}

// import { useState } from 'react'
// import Hero from '../components/Hero.jsx'
// import CategoryPills from '../components/CategoryPills.jsx'
// import FilterBar from '../components/FilterBar.jsx'
// import TrustBar from '../components/TrustBar.jsx'
// import ProductGrid from '../components/ProductGrid.jsx'
// import { useProductFilter } from '../hooks/useProductFilter.js'
// import FeaturedLook from '../components/FeaturedLook.jsx'

// // 👇 JSON direct import — no fetch, no API
// import productsData from '../data/products.json'

// export default function Home({ search, setSearch }) {
//   const [products] = useState(productsData) // static data
//   const [brand, setBrand] = useState('All')
//   const [maxPrice, setMaxPrice] = useState(null)

//   const filtered = useProductFilter(products, { query: search, brand, maxPrice })

//   const handleFilter = (type, val) => {
//     if (type === 'brand') setBrand(val)
//     if (type === 'price') setMaxPrice(val === 'All' ? null : parseInt(val.replace(/\D/g, '')))
//     if (type === 'reset') { setBrand('All'); setMaxPrice(null); setSearch('') }
//   }

//   return (
//     <>
//       <Hero />
//       <Hero />
//       <FeaturedLook
//         leftImage="/look-ethnic.jpg"
//         title="Ethnic Chic Look"
//         subtitle="Shop the complete look"
//         productIds={[7, 8, 12, 14]} // products.json se 4 IDs
//       />
//       <CategoryPills...
//       <CategoryPills onSelect={(cat) => setSearch(cat.toLowerCase())} />
//       <FilterBar onFilter={handleFilter} />
//       <TrustBar />
//       {products.length === 0 ? (
//         <div className="text-center py-20">Loading products...</div>
//       ) : (
//         <ProductGrid products={filtered} search={search} />
//       )}
//     </>
//   )
// }