import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LatestNews from './pages/LatestNews';
import NewsDetails from './pages/NewsDetails';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const handleSelectNews = (id) => {
    setSelectedNewsId(id);
    setActivePage('details');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-grow">
        {activePage === 'home' && (
          <Home onSelectNews={handleSelectNews} />
        )}
        {activePage === 'latest' && (
          <LatestNews onSelectNews={handleSelectNews} />
        )}
        {activePage === 'details' && (
          <NewsDetails newsId={selectedNewsId} setActivePage={setActivePage} />
        )}
        {activePage === 'about' && <About />}
        {activePage === 'contact' && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

export default App;