import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ShowReview from '../../ShowReview/ShowReview';
import Banner from '../Banner/Banner';
import PopularBrand from '../PopularBrand/PopularBrand';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <PopularBrand></PopularBrand>
            <ShowReview></ShowReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;