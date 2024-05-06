import React from "react";
import Heading from "../components/common/Heading";

import Gallery from "../components/common/Gallery/Gallery";

import Sliders from "../components/home/Slider";
import EmptyDiv from "../components/home/emtydiv";
 
export default function Room() {
  return (
    <>
      <Heading heading="Gallery" title="Home" subtitle="Gallery" />
      {/* <Rooms /> */}
      <Sliders />
      <Gallery />
      <EmptyDiv />
    </>
  );
}
