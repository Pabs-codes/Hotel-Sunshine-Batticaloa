import React from "react";


// import image1 from "../../../public/assets/img/four1.png"

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">
                  Sunshine Grand Banquet Hall
                </span>
              </h1>
              <p className="mb-4">
                Your go-to Banquet hall in KALLADY , Batticaloa. Our unique
                event venue seamlessly combines elegance with star-class
                services, making it the top choice for weddings and grand
                receptions in Batticaloa . Boasting a picturesque view of the
                city streets, our hall stands out as one of the best event
                venues in Sri Lanka. Our dedicated team of professionals excels
                in planning and managing events, ensuning a personalized theme
                that aligns with your desires. Delight in a culinary journey
                with our extensive buffet offering over 100 dishes, ensuring an
                unforgettable dining experience. Choose Sunshine Grand Banquet
                Hall for your event and let us transform it into a truly
                memorable occasion.
              </p>
              {/* <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid  w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="../assets/img/four1.png"
                    alt="gallery"
                    style={{ marginTop: "25%", borderRadius: "20%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                       alt="fourim"
                    className="img-fluid  w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="../assets/img/four2.png"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                       alt="fourim"
                    className="img-fluid  w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="../assets/img/four3.png"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                       alt="fourim"
                    className="img-fluid  w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="../assets/img/four4.png"
                    style={{ borderRadius: "20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
