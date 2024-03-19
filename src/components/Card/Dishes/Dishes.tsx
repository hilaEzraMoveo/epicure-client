import React from "react";
import "./Dishes.scss";
import Card from "../Card";
import DishesData from "../../../constants/DishesData";
import Ils from "../../../assets/images/dishes/ils.svg";

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

const Dishes = () => {
  return (
    <div className="dishes-container">
      <p className="dishes-title">signature dish of:</p>
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
          500: {
            autoplay: false,
            spaceBetween: 24,
            slidesPerView: 2.5,
            touchRatio: 0,
          },
          900: {
            autoplay: false,
            spaceBetween: 24,
            slidesPerView: 3,
            touchRatio: 0,
          },
        }}
        watchOverflow={true}
      >
        <div className="dishes-cards">
          {DishesData.map((dish, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Card
                title={dish.title}
                image={dish.image}
                customTitleStyles={{ maxWidth: "200px", margin: "0 auto" }}
                bottomComponent={
                  <div className="description-icon-price">
                    {dish.foodIcons &&
                      dish.foodIcons.map((icon, index) => (
                        <img className="icon-image" src={icon} />
                      ))}
                    <h3 className="dish-description">{dish.description}</h3>
                    <div className="card-price">
                      <div className="line"></div>
                      <div className="value-logo-container">
                        <img src={Ils} alt="ILS" className="ils-icon" />
                        <span className="price-value">{dish.price} </span>
                      </div>
                      <div className="line"></div>
                    </div>
                  </div>
                }
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Dishes;
