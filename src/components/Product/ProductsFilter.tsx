import './ProductsFilter.css';

interface ProductFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

function ProductFilter({ activeCategory, onCategoryChange }: ProductFilterProps) {
    const categories = ["Featured", "Collection", "Clearance"]
    return (
        <aside className='filter-sidebar'>
            {/* Categories */}
            <div className='filter-section'>
                <h3 className="filter-title">Categories</h3>
                <ul className='category-list'>
                    {categories.map((cat) => (
                        <li
                            key={cat}
                            className={`category-item ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => onCategoryChange(cat)}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Slider (Visual Only for now) */}
            <div className="filter-section">
                <h3 className="filter-title">Price</h3>

                <div className="price-slider-container">
                    {/* This simulates the slider bar */}
                    <div className="slider-track">
                        <div className="slider-fill"></div>
                        <div className="slider-thumb left"></div>
                        <div className="slider-thumb right"></div>
                    </div>

                    <div className="price-labels">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                    </div>
                </div>
            </div>

        </aside>
    )

}
export default ProductFilter;