import HeroSection from '../../components/herosection/herosection';
import AllCollections from '../../components/collections/allCollections';    
import React from 'react';
import Footer from '../footer/footer';

function home() {
  return (
    <div>
      <HeroSection />
      <AllCollections/>
      <Footer/>
        
    </div>
  )
}

export default home
