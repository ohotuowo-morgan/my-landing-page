import { useState } from 'react'; 
import './Navigation.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="logo-section">
                <img src="/images/Star 1.svg" alt="Efiglow logo" />
                <p>Effiglow</p>
            </div>

            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#101928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
            </div>

            <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#" onClick={() => setIsMenuOpen(false)}>Products</a>
                <a href="#" onClick={() => setIsMenuOpen(false)}>Support</a>
                <a href="#" onClick={() => setIsMenuOpen(false)}>Explore</a>
                <a href="#" onClick={() => setIsMenuOpen(false)}>About us</a>


                <a href="#" className="mobile-only" onClick={() => setIsMenuOpen(false)}>Search</a>
                <a href="#" className="mobile-only" onClick={() => setIsMenuOpen(false)}>Cart</a>
                <a href="#" className="mobile-only" onClick={() => setIsMenuOpen(false)}>Profile</a>
            </nav>

            <div className="tools ">
                <a href="#"><img src="/images/search.png" alt="Search icon" /></a>
                <a href="#"><img src="/images/cart.svg" alt="shop icon" /></a>
                <a href="#"><img src="/images/Avatar.svg" alt="profile" /></a>
            </div>
        </header>
    )
}

export default Navigation;