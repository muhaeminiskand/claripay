import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServiceCards from './ServiceCards';
import PromoSection from './PromoSection';
import BottomNav from './BottomNav';

const Page = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ServiceCards />
            <PromoSection />
            <BottomNav />
        </div>
    );
};

export default Page;