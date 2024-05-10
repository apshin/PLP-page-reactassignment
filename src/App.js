import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navigation from './Navigation/Navigation';
import './Products.css';
import ProductSection from './components/ProductSection';
import FilterSection from './components/FilterSection';
import ProductDetail from './components/ProductDetail';
import "./index.css";

function App() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [show, setShow] = useState(false);

    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [url]);

    useEffect(() => {
        const filteredProducts = data.filter(product => {
            const categoryFilter = !selectedCategory || product.product_type === selectedCategory;
            const priceFilter = !selectedPriceRange ||
                (selectedPriceRange === 'under10' && parseFloat(product.price) <= 10) ||
                (selectedPriceRange === '10to20' && parseFloat(product.price) > 10 && parseFloat(product.price) <= 20) ||
                (selectedPriceRange === '20to30' && parseFloat(product.price) > 20 && parseFloat(product.price) <= 30) ||
                (selectedPriceRange === 'over30' && parseFloat(product.price) > 30);
            const ratingFilter = !selectedRating ||
                (selectedRating === 'above4' && parseFloat(product.rating) > 4) ||
                (selectedRating === 'below4' && parseFloat(product.rating) <= 4);
            const searchFilter = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return categoryFilter && priceFilter && ratingFilter && searchFilter;
        });
        setFilteredData(filteredProducts);
    }, [data, selectedCategory, selectedRating, selectedPriceRange, searchQuery]);

    const handleSearchQueryChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        filterDataBySearchQuery(query);
    };

    const filterDataBySearchQuery = (query) => {
        const trimmedQuery = query.trim();
        const regex = new RegExp(`\\b${trimmedQuery}\\b`, 'i');

        const filteredProducts = data.filter((product) =>
            regex.test(product.name)
        );
        setFilteredData(filteredProducts);
    };

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value === selectedCategory ? null : event.target.value);
        setShow(false);
    };

    const handlePriceRangeChange = event => {
        setSelectedPriceRange(event.target.value === selectedPriceRange ? null : event.target.value);
        setShow(false);
    };

    const handleRatingChange = event => {
        setSelectedRating(event.target.value === selectedRating ? null : event.target.value);
        setShow(false);
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const paginate = (array, page_number, page_size) => {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    };

    const filteredAndPaginatedData = paginate(filteredData, currentPage, itemsPerPage);
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navigation
                                handleSearchQueryChange={handleSearchQueryChange}
                                searchQuery={searchQuery}
                            />
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-10 mt-4 mb-2">
                                        <FilterSection
                                            show={show}
                                            setShow={setShow}
                                            handleCategoryChange={handleCategoryChange}
                                            handlePriceRangeChange={handlePriceRangeChange}
                                            handleRatingChange={handleRatingChange}
                                            selectedCategory={selectedCategory}
                                            selectedPriceRange={selectedPriceRange}
                                            selectedRating={selectedRating}
                                        />
                                    </div>
                                    <div className="col-10">
                                        <ProductSection
                                            filteredAndPaginatedData={filteredAndPaginatedData}
                                            handlePageClick={handlePageClick}
                                        />
                                        <ReactPaginate
                                            pageCount={pageCount}
                                            pageRangeDisplayed={3}
                                            marginPagesDisplayed={1}
                                            previousLabel={'<'}
                                            nextLabel={'>'}
                                            onPageChange={handlePageClick}
                                            containerClassName={'pagination'}
                                            activeClassName={'active'}
                                            nextClassName={'page-item'}
                                            previousClassName={'page-item'}
                                            nextLinkClassName={'page-link'}
                                            previousLinkClassName={'page-link'}
                                            disabledClassName={'disabled'}
                                            onPageActive
                                        />
                                    </div>
                                </div>
                            </div>
                            <footer className="footer">
                              <div className="container">
                                <span className="text-muted">Mahalapshin &copy; {new Date().getFullYear()}</span>
                              </div>
                            </footer>
                        </>
                    }
                />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
