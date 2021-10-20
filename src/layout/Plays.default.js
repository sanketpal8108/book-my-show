import React from 'react';
import PlaysPage from '../Pages/Plays';
import Navbar from "../components/Navbar/navbar.component"
// import HeroSlider from "../components/HeroCarousal/HeroCarousal"


const DefaultLayout = (props) => {

    return (
        <>
            <Navbar />
            <PlaysPage />
        </>

    );
};

export default DefaultLayout;
