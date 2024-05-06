
import React from "react";
import "./Footer.css";


import inst from "./ImagesP/instagram.png";
import fb from "./ImagesP/facebook.png";
import WA from "./ImagesP/Whatsapp.png";
import YT from "./ImagesP/youtube.png"
function handleClick(event) {
  event.preventDefault();
}

function handleCallFirstNumber() {
  window.location.href = "tel:0654927927";
}

function Footer() {
  return (
    <div className="footer">
      <div className="sb-footer-section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4 className="heads">CONTACT</h4>
            <a href="/employer" className="aclass" onClick={handleClick}>
              <p className="footer-paragraph"> info@sunshinegrand.lk</p>
            </a>
            <a
              className="aclass"
              href="/healthplan"
              onClick={handleCallFirstNumber}
            >
              <p className="footer-paragraph">
                {" "}
                065 4 927 927 <br />  077 0 404 604
              </p>
            </a>
            <a
              href="https://www.google.com/maps?ll=7.717683,81.708103&z=16&t=m&hl=en&gl=LK&mapclient=embed&cid=10770798437643955971"
              className="aclass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-paragraph">
                Opposite kalladi bridge <br />  Batticoloa Sri Lanka
              </p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4 className="heads">SUNSHINE-GRAND</h4>
            <a className="aclass" href="/">
              <p className="footer-paragraph">Home</p>
            </a>
            <a className="aclass" href="/about">
              <p className="footer-paragraph">About</p>
            </a>
            <a className="aclass" href="/services">
              <p className="footer-paragraph">Menu</p>
            </a>
            <a className="aclass" href="/rooms">
              <p className="footer-paragraph">Gallery</p>
            </a>
            <a className="aclass" href="/booking">
              <p className="footer-paragraph">Reservation</p>
            </a>
            <a className="aclass" href="/contact">
              <p className="footer-paragraph">Contact</p>
            </a>

          
          </div>
          <div className="sb-footer-links-div">
            <h4 className="heads">SERVICES</h4>
            <a className="aclass" href="/employer" onClick={handleClick}>
              <p className="footer-paragraph"> Wedding Reception</p>
            </a>
            <a className="aclass" href="/employer" onClick={handleClick}>
              <p className="footer-paragraph"> Birthday Parties </p>
            </a>
            <a className="aclass" href="/employer" onClick={handleClick}>
              <p className="footer-paragraph"> Anniversary Events </p>
            </a>
            <a className="aclass" href="/employer" onClick={handleClick}>
              <p className="footer-paragraph"> Conference & Workshops </p>
            </a>
            <a className="aclass" href="/employer" onClick={handleClick}>
              <p className="footer-paragraph"> Puberty Ceromony </p>
            </a>
            <a className="aclass" href="/employer" onClick={handleClick}>
              <p className="footer-paragraph"> Get-Together </p>
            </a>
          </div>
          {/* <div className="sb-footer-links-div">
            <h4 className="heads">Company</h4>
            <a className="aclass" href="/about">
              <p className="footer-paragraph">About</p>
            </a>
            <a className="aclass" href="/press">
              <p className="footer-paragraph">Press</p>
            </a>
            <a className="aclass" href="/career">
              <p className="footer-paragraph">career</p>
            </a>
            <a className="aclass" href="/contact">
              <p className="footer-paragraph">Contact</p>
            </a>
          </div> */}
          <div className="sb-footer-links-div">
            <h4 className="heads">Find us on</h4>
            <div className="socialmedia">
            <p>
                    <a href="https://www.facebook.com/sunshinegrand.lk" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Facebook" />
                    </a>
                </p>
                <p>
                    <a href="https://wa.me/+94761064604" target="_blank" rel="noopener noreferrer">
                        <img  src={WA} alt="WhatsApp" />
                    </a>
                </p>
                <p>
                    <a href="https://www.instagram.com/sunshinegrandlk" target="_blank" rel="noopener noreferrer">
                        <img src={inst} alt="Instagram" />
                    </a>
                </p>

                <p>
                    <a href="https://www.youtube.com/@sunshinefoodspvtltd5420" target="_blank" rel="noopener noreferrer">
                        <img src={YT} alt="Youtube" />
                    </a>
                </p>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
          <p>© Copyright 2024. Sunshine-Grand | All Rights Reserved. Powered by <a href="https://itmartx.com" target="_blank">ITMARTX</a></p>          </div>
          {/* <div className="sb-footer-below-links">
            <a className="aclass" href="/term">
              <div>
                <p className="footer-paragraph">Term & Conditions</p>
              </div>
            </a>
            <a className="aclass" href="/privacy">
              <div>
                <p className="footer-paragraph">Privacy</p>
              </div>
            </a>
            <a className="aclass" href="/security">
              <div>
                <p className="footer-paragraph">Security</p>
              </div>
            </a>
            <a className="aclass" href="/cookie">
              <div>
                <p className="footer-paragraph">Cookie Declaration</p>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
