import './Navigation.css';

function Navigation() {
    return (
        
        // <h1>Hello World</h1>
        <header>
            <div className="logo-section">
                <img src="/images/Star 1.svg" alt="Efiglow logo" />
                <p>Effiglow</p>
            </div>

            <nav>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Support</a>
                <a href="">Explore</a>
                <a href="">About us</a>
            </nav>

            <div className="tools">
                <a href="#"><img src="/images/Vector.svg" alt="Search icon"/></a>
                <a href="#"><img src="/images/cart.svg" alt="shop icom"/></a>
                <a href="#"><img src="/images/Avatar.svg" alt="profile"/></a>
            </div>

        </header>
    )
}

export default Navigation;