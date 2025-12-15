import './FeaturedSection.css';
import Productcard from './Productcard';

// 1. Dummy Data: This simulates a database of products
const products = [
  { id: 1, title: 'Shade Cream', price: '₦58,000', image: '/images/cream.png' },
  { id: 2, title: 'Shade Oil', price: '₦58,000', image: '/images/oil.png' },
  { id: 3, title: 'Shade Cream', price: '₦58,000', image: '/images/cream.png' },
  { id: 4, title: 'Shade Oil', price: '₦58,000', image: '/images/oil.png' },
  { id: 5, title: 'Shade Oil', price: '₦58,000', image: '/images/cream.png' },
  { id: 6, title: 'Shade Cream', price: '₦58,000', image: '/images/oil.png' },
  { id: 7, title: 'Shade Oil', price: '₦58,000', image: '/images/cream.png' },
  { id: 8, title: 'Shade Cream', price: '₦58,000', image: '/images/oil.png' },
];

function FeaturedSection() {
  return (
    <section id="featured" className="featured-section">
      <div className="featured-header">
        <span className="tab active">Featured</span>
        <span className="tab">Collection</span>
        <span className="tab">Clearance</span>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <Productcard 
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onAdd={() => alert(`Added ${product.title} to cart`)}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;