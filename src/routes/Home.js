import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import SkillContent from '../components/SkillContent';
import Certificates from '../components/Certificates';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <PricingCard />
            <SkillContent />
            <Certificates/>
            <Footer />
        </div>
    );
}

export default Home;
