import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="logo-section">
                <Link to="/"><img src="/images/Star 1.svg" alt="Efiglow logo" /></Link>
                <Link to="/" style={{textDecoration: "none"}}><p>Effiglow</p></Link>
            </div>

            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#101928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
            </div>

            <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/Product" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link to="/Support" onClick={() => setIsMenuOpen(false)}>Support</Link>
                <Link to="/Explore" onClick={() => setIsMenuOpen(false)}>Explore</Link>
                <Link to="/About_us" onClick={() => setIsMenuOpen(false)}>About us</Link>


                <Link to="/" className="mobile-only" onClick={() => setIsMenuOpen(false)}>Search</Link>
                <Link to="/" className="mobile-only" onClick={() => setIsMenuOpen(false)}>Cart</Link>
                <Link to="/" className="mobile-only" onClick={() => setIsMenuOpen(false)}>Profile</Link>
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