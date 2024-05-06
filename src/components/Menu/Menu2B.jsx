import React from 'react';
import './Menu2.css';

const Menu2B = () => { 
  // Define the menu data
  const menus = [
    {
      title: "DINNER MENU - A",
      items: {
        welcomeDrink: ["Guova + Stawbery"],
        mainDishes: [
          "String Hopper Briyani",
          "Sunshine Grand Special Kottu",
          "Noodles",
          "Fried Rice"
        ],
        salad: ["Egg Salad", "Mix Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        fishPreparation: ["Devilled Fish", "Sunshine Grand Special Indian Fish Masala"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Chocolate Pudding", "Biscuit Pudding"]
      }
    },
    {
      title: "DINNER MENU - B",
      items: {
        welcomeDrink: ["Guova + Stawbery"],
        mainDishes: [
          "String Hopper Briyani",
          "Sunshine Grand Special Kottu",
          "Noodles",
          "Fried Rice"
        ],
        salad: ["Egg Salad", "Mix Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        seafoodPreparation: ["Devilled Prawns", "Sunshine Grand Special Prawns Masala"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato", "Tempered Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Chocolate Pudding", "Biscuit Pudding"]
      }
    },
    {
      title: "DINNER MENU - C",
      items: {
        welcomeDrink: ["Guova + Stawberry"],
        mainDishes: [
          "Fried Rice",
          "Plain Rice",
          "Sunshine Special Pulao Rice",
          "Sunshine Special Jeera Rice",
          "Biryani"
        ],
        salad: ["Egg Salad", "Mixed Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        muttonPreparation: ["Sunshine Special Mutton Curry"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato", "Tempered Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Biscuit Pudding", "Chocolate Pudding"]
      }
    },
    {
      title: "DINNER MENU - D",
      items: {
        welcomeDrink: ["Guova + Stawbery"],
        mainDishes: [
          "String Hopper Briyani",
          "Sunshine Grand Special Kottu",
          "Noodles",
          "Fried Rice"
        ],
        salad: ["Egg Salad", "Mix Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        seafoodPreparation: ["Devilled Fish", "Sunshine Grand Special Indian Fish Masala", "Devilled Prawns", "Sunshine Grand Special Prawns Masala"],
        muttonPreparation: ["Sunshine Special Mutton Curry"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Chocolate Pudding", "Biscuit Pudding"]
      }
    },
    {
      title: "DINNER MENU - E",
      items: {
        welcomeDrink: ["Guova + Stawbery"],
        mainDishes: [
          "String Hopper Briyani",
          "Sunshine Grand Special Kottu",
          "Noodles",
          "Fried Rice"
        ],
        salad: ["Egg Salad", "Mix Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        seafoodPreparation: ["Devilled Fish", "Sunshine Grand Special Indian Fish Masala", "Devilled Prawns", "Sunshine Grand Special Prawns Masala"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Chocolate Pudding", "Biscuit Pudding"]
      }
    },
    {
      title: "DINNER MENU - F",
      items: {
        welcomeDrink: ["Guova + Stawbery"],
        soup: ["Chef Special Soup"],
        mainDishes: [
          "String Hopper Briyani",
          "Sunshine Grand Special Kottu",
          "Noodles",
          "Fried Rice"
        ],
        salad: ["Egg Salad", "Mix Vegetable Salad", "Chicken Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        seafoodPreparation: ["Devilled Fish", "Sunshine Grand Special Indian Fish Masala", "Devilled Prawns", "Sunshine Grand Special Prawns Masala"],
        muttonPreparation: ["Sunshine Special Mutton Curry"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Chocolate Pudding", "Biscuit Pudding", "Assorted Fruits (2 Varieties)"]
      }
    }
  ];

  return (
    <div className="another-menu-container">
      {menus.map((menu, index) => (
        <div key={index} className="another-menu-card2">
          <h2>{menu.title}</h2>
          <div className="another-menu-items">
            {Object.keys(menu.items).map((category, i) => (
              <div key={i}>
                <p><u>{category}</u></p>
                <ul>
                  {menu.items[category].map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu2B;
