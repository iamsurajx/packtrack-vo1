// src/pages/Couple.jsx
import LookShowcase from '../components/LookShowcase.jsx'

export default function Couple() {
  return (
    <>
    <LookShowcase
      leftImage="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
      ids={[1, 5, 9, 11]}
    />

    <LookShowcase
      leftImage="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
      ids={[12, 15, 9, 11]}
    />
    </>
  )
}