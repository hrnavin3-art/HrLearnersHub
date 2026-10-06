import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Steps from "./components/Steps";
import Mentor from "./components/Mentor";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import MentorSection from "./components/Mentorcard";
import CoverflowCarousel from "./components/Shorts";

const App = () => {
  return (
    <div>

      <div id="home">
        <Hero />
      </div>

      <div id="company">
        <About />
      </div>

      {/* DON'T WRAP IN SECTION */}
      <div id="feature">
        <Steps />
      </div>
      <div>
        <Mentor/>
      </div>
      <div>
        <CoverflowCarousel/>
      </div>
      

      <div id="pricing">
        <Pricing/>
      </div>


      <div id="career">
        <Footer />
      </div>

      <Header />

    </div>
  );
};

export default App;