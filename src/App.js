import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Destination from "./components/Destination";
import Booking from "./components/Booking";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";


function App() {
  return (
    <div>
      <Navbar />
      <Hero  />
      <Service />
      <Destination />
      <Booking />
      <Testimonials />
      <Subscribe />
    </div>
  );
}

export default App;
