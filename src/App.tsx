import { Routes, Route } from 'react-router-dom'; // 1. Import Router tools
import Navigation from './components/Marginals/Navigation';
import Footer from './components/Marginals/Footer';
import Home from './Home';
import Product from './Product';
import Support from './Support';
import About from './About';
import Explore from './Explore';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <Navigation />

      <main style={{ flex: 1 }}>
        {/* The Routes decide what to show in the middle */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Support" element={<Support />} />
          <Route path='/Explore' element={<Explore />}/>
          <Route path='/About_us' element={<About />}/>
        </Routes>
        
      </main>

      <Footer />
      
    </div>
  );
}

export default App;