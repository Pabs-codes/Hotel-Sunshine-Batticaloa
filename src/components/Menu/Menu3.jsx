import './Menu3.css';
import React from 'react';

const Menu3 = () => {
  return ( 

    <div className="menu3-container">
      <div className="menu3-left">
        <div className="menu3-header">
          <h2 className="menu3-title">LUNCH MENU</h2>
        </div>
        <div className="menu3-sections">
          <div className="menu3-section">
            <h3 className="menu3-section-title">Welcome Drink</h3>
            <p className="menu3-item">Guava + Strawberry</p>
          </div>
          <div className="menu3-section">
            <h3 className="menu3-section-title">Fish Preparation (Choice of 1)</h3>
            <p className="menu3-item">Devilled Fish</p>
            <p className="menu3-item">Sunshine Grand Special Indian Fish Masala (Accompanied Vegetables)</p>
          </div>
          <div className="menu3-section">
            <h3 className="menu3-section-title">Salad (Choice of 1)</h3>
            <p className="menu3-item">Egg Salad</p>
            <p className="menu3-item">Mixed Vegetable Salad</p>
          </div>
          <div className="menu3-section">
            <h3 className="menu3-section-title">Main Dishes (Choices of 3)</h3>
            <p className="menu3-item">Fried Rice</p>
            <p className="menu3-item">Plain Rice</p>
            <p className="menu3-item">Sunshine Special Pulao Rice</p>
            <p className="menu3-item">Sunshine Special Jeera Rice</p>
            <p className="menu3-item">Biryani</p>
            <p className="menu3-item">Dhal Fry</p>
            <p className="menu3-item">Hot Garlic Brinjal</p>
            <p className="menu3-item">Devilled Potato</p>
            <p className="menu3-item">Tempered Potato</p>
          </div>
        </div>
      </div>
      <div className="menu3-right">
        <div className="menu3-sections">
          
          <div className="menu3-section">
            <h3 className="menu3-section-title">Chicken Preparation (Choice of 1)</h3>
            <p className="menu3-item">Traditional Chicken Curry</p>
            <p className="menu3-item">Sunshine Grand Special Indian Chicken Masala</p>
            <p className="menu3-item">Devilled Chicken</p>
          </div>
          <div className="menu3-section">
            <h3 className="menu3-section-title">Dessert (Choice of 4)</h3>
            <p className="menu3-item">Ice Cream</p>
            <p className="menu3-item">Fruit Salad</p>
            <p className="menu3-item">Jelly</p>
            <p className="menu3-item">Caramel Pudding</p>
            <p className="menu3-item">Biscuit Pudding</p>
            <p className="menu3-item">Chocolate Pudding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu3;
