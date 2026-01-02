import "./ExploreCard.css"
import Productcard from "./Product/Productcard";

const items = [
    { id: 1, title: 'Shade Cream', image: "/images/cream.png" },
    { id: 2, title: 'Shade Oil', image: "/images/oil.png" },
    { id: 3, title: 'Shade Cream', image: "/images/cream.png" },
    { id: 4, title: 'Shade Oil', image: "/images/oil.png" },
]

const products = [
    { id: 1, header: '20 min read', title: 'Top 10 ways to save on shopping', image: '/images/cream.png' },
    { id: 2, header: '20 min read', title: "Top 10 ways to save on shopping", image: '/images/oil.png' },
    { id: 3, header: '20 min read', title: 'Top 10 ways to save on shopping', image: '/images/cream.png' },
    { id: 4, header: '20 min read', title: "Top 10 ways to save on shopping", image: '/images/oil.png' }
]

const communitys = [
    { id: 1, title: 'What’s your favorite product of 2025?', image: "/images/cream.png" },
    { id: 2, title: 'What’s your favorite product of 2025?', image: "/images/oil.png" },
    { id: 3, title: 'What’s your favorite product of 2025?', image: "/images/cream.png" },
    { id: 4, title: 'What’s your favorite product of 2025?', image: "/images/oil.png" },
]

function ExploreCard() {
    return (
        <div className="topContainer">
            
            <h2>Gallery</h2>
            <div className="products-grid first">
                {items.map(item => (
                    <Productcard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        className="first-variant"
                    />
                ))}
            </div>
            
            <h2>Blog</h2>
            <div className="products-grid second">
                {products.map(product => (
                    <Productcard 
                        key={product.id}
                        header={product.header}
                        title={product.title}
                        image={product.image}
                        className="second-variant"
                    />
                ))}
            </div>
            
            <h2>Community</h2>
            <div className="products-grid third">
                {communitys.map(community => (
                    <Productcard 
                        key={community.id}
                        title={community.title}
                        image={community.image}
                        className="third-variant"
                    />
                ))}
            </div>
        </div>
    );
}

export default ExploreCard;