import React from 'react';
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import Hero from '../../components/Hero/Hero';
import AboutUs from '../../components/AboutUs/AboutUs';
import Icons from '../../components/Icons/Icons';
import Restaurants from '../../components/Card/Restaurants/Restaurants';
import Dishes from '../../components/Card/Dishes/Dishes';
import ChefOfTheWeek from '../../components/ChefOfTheWeek/ChefOfTheWeek';



const HomePage = () => {

    return(
        <div>
            <Header/>    
            <Hero/> 
            <Restaurants/> 
            <Dishes/>
            <Icons/> 
            <ChefOfTheWeek/>
            <AboutUs/> 
            <Footer/>       
        </div>
    );

};
export default HomePage;