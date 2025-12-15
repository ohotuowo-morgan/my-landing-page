import './Hero.css';
import Button from './Button';

function Hero() {
    const scrollToProducts = () => {
        const section = document.getElementById('featured');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="hero-section">
            <div className="hero-container">

                <div className="hero-text">
                    <h1>Glow Effortlessly</h1>
                    <p>Discover skincare that works for your unique skin type.</p>

                    <div className="hero-cta">
                        <Button
                            title="Shop Now"
                            variant="primary"
                            onClick={scrollToProducts}
                        />
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/images/skin.png" alt="Skincare model" />
                </div>

            </div>
        </section>
    );
}

export default Hero;