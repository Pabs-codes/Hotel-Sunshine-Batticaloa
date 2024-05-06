import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommonHeading from "../common/CommonHeading";
import { services } from "../data/Data";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust threshold as needed
    triggerOnce: true, // Ensure animation triggers only once
  });

  useEffect(() => {
    if (inView) {
      // Start looping animations when Services section enters viewport
      const timer = setInterval(() => {
        // Your animation logic here
        // For example, you can use a library like GSAP for looping animations
        // For simplicity, I'm just logging a message here
        console.log("Animating service items");
      }, 1000); // Adjust the interval as needed

      return () => clearInterval(timer); // Cleanup function to stop the loop when component unmounts
    }
  }, [inView]);

  return (
    <>
      <div className="container-xxl py-5" ref={ref}>
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading heading="Sunshine-grand" title="Services" subtitle="Our" />
          </div>
          <div className="row g-4">
            <AnimatePresence>
              {services.map((item, index) => (
                <motion.div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-wow-delay="0.1s"
                >
                  <div className="service-item rounded">
                    <motion.div
                      className="service-icon bg-transparent border rounded p-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                        {item.icon}
                      </div>
                    </motion.div>
                    <h5 className="mb-3">{item.name}</h5>
                    <p className="text-body mb-0">{item.discription}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
