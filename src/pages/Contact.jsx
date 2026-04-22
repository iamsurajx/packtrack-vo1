export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700">Greater Noida, UP, India</p>
      <p className="mt-2 text-gray-700">Email: hello@packtrack.in</p>
      <p className="mt-2 text-gray-700">Telegram: @packtrackdeals</p>
      <form className="mt-6 space-y-3">
        <input className="w-full border rounded-lg px-4 py-2" placeholder="Aapka naam" />
        <input className="w-full border rounded-lg px-4 py-2" placeholder="Email" />
        <textarea className="w-full border rounded-lg px-4 py-2" rows="4" placeholder="Message"></textarea>
        <button type="button" className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Send</button>
      </form>
    </div>
  )
}