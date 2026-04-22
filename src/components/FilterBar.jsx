export default function FilterBar({ onFilter }) {
  const brands = ['All','Roadster','Indian Garage','Stoneberg','FUBAR','Highlander','Flipkart','Generic']
  const prices = ['All','Under 300','Under 500','Under 1000']

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex gap-3 overflow-x-auto">
      <select onChange={e=>onFilter('brand', e.target.value)} className="border rounded-full px-4 py-2 text-sm bg-white">
        {brands.map(b => <option key={b}>{b}</option>)}
      </select>
      <select onChange={e=>onFilter('price', e.target.value)} className="border rounded-full px-4 py-2 text-sm bg-white">
        {prices.map(p => <option key={p}>{p}</option>)}
      </select>
      <button onClick={()=>onFilter('reset')} className="text-sm text-indigo-600 px-3">Clear</button>
    </div>
  )
}