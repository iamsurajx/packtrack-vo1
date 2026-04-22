import { useNavigate } from 'react-router-dom'

export default function CategoryPills({ onSelect }) {
  const navigate = useNavigate()

  const cats = [
    'Mens',
    'Womens',
    'Party Ready',
    'Under 500',
    'Wedding',
    'Summer Collection',
    'Couple Collection',
    'Girls Collection',
    'Myntra Offers',
  ]

  const handleClick = (c) => {
    // Pages jinke liye alag route hai
    const routes = {
      'Couple Collection': '/couple',
      'Party Ready': '/party',
      'Summer Collection': '/summer',
      'Wedding': '/wedding',
      'Girls Collection': '/girls',
      'Myntra Offers': '/myntra'
    }

    if (routes[c]) {
      navigate(routes[c])
    } else {
      // Mens, Womens, Under 500 — ye filter se chalenge
      onSelect(c)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
      {cats.map((c, i) => (
        <button
          key={`${c}-${i}`}
          onClick={() => handleClick(c)}
          className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
        >
          {c}
        </button>
      ))}
    </div>
  )
}