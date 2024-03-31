import React from 'react'
import './ChefOfTheWeek.scss';
import ChefOfTheWeekData from '../../constants/ChefOfTheWeekData';
import Card from '../Card/Card';
import allRestaurantsIcon from '../../assets/images/restaurants/allRestaurantIcon.svg';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const ChefOfTheWeek = () => {
  return (
    <div className='chef-container'>
        <h3 className='title'>chef of the week:</h3>
        <div className='image-and-description-container'>
            <div className='chef-image-container'>
                <img className='chef-image' src={ChefOfTheWeekData.image} alt='chef-image'></img>
                <h3 className='chef-name'>{ChefOfTheWeekData.name}</h3>
            </div>
            <p className='chef-description'>{ChefOfTheWeekData.description}</p>
        </div>
        <div className='chef-restaurants-container'>
            <p className='chef-restaurant-name'>{ChefOfTheWeekData.name}'s Restaurants</p>
            <Swiper
                className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                initialSlide={0}
                spaceBetween={24}
                slidesPerView={1.4}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 0,
                  modifier: 1,
                  slideShadows: true,
                }}
                breakpoints={{
                  900: {
                    autoplay: false,
                    // spaceBetween: 24,
                    slidesPerView: 3,
                    touchRatio: 0
                  },
                }}
                watchOverflow={true}  
            >
                <div className='chef-restaurants'>
                {ChefOfTheWeekData.resteraunts.map((restaurant, index) => (
                    <SwiperSlide className='swiper-slide' key={index}>
                        <Card title={restaurant.title} image={restaurant.image}></Card>
                    </SwiperSlide>   
                ))}
                </div>
            </Swiper>

            <div className='all-restaurants'>
              <span className='all-restaurants-text'>All Restaurants</span>
              <img src={allRestaurantsIcon} alt='All Restaurants' className='arrows-icon' />
            </div>
        </div>
      </div>

  )
}

export default ChefOfTheWeek
