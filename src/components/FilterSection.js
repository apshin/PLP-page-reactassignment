import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { IoFilterOutline } from 'react-icons/io5';

const FilterSection = ({ show, setShow, handleCategoryChange, handlePriceRangeChange, handleRatingChange, selectedCategory, selectedPriceRange, selectedRating }) => {
    return (
        <div>
            <Button className="filter-btn" variant="primary" onClick={() => setShow(true)}>
                Filter<IoFilterOutline />
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="filter-section">
                  <div className="category-filter">
                    <h3 className="filters">Category</h3>
                      <input type="radio" id="lipstick" name="category" value="lipstick" checked={selectedCategory === 'lipstick'} onChange={handleCategoryChange} />
                      <label  className="radio-label" htmlFor="lipstick"><span className="radio-span">Lipstick</span></label>

                      <input type="radio" id="blush" name="category" value="blush" onChange={handleCategoryChange} checked={selectedCategory === 'blush'} />
                      <label  className="radio-label" htmlFor="blush"><span className="radio-span">Blush</span></label>

                      <input type="radio" id="eyeliner" name="category" value="eyeliner" onChange={handleCategoryChange} checked={selectedCategory === 'eyeliner'} />
                      <label  className="radio-label" htmlFor="eyeliner"><span className="radio-span">Eyeliner</span></label>

                      <input type="radio" id="foundation" name="category" value="foundation" onChange={handleCategoryChange} checked={selectedCategory === 'foundation'} />
                      <label  className="radio-label" htmlFor="foundation"><span className="radio-span">Foundation</span></label>

                      <input type="radio" id="mascara" name="category" value="mascara" checked={selectedCategory === 'mascara'} onChange={handleCategoryChange} />
                      <label  className="radio-label" htmlFor="mascara"><span className="radio-span">Mascara</span></label>

                      <input type="radio" id="eyeshadow" name="category" value="eyeshadow" checked={selectedCategory === 'eyeshadow'} onChange={handleCategoryChange} />
                      <label  className="radio-label" htmlFor="eyeshadow"><span className="radio-span">Eyeshadow</span></label>

                      <input type="radio" id="all" name="category" value="" onChange={handleCategoryChange}/>
                      <label  className="radio-label" htmlFor="all"><span className="radio-span">All</span></label>
                  </div>
                  <div className="price-filter">
                    <h3 className="filters">Price</h3>
                    <input type="radio" id="under10" name="priceRange" value="under10" onChange={handlePriceRangeChange} />
                    <label className="radio-label" htmlFor="under10"><span className="radio-span">Under $10</span></label>

                    <input type="radio" id="10to20" name="priceRange" value="10to20" onChange={handlePriceRangeChange} />
                    <label className="radio-label" htmlFor="10to20"><span className="radio-span">$10 - $20</span></label>

                    <input type="radio" id="20to30" name="priceRange" value="20to30" onChange={handlePriceRangeChange} />
                    <label className="radio-label" htmlFor="20to30"><span className="radio-span">$20 - $30</span></label>

                    <input type="radio" id="over30" name="priceRange" value="over30" onChange={handlePriceRangeChange} />
                    <label className="radio-label" htmlFor="over30"><span className="radio-span">Over $30</span></label>
                  </div>
                  <div className="rating-filter">
                    <h3 className="filters">Rating</h3>
                    <label  className="radio-label">
                        <input type="radio" name="rating" value="above4" checked={selectedRating === 'above4'} onChange={handleRatingChange} />
                        <span className="radio-span">High Rating</span>
                    </label>
                    <label  className="radio-label">
                        <input type="radio" name="rating" value="below4" checked={selectedRating === 'below4'} onChange={handleRatingChange} />
                        <span className="radio-span">Low Rating</span>
                    </label>
                  </div>
                </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FilterSection;
