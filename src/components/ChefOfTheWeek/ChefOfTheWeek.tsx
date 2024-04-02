import React from "react";
import "./ChefOfTheWeek.scss";
import ChefOfTheWeekData from "../../constants/ChefOfTheWeekData";
import Card from "../Card/Card";
import allRestaurantsIcon from "../../assets/images/restaurants/allRestaurantIcon.svg";
import { useFetchChefOfTheWeek } from "../../services/chefs.service";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { CardProps } from "../../models/cardProp";

const ChefOfTheWeek = () => {
  const chefOfTheWeek: CardProps | undefined = useFetchChefOfTheWeek();
  console.log("chefOfTheWeek : ", chefOfTheWeek);

  return (
    <div className="chef-container">
      {chefOfTheWeek && (
        <>
          <h3 className="title">Chef of the Week:</h3>
          <div className="image-and-description-container">
            {chefOfTheWeek.image && (
              <div className="chef-image-container">
                <img
                  className="chef-image"
                  src={chefOfTheWeek.image}
                  alt="Chef of the Week"
                />
                <h3 className="chef-name">{chefOfTheWeek.title}</h3>
              </div>
            )}
            {chefOfTheWeek.description && (
              <p className="chef-description">{chefOfTheWeek.description}</p>
            )}
          </div>
          <div className="chef-restaurants-container">
            {chefOfTheWeek.title && (
              <p className="chef-restaurant-name">
                {chefOfTheWeek.title}'s Restaurants
              </p>
            )}
            <Swiper
              className="swiper"
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
                  slidesPerView: 3,
                  touchRatio: 0,
                },
              }}
              watchOverflow={true}
            >
              <div className="chef-restaurants">
                {chefOfTheWeek.restaurants &&
                  chefOfTheWeek.restaurants.map((restaurant, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <Card title={restaurant.title} image={restaurant.image} />
                    </SwiperSlide>
                  ))}
              </div>
            </Swiper>
          </div>
        </>
      )}

      <div className="all-restaurants">
        <span className="all-restaurants-text">All Restaurants</span>
        <img
          src={allRestaurantsIcon}
          alt="All Restaurants"
          className="arrows-icon"
        />
      </div>
    </div>
  );
};

export default ChefOfTheWeek;
