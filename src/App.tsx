import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";


function App() {
 return (
  <div>
    <Navigation/>

    <main style={{ flex: 1 }}>
      <Hero/>
      <FeaturedSection />
    </main>

    <Footer/>
  </div>
 )
}

export default App;