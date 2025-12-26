import { useState } from 'react';
import './Product.css';

// Product Page components
import ProductsHero from "./components/Product/ProductsHero"
import ProductsFilter from "./components/Product/ProductsFilter"
import Productcard from './components/Product/Productcard';
import Pagination from './components/Product/Pagination';

const products = [
    { id: 1, title: 'Shade Cream', price: '₦58,000', image: '/images/cream.png' },
    { id: 2, title: 'Shade Oil', price: '₦58,000', image: '/images/oil.png' },
    { id: 3, title: 'Shade Cream', price: '₦58,000', image: '/images/cream.png' },
    { id: 4, title: 'Shade Oil', price: '₦58,000', image: '/images/oil.png' },
    { id: 5, title: 'Shade Oil', price: '₦58,000', image: '/images/cream.png' },
    { id: 6, title: 'Shade Cream', price: '₦58,000', image: '/images/oil.png' },
    // { id: 7, title: 'Shade Oil', price: '₦58,000', image: '/images/cream.png' },
    // { id: 8, title: 'Shade Cream', price: '₦58,000', image: '/images/oil.png' },
];

function Product() {
    const [activeCategory, setActiveCategory] = useState("Featured");
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <main style={{ flex: 1 }}>

                <div className='product-page'>
                    <ProductsHero />

                    <div className='shop-container'>
                        <aside className='shop-sidebar'>
                            <ProductsFilter
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                            />
                        </aside>

                        <main className='shop-content'>
                            <div className='shop-grid'>
                                {products.map(product => (
                                    <Productcard
                                        key={product.id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                    />
                                ))}

                            </div>

                            {/* The New Pagination Component at the bottom */}
                            <div className='pagination-content'>
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={5} // Hardcoded for now
                                    onPageChange={setCurrentPage}
                                />
                            </div>

                        </main>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Product;