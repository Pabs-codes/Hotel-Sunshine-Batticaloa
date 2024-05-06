import React from "react";
import { motion } from "framer-motion";

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
              <motion.p
                className="mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
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
                memorable occasion.
              </motion.p>

              <motion.a
                className="btn btn-primary py-3 px-5 mt-2"
                href="/about"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Explore More
              </motion.a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <motion.div
                  className="col-6 text-end"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <img
                    className="img-fluid w-75"
                    src="../assets/img/four1.png"
                    alt="gallery"
                    style={{ marginTop: "25%", borderRadius: "20%" }}
                  />
                </motion.div>
                <motion.div
                  className="col-6 text-start"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.7 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="../assets/img/four2.png"
                    style={{ borderRadius: "50%" }}
                    alt="fourim"
                  />
                </motion.div>
                <motion.div
                  className="col-6 text-end"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.9 }}
                >
                  <img
                    className="img-fluid w-50"
                    src="../assets/img/four3.png"
                    style={{ borderRadius: "50%" }}
                    alt="fourim"
                  />
                </motion.div>
                <motion.div
                  className="col-6 text-start"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 2.1 }}
                >
                  <img
                    className="img-fluid w-75"
                    src="../assets/img/four4.png"
                    style={{ borderRadius: "20%" }}
                    alt="fourim"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
