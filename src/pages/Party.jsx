import LookShowcase from '../components/LookShowcase.jsx'

export default function Party() {
  return (
    <LookShowcase
      leftImage="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
      ids={[7, 12, 14, 3]} // 👈 products.json ke IDs
    />
  )
}