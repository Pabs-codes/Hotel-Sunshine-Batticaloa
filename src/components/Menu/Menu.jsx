import React from 'react';
import './Menu.css';

 
const Menu = () => {
  // Define the menu data
  const menus = [
    {
      title: "LUNCH MENU - 01",
      items: {
        welcomeDrink: [],
        mainCourse: [
          "Biryani Rice",
          "Fried Rice",
          "Sunshine Grand Special Devilled Chicken",
          "Special Gravy",
          "Hot Garlic Brinjal",
          "Potato Devilled",
          "Cutlet",
          "Salad"
        ],
        dessert: [
          "Fruit Salad",
          "Ice Cream"
        ]
      }
    },
    {
      title: "LUNCH MENU - 02",
      items: {
        welcomeDrink: [],
        mainCourse: [
          "Biryani Rice",
          "Fried Rice",
          "Sunshine Grand Special Chicken Masala",
          "Sunshine Grand Special Devilled Prawns",
          "Hot Garlic Brinjal",
          "Potato Devilled",
          "Cutlet",
          "Salad"
        ],
        dessert: [
          "Fruit Salad",
          "Ice Cream"
        ]
      }
    },
    {
      title: "DINNER MENU - 01",
      items: {
        welcomeDrink: [],
        mainCourse: [
          "String Hopper Biryani",
          "Fried Rice",
          "Sunshine Grand Special Devilled Chicken",
          "Special Gravy",
          "Hot Garlic Brinjal",
          "Potato Devilled",
          "Cutlet",
          "Salad"
        ],
        dessert: [
          "Fruit Salad",
          "Ice Cream"
        ]
      }
    },
    {
      title: "DINNER MENU - 02",
      items: {
        welcomeDrink: [],
        mainCourse: [
          "String Hopper Biryani",
          "Fried Rice",
          "Sunshine Grand Special Chicken",
          "Sunshine Grand Special Devilled Prawns",
          "Special Gravy",
          "Hot Garlic Brinjal",
          "Potato Devilled",
          "Fish Cutlet",
          "Salad"
        ],
        dessert: [
          "Fruit Salad",
          "Ice Cream"
        ]
      }
    }
  ];

  return (
    <div className="menu-container">
      {menus.map((menu, index) => (
        <div key={index} className="menu-card">
          <h2>{menu.title}</h2>
          <div className="menu-items">
            <p><u>Welcome Drink</u></p>
            <p><u>Main Course</u></p>
            <ul>
              {menu.items.mainCourse.map((item, i) => (
                <li key={i}>{i + 1}. {item}</li>
              ))}
            </ul>
            <p><u>Dessert</u></p>
            <ul>
              {menu.items.dessert.map((item, i) => (
                <li key={i}>{i + 1}. {item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
