import React from 'react'
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Hero from './Hero';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';



function Homepage() {
    return ( 
        
        <>
        
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
       
        </>
     );
}

export default Homepage;