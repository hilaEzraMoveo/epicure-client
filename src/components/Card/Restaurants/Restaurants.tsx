import './Restaurants.scss';
import RestaurantsData from '../../../constants/RestaurantsData';
import Card from '../Card';
import allRestaurantsIcon from '../../../assets/images/restaurants/allRestaurantIcon.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Restaurants = () => {

    return(
        <div className="restaurants-container">
            <p className='restaurants-title'>popular restaurant in epicure:</p>
            <Swiper className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                initialSlide={0}
                spaceBetween={24}
                slidesPerView={1.4}
                navigation
                pagination
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
                    spaceBetween: 24,
                    //slidesPerView: "auto",
                    slidesPerView: 1.4,
                    touchRatio: 0

                  },
                }}
                watchOverflow={true}                  
            >
                <div className="restaurant-cards">
                    {RestaurantsData.map((restaurant, index) => (
                        <SwiperSlide className='swiper-slide' key={index}>
                            <Card title={restaurant.title} image={restaurant.image} 
                            bottomComponent={<div>
                            <h2 className='chef-name'>{restaurant.chefName}</h2>
                            <img className='stars-rating' alt='stars' src={restaurant.rating} />
                            </div>}/>
                        </SwiperSlide>
                    ))}
                </div>    
            </Swiper>

            <div className='all-restaurants'>
              <span className='all-restaurants-text'>All Restaurants</span>
              <img src={allRestaurantsIcon} alt='All Restaurants' className='arrows-icon' />
            </div>
        </div>
    )
}
export default Restaurants;