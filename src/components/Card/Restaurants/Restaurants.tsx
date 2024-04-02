import { useState } from "react";
import "./Restaurants.scss";
import Card from "../Card";
import allRestaurantsIcon from "../../../assets/images/restaurants/allRestaurantIcon.svg";
import { useFetchAllRestaurants } from "../../../services/restaurant.service";
import Stars from "../../../constants/Stars";
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

const Restaurants = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const [totalPages] = useState(2);
  let { restaurants } = useFetchAllRestaurants(page, limit);
  console.log(restaurants);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="restaurants-container">
      <p className="restaurants-title">popular restaurant in epicure:</p>
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
        <div className="restaurant-cards">
          {restaurants.map((restaurant, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Card
                title={restaurant.title}
                image={restaurant.image}
                bottomComponent={
                  <div>
                    <h2 className="chef-name">
                      {" "}
                      {Array.isArray(restaurant.chefName) &&
                      restaurant.chefName.length > 0
                        ? restaurant.chefName[0]?.title
                        : "Unknown Chef"}
                    </h2>
                    {restaurant.rating && (
                      <>
                        {Stars.map((star, starIndex) => {
                          if (star.number === restaurant.rating) {
                            return (
                              <img
                                className="stars-rating"
                                key={starIndex}
                                src={star.img}
                                alt={`${restaurant.rating} Stars`}
                              />
                            );
                          }
                          return null;
                        })}
                      </>
                    )}
                  </div>
                }
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {/* <div className="pagination-buttons">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div> */}

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
export default Restaurants;
