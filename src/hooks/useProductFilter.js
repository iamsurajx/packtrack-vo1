import { useMemo } from 'react'

export function useProductFilter(products, { query, brand, maxPrice }) {
  return useMemo(() => {
    let list = [...products]
    const q = query.toLowerCase().trim()
    
    if (q) {
      if (q === 'mens' || q === 'men') {
        list = list.filter(p => p.gender === 'men')
      } else if (q === 'womens' || q === 'women' || q === 'girls collection') {
        list = list.filter(p => p.gender === 'women')
      } else if (q === 'summer collection') {
        list = list.filter(p => p.tags?.includes('summer') || p.category === 'summer')
      } else if (q === 'couple collection') {
        list = list.filter(p => p.tags?.includes('couple'))
      } else if (q === 'myntra offers') {
        list = list.filter(p => p.store === 'Myntra')
      } else if (q === 'party ready') {
        list = list.filter(p => p.tags?.includes('party'))
      } else if (q === 'wedding') {
        list = list.filter(p => p.tags?.includes('wedding'))
      } else if (q.startsWith('under')) {
        const num = parseInt(q.replace(/\D/g, ''))
        list = list.filter(p => p.price <= num)
      } else {
        list = list.filter(p => 
          p.title.toLowerCase().includes(q) || 
          p.brand.toLowerCase().includes(q)
        )
      }
    }
    
    if (brand && brand !== 'All') list = list.filter(p => p.brand === brand)
    if (maxPrice) list = list.filter(p => p.price <= maxPrice)
    
    return list
  }, [products, query, brand, maxPrice])
}