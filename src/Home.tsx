import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";


function Home() {
 return (
  <div>

    <main style={{ flex: 1 }}>
      <Hero/>
      <FeaturedSection />
    </main>

  </div>
 )
}

export default Home;