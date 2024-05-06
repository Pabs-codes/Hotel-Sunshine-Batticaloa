import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Data";
import SocialIcons from "./SocialIcons";
import logo from "./ImagesP/sunshine.jpg";

const colors = ["orange", "white", "orange"]; // Add more colors as needed

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [textColor, setTextColor] = useState(colors[0]); // Initial color
  

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Cycle through colors in a loop
  useEffect(() => {
    let currentIndex = 0;

    const colorChangeInterval = setInterval(() => {
      setTextColor(colors[currentIndex]);

      currentIndex = (currentIndex + 1) % colors.length;
    }, 500); // Adjust the interval time as needed

    return () => clearInterval(colorChangeInterval);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <Link
              to="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  marginRight: "10px",
                  padding: "10px",
                }}
              />
              <h1
                className="m-0 text-uppercase"
                style={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: textColor,
                  transition: "color 1s ease-in-out",
                }}
              >
                S U N S H I N E - g r a n d
              </h1>
            </Link>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <Link
                to="/"
                className="navbar-brand d-flex align-items-center d-lg-none"
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    marginRight: "10px",
                    padding: "10px",
                  }}
                />
                <h1
                  className="m-0 text-uppercase"
                  style={{
                    fontFamily: "Josefin Sans",
                    fontWeight: 600,
                    fontSize: "0.6rem",
                    color: textColor,
                    transition: "color 1s ease-in-out",
                  }}
                >
                  S U N S H I N E - g r a n d
                </h1>
              </Link>

              <button
                type="button"
                className="navbar-toggler"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-around navbarCollapse"
                    : "collapse navbar-collapse justify-content-around"
                }
              >
                <div className="navbar-nav mr-auto py-0">
                  {navList.map((item, index) => (
                    <div key={index}>
                      {item.subItems ? (
                        <div
                          className="nav-item dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className="nav-link dropdown-toggle">
                            {item.text}
                          </Link>
                          <div
                            className={`dropdown-menu rounded-0 m-0 ${
                              activeDropdown === item.id ? "show" : ""
                            }`}
                          >
                            {item.subItems.map((sub) => (
                              <Link to={sub.path} className="dropdown-item">
                                {sub.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link to={item.path} className="nav-item nav-link">
                          {item.text}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <SocialIcons />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
