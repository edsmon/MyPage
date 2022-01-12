import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import QuoteSection from '../components/QuoteSection/QuoteSection';
import AboutHomeSection from '../components/AboutHome/AboutHomeSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import IconsSection from '../components/SocialMediaIconsSection/IconsSection';
import Footer from '../components/FooterSection/Footer';

const Home = () => {
    return (
        <>
            <HeroSection />
            <QuoteSection />
            <AboutHomeSection />
            <ServicesSection />
            <IconsSection />
            <Footer />

        </>
    )
}

export default Home;
