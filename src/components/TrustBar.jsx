export default function TrustBar() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {['Verified Prices','No Extra Cost','Updated Today','Secure Redirect'].map(t => (
          <div key={t} className="bg-white rounded-xl p-3 text-center text-sm border">{t}</div>
        ))}
      </div>
    </section>
  )
}