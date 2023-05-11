import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import CoffeeCards from './CoffeeCards/CoffeeCards';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <CoffeeCards />
            <Gallery />
            
        </>
    );
};

export default Home;