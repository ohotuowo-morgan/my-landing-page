import './Productcard.css';

interface ProductcardProps {
  image: string;
  title: string;
  price?: string;
  header?: string;
  onAdd?: () => void; // Optional function for the "+" button
  className?: string;
}

function Productcard({ image, title, price, header, onAdd, className }: ProductcardProps) {
  return (
    // className="product-card"
    <div  className={`product-card ${className ? className : ''}`}>
      <div className='head'>
        <span>{header}</span>
      </div>

      
      <div className="product-image-container" >
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="product-bottom">
          <span className="product-price">{price}</span>
          {onAdd && (
            <button className="add-btn" onClick={onAdd}>
              +
            </button>
          )
          }

        </div>
      </div>
    </div>
  );
}

export default Productcard;