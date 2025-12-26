import './Productcard.css';

interface ProductcardProps {
  image: string;
  title: string;
  price: string;
  onAdd?: () => void; // Optional function for the "+" button
}

function Productcard({ image, title, price, onAdd }: ProductcardProps) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        
        <div className="product-bottom">
          <span className="product-price">{price}</span>
          <button className="add-btn" onClick={onAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productcard;