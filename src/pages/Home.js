import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import EndSection from '../components/Home/EndSection';
import MostWanted from '../components/Home/MostWantedProducts';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <MostWanted />
      <EndSection />
      <Footer />
    </>
  );
};

export default Home;
