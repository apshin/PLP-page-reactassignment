import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';

const ProductSection = ({ filteredAndPaginatedData}) => {
    const renderProductDetails = () => {
        return filteredAndPaginatedData.map((product) => (
            <div key={product.id} className="product-details col-12 col-md-4 col-xl-3">
                <Link to={`/product/${product.id}`} key={product.id}>
                    <div className="product-tile">
                        <div className="image-container">
                            <div className="image-overlay"></div>
                            <img src={product.image_link} alt={product.name} />
                            <FaRegHeart className="nav-icons" />
                        </div>
                        <h2 className="product-name">{product.name}</h2>
                        <p className="category-name">Category: {product.product_type}</p>
                        <p className="brand-name">Brand: {product.brand}</p>
                        <p className="price">Price: {product.price}</p>
                        {product.rating ? (
                            <p>Rating: {product.rating}</p>
                        ) : (
                            <p>Rating: No ratings yet</p>
                        )}
                        <button className="cart-btn text-uppercase">Add to Bag</button>
                    </div>
                </Link>
            </div>
        ));
    };

    return (
        <div className="product-section">
            <div className="row">{renderProductDetails()}</div>
        </div>
    );
};

export default ProductSection;
