import React from 'react';
import Navigation from '../../../Share/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmetBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import DantalCare from '../DantalCare/DantalCare';
import OurBlogs from '../OurBlogs/OurBlogs';
import Service from '../Service/Service';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import Services from '../Services/Services';
import Tastmonial from '../Tastmonial/Tastmonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <ServiceInfo></ServiceInfo>
            <Services />
            <DantalCare></DantalCare>
            <AppoinmentBanner />
            <Tastmonial></Tastmonial>
            <OurBlogs></OurBlogs>
        </div>
    );
};

export default Home;