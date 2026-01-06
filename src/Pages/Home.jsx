import React from 'react';
import SearchBar from '../components/SearchBar';
import SlideBanner from '../components/SlideBanner';
import Filter from '../components/Filter';
import CategoriesSection from '../components/CategoriesSection';
import Bestselling from '../components/BestSelling';
import Brands from '../components/Brands';
import ModernAgriSolutions from "../components/ModernAgriSolutions";
import CropNutritionGuide from "../components/CropNutritionGuide";
import PopularPicks from "../components/PopularPicks";

import WhyChooseUs from '../components/WhyChooseUs';
import Testimonial from '../components/Testimonial';
import AgriImpact from '../components/AgriImpact';


const Home = () => {
    return (
        <div>
            <SearchBar />
            <SlideBanner />
            <Filter />
            <CategoriesSection />
            <Bestselling />
            <Brands />
            <ModernAgriSolutions />
            <CropNutritionGuide />
            <PopularPicks />
            <WhyChooseUs />
            <Testimonial />
            <AgriImpact />
     
        </div>
    );
};

export default Home;