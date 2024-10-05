import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import HomeComponent1 from './components/HomePageComponent1';
import TraditionalSarees from './components/TraditionalSarees';
import TrendingSarees from './components/TrendingSarees';
import TestimonialSlider from './components/Testimonials';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <TestimonialSlider/>
      {/* <HomeComponent1/> */}
      {/* <TraditionalSarees/> */}
      {/* <TrendingSarees/> */}
      <Footer />
    </div>
  );
}

export default App;
