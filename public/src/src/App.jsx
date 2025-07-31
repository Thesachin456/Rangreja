// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LecturesPage from './pages/LecturesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Header siteName="Rangreja" />
      <main className="min-h-screen container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lectures" element={<LecturesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
