import "./About.css"
import AboutCard from "./components/AboutCard"

function About() {
    return (
        <div className="container">
            <div className="header">
                
                <div className="top">
                    <h2>About Us</h2>
                    <p>
                        At Effiglow, we believe skincare shouldn’t be complicated. Our mission is simple: create clean, effective formulas
                        that bring out your natural radiance without the stress, guesswork, or harsh ingredients.
                    </p>
                </div>

                <div className="about-container">
                    <AboutCard />

                    <div className="right-row">
                        <div className="info">
                            <h2>Who We Are</h2>
                            <p>
                                We are a passionate team of skincare experts and beauty enthusiasts dedicated to
                                redefining your daily glow. Founded on the belief that healthy skin should be
                                simple and accessible, Effiglow combines potent ingredients with gentle
                                formulations to help you look and feel your radiant best.
                            </p>
                        </div>

                        <div className="vision">
                            <h2>Vision</h2>
                            <p>
                                Our vision is to create a world where self-care is effortless and effective.
                                We strive to empower you to embrace your natural beauty through curated products
                                that nurture, protect, and enhance your skin's unique needs.
                            </p>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
}

export default About;