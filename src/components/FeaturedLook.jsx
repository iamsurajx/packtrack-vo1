import productsData from '../data/products.json'

export default function FeaturedLook({
  leftImage = "/look-ethnic.jpg",
  title = "Ethnic Chic Look",
  subtitle = "Complete the look",
  productIds = [1, 7, 12, 14] // products.json se IDs
}) {
  const products = productIds
   .map(id => productsData.find(p => p.id === id))
   .filter(Boolean)

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-5 gap-6">
        {/* LEFT BIG CARD */}
        <div className="lg:col-span-3 relative rounded-3xl overflow-hidden bg-gray-100 min-h-">
          <img
            src={leftImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
            <h2 className="text-white text-4xl font-bold">{title.split(' ')[0]} <span className="font-light italic">{title.split(' ').slice(1).join(' ')}</span></h2>
            <p className="text-white/80 mt-2">{subtitle}</p>
          </div>
        </div>

        {/* RIGHT 4 CARDS */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border shadow-sm p-3 flex flex-col">
              <div className="bg-gray-50 rounded-xl aspect-square flex items-center justify-center p-2 mb-3">
                <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-medium text-sm line-clamp-1">{p.title}</h4>
              <p className="text-xs text-gray-500">{p.brand}</p>
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="font-bold">₹{p.price}</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}