import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            
            <div className="footer-bg-text">Effiglow</div>

            
            <div className="footer-content">

                
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="/images/Star 1.svg" alt="Effiglow Logo" />
                        <span>Effiglow</span>
                    </div>
                    <div className="footer-socials">
                        <a href="https://x.com/Glacier_Morgan"><img src="/images/X.png" alt="X" /></a>
                        <a href="https://www.linkedin.com/in/ohotuowo-morgan-851b8530b/"><img src="/images/link.png" alt="LinkedIn" /></a>
                        <a href="https://www.linkedin.com/in/ohotuowo-morgan-851b8530b/"><img src="/images/facebook.png" alt="Facebook" /></a>
                    </div>
                </div>

                
                <div className="footer-tagline">
                    <p>Glow effortlessly</p>
                    <p>Discover skincare that works</p>
                </div>

                
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