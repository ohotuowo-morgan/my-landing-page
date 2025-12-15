import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            {/* The large background text */}
            <div className="footer-bg-text">Effiglow</div>

            {/* The main content sits on top */}
            <div className="footer-content">

                {/* Top Section: Logo & Social Icons */}
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="/images/Star 1.svg" alt="Effiglow Logo" />
                        <span>Effiglow</span>
                    </div>
                    <div className="footer-socials">
                        <a href="https://x.com/Glacier_Morgan"><img src="/images/twitter.png" alt="X" /></a>
                        <a href="https://www.linkedin.com/in/ohotuowo-morgan-851b8530b/"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
                        <a href="https://www.linkedin.com/in/ohotuowo-morgan-851b8530b/"><img src="/images/facebook.png" alt="Facebook" /></a>
                    </div>
                </div>

                {/* Middle Section: Taglines */}
                <div className="footer-tagline">
                    <p>Glow effortlessly</p>
                    <p>Discover skincare that works</p>
                </div>

                {/* Bottom Section: Links & Copyright */}
                <div className="footer-bottom">
                    <nav className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">Product</a>
                        <a href="#">Support</a>
                        <a href="#">Explore</a>
                        <a href="#">About Us</a>
                    </nav>
                    <div className="footer-copyright">
                        © 2065 Effiglow. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;