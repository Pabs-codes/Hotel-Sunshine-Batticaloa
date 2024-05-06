import React from 'react';
import './Menu2.css';
 
const Menu2 = () => {
  // Define the menu data
  const menus = [
    {
      title: "LUNCH MENU - A",
      items: {
        welcomeDrink: ["Guava + Strawberry"],
        mainDishes: [
          "Fried Rice",
          "Plain Rice",
          "Sunshine Special Pulao Rice",
          "Sunshine Special Jeera Rice",
          "Biryani"
        ],
        salad: ["Egg Salad", "Mixed Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        fishPreparation: ["Devilled Fish", "Sunshine Grand Special Indian Fish Masala"],
        accompaniedVegetables: ["Dhal Fry", "Hot Garlic Brinjal", "Devilled Potato", "Tempered Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Biscuit Pudding", "Chocolate Pudding"]
      }
    },
    {
      title: "LUNCH MENU - B",
      items: {
        welcomeDrink: ["Guava + Strawberry"],
        mainDishes: [
          "Fried Rice",
          "Plain Rice",
          "Sunshine Special Pulao Rice",
          "Sunshine Special Jeera Rice",
          "Biryani"
        ],
        salad: ["Egg Salad", "Mixed Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        seafoodPreparation: ["Devilled Prawns", "Sunshine Grand Special Prawns Masala"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato", "Tempered Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Biscuit Pudding", "Chocolate Pudding"]
      }
    },
    {
      title: "LUNCH MENU - C",
      items: {
        welcomeDrink: ["Guava + Strawberry"],
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
      title: "LUNCH MENU - D",
      items: {
        welcomeDrink: ["Guava + Strawberry"],
        mainDishes: [
          "Fried Rice",
          "Plain Rice",
          "Sunshine Special Pulao Rice",
          "Sunshine Special Jeera Rice",
          "Biryani"
        ],
        salad: ["Egg Salad", "Mixed Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        seafoodPreparation: ["Devilled Fish", "Sunshine Grand Special Indian Fish Masala", "Devilled Prawns", "Sunshine Grand Special Prawns Masala"],
        muttonPreparation: ["Sunshine Special Mutton Curry"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Biscuit Pudding", "Chocolate Pudding"]
      }
    },
    {
      title: "LUNCH MENU - E",
      items: {
        welcomeDrink: ["Guava + Strawberry"],
        soup: ["Chef's Special Soup"],
        mainDishes: [
          "Fried Rice",
          "Plain Rice",
          "Sunshine Special Pulao Rice",
          "Sunshine Special Jeera Rice",
          "Biryani"
        ],
        salad: ["Egg Salad", "Mixed Vegetable Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        seafoodPreparation: ["Devilled Fish", "Sunshine Grand Special Indian Fish Masala", "Devilled Prawns", "Sunshine Grand Special Prawns Masala"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Biscuit Pudding", "Chocolate Pudding", "Assorted Fruits (2 Varieties)"]
      }
    },
    
    {
      title: "LUNCH MENU - F",
      items: {
        welcomeDrink: ["Guava + Strawberry"],
        soup: ["Chef's Special Soup"],
        mainDishes: [
          "Fried Rice",
          "Plain Rice",
          "Sunshine Special Pulao Rice",
          "Sunshine Special Jeera Rice",
          "Biryani"
        ],
        salad: ["Egg Salad", "Mixed Vegetable Salad", "Chicken Salad"],
        chickenPreparation: ["Traditional Chicken Curry", "Sunshine Grand Special Indian Chicken Masala", "Devilled Chicken"],
        seafoodPreparation: ["Devilled Fish", "Sunshine Grand Special Indian Fish Masala", "Devilled Prawns", "Sunshine Grand Special Prawns Masala"],
        muttonPreparation: ["Sunshine Special Mutton Curry"],
        accompaniedVegetables: ["Hot Garlic Brinjal", "Devilled Potato"],
        dessert: ["Ice Cream", "Fruit Salad", "Jelly", "Caramel Pudding", "Biscuit Pudding", "Chocolate Pudding", "Assorted Fruits (2 Varieties)"]
      }
    }
    
    
  ];

  return (
    <div className="another-menu-container">
      {menus.map((menu, index) => (
        <div key={index} className="another-menu-card">
          <h2>{menu.title}</h2>
          <div className="another-menu-items">
            
            <p><u>Welcome Drink</u></p>
            <p>{menu.items.welcomeDrink.join(', ')}</p>
            <p><u>Main Dishes - Choices of 3</u></p>
            <ul>
              {menu.items.mainDishes.map((dish, i) => (
                <li key={i}>{dish}</li>
              ))}
            </ul>
            <p><u>Salad - Choice of 1</u></p>
            <ul>
              {menu.items.salad.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p><u>Chicken Preparation - Choice of 1</u></p>
            <ul>
              {menu.items.chickenPreparation.map((preparation, i) => (
                <li key={i}>{preparation}</li>
              ))}
            </ul>
            {menu.items.fishPreparation && (
              <>
                <p><u>Fish Preparation - Choice of 1</u></p>
                <ul>
                  {menu.items.fishPreparation.map((preparation, i) => (
                    <li key={i}>{preparation}</li>
                  ))}
                </ul>
              </>
            )}
            {menu.items.seafoodPreparation && (
              <>
                <p><u>Seafood Preparation - Choice of 1</u></p>
                <ul>
                  {menu.items.seafoodPreparation.map((preparation, i) => (
                    <li key={i}>{preparation}</li>
                  ))}
                </ul>
              </>
            )}
            {menu.items.muttonPreparation && (
              <>
                <p><u>Sunshine Special Mutton Curry</u></p>
                <ul>
                  {menu.items.muttonPreparation.map((preparation, i) => (
                    <li key={i}>{preparation}</li>
                  ))}
                </ul>
              </>
            )}
            <p><u>Accompanied Vegetables</u></p>
            <ul>
              {menu.items.accompaniedVegetables.map((vegetable, i) => (
                <li key={i}>{vegetable}</li>
              ))}
            </ul>
            <p><u>Dessert - Choice of 4</u></p>
            <ul>
              {menu.items.dessert.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu2;
