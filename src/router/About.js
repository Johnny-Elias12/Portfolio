import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
import AboutContent2 from '../Components/AboutContent2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="Im a friendly Front-End Developer"/>
      <AboutContent />
      <AboutContent2 />
      <Footer />
    </div>
  )
}

export default About
