import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import About from '../About/About'
import Services from '../Services/Services';
import Qualities from '../Qualities/Qualities';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footers from '../Footer/Footer';

function Home() {
  return (
    <>
    <HeroSection />
    <About/>
    <Qualities/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footers/>
    </>
  );
}

export default Home;