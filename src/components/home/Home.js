import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Service";
import Gallery from "../common/Gallery/Gallery";
import EventList from "./EventList";
import EmptyDiv from "./emtydiv";

export default function Home() {
  return (
    <>
      <Carousel />
      {/* <Book /> */}
      <About />
      <Services />
      <EventList />
      {/* <Rooms /> */}

      {/* <UC/> */}
      {/* <Sliders /> */}
      <Gallery />
      <EmptyDiv/>
      {/* <FB /> */}
      {/* <Teams /> */}
    </>
  );
}
