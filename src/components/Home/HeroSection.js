import React from 'react';
import './HeroSection.css';
import heroPhoto from './skatelifeLogoHero.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='centarHero'>
        <img src={heroPhoto} className='heroItem' alt='HeroPhoto' />
        <h1 className='heroTitle'>Descover our Products</h1>
        <Link to='/products' className='btn btn-primary'>
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
