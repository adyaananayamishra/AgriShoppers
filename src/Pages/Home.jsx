import React from 'react';
import SlideBanner from '../components/SlideBanner';
import CategoriesSection from '../components/CategoriesSection';
import Bestselling from '../components/BestSelling';
import Brands from '../components/Brands';
import ModernAgriSolutions from "../components/ModernAgriSolutions";
import CropNutritionGuide from "../components/CropNutritionGuide";
import PopularPicks from "../components/PopularPicks";

import WhyChooseUs from '../components/WhyChooseUs';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <div>
            <SlideBanner />
            <CategoriesSection />
            <Bestselling />
            <Brands />
            <ModernAgriSolutions />
            <CropNutritionGuide />
            <PopularPicks />
            <WhyChooseUs />
            <Testimonial />
        </div>
    );
};

export default Home;