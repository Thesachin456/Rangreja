// src/pages/HomePage.jsx

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Welcome to Rangreja 🎓
      </h1>
      <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
        Your one-stop educational platform to access daily updated lectures and learn at your pace. Curated with care for curious minds.
      </p>
      <Link
        to="/lectures"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition-all shadow-md"
      >
        Explore Lectures
      </Link>
    </section>
  );
}
