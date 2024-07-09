import React from 'react';
import '../../App.css';
import HeroSection from '../HomePage Components/HeroSection/HeroSection';
import About from '../HomePage Components/About/About';
import Qualities from '../HomePage Components/Qualities/Qualities';
import Portfolio from '../HomePage Components/Portfolio/Portfolio';
import Contact from '../HomePage Components/Contact/Contact';
import Footers from '../HomePage Components/Footer/Footer';
import Service from '../HomePage Components/Services/Services';

function Home() {
  return (
    <>
    <HeroSection />
    <About/>
    <Qualities/>
    <Service/>
    <Portfolio/>
    <Contact/>
    <Footers/>
    </>
  );
}

export default Home;