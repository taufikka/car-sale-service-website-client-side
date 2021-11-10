import React from 'react';
import Banner from '../Banner/Banner';
import PopularBrand from '../PopularBrand/PopularBrand';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <PopularBrand></PopularBrand>
        </div>
    );
};

export default Home;