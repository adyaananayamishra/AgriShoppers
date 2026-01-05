import React from 'react';
import SearchBar from '../components/SearchBar';
import SlideBanner from '../components/SlideBanner';
import CategoriesSection from '../components/CategoriesSection';
import Bestselling from '../components/BestSelling';
import Brands from '../components/Brands';
import ModernAgriSolutions from "../components/ModernAgriSolutions";
import CropNutritionGuide from "../components/CropNutritionGuide";
import PopularPicks from "../components/PopularPicks";

import WhyChooseUs from '../components/WhyChooseUs';
import Testimonial from '../components/Testimonial';
// import DesktopAgriInfo from '../components/DesktopAgriinfo';

const Home = () => {
    return (
        <div>
            <SearchBar />
            <SlideBanner />
            <CategoriesSection />
            <Bestselling />
            <Brands />
            <ModernAgriSolutions />
            <CropNutritionGuide />
            <PopularPicks />
            <WhyChooseUs />
            <Testimonial />
            {/* <DesktopAgriInfo /> */}
        </div>
    );
};

export default Home;