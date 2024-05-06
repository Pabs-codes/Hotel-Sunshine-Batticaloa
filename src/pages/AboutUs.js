import React from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/AboutC";

import EmptyDiv from "../components/home/emtydiv";


export default function AboutUs() {
  return (
    <>
      <Heading heading="About" title="Home" subtitle="About" />
      <About />
    
    <EmptyDiv/>
    </>
  );
}
