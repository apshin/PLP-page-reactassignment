import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Navigation from "../Navigation/Navigation";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    return (
      <>
      <Navigation />
        <div className="product-detail mt-5">
            {product ? (
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6">
                    <img src={product.image_link} alt={product.name} />
                  </div>
                  <div className="col-12 col-md-6">
                    <h2>{product.name}</h2>
                    <p><h4 className="">Description:</h4>{product.description}</p>
                    <p><h5 className="d-inline-block">Category: </h5>{product.product_type}</p>
                    <p><h5 className="d-inline-block">Brand: </h5>{product.brand}</p>
                    <p><h5 className="d-inline-block">Price: </h5>{product.price}</p>
                  </div>
                </div>
              </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <div className="container">
          <div className="row mt-5 align-items-center pdp-details">
            <div className="col-12 col-md-6">
              <img className="w-100" src="https://tartecosmetics.com/dw/image/v2/BJRL_PRD/on/demandware.static/-/Sites-master-catalog-tarte/default/dw0339d41f/2341/ALT/2341-sweet-tarte-frosted-eyeshadow-palette-ALT-2.jpg?sw=2000" alt="product image"/>
            </div>
            <div className="col-12 col-md-6 banner-text">
              <h3 className="text-uppercase text-center">High-performance naturals™</h3>
              <p className="text-center">
                see what high-performance naturals means to us
            </p>
            <h3 className="text-uppercase text-center">always formulated without</h3>
            <p className="text-center">sodium lauryl sulfate, parabens,
                    triclosan, formaldehyde, coal tar, hydroquinone, triclocarban, aluminum salts,
                    benzophenone + related compounds, butoxyethanol, lead + lead acetate, methyl cellosolve +
                    methoxyethanol,
                    mercury + related compounds, insoluble plastic microbeads, toluene, petrolatum + mineral oil,
                    polyacrylamide + acrylamide styrene, xylenes + related compounds, phthalates, ethanolamine,
                    diethanolamine, monoethanolamine, methylchloroisothiazolinone + methylisothiazolinone & chemical
                    sunscreens.</p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Mahalapshin &copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </>
    );
}

export default ProductDetail;
