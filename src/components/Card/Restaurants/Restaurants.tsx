import './Restaurants.scss';
import RestaurantsData from '../../../constants/RestaurantsData';


const Restaurants = () => {

    return(
        <div className="restaurants-container">
            <p className='restaurants-title'>popular restaurant in epicure:</p>
            <div className="restaurant-cards">
                {RestaurantsData.map((restaurant, index) => (
                    <div className='restaurant' key={index}>
                        <img className='restaurant-img' alt='restaurant' src={restaurant.image} />
                        <h3 className='restaurant-name'>{restaurant.title}</h3>
                        <h2 className='chef-name'>{restaurant.chefName}</h2>
                        <img className='stars-img' alt='stars' src={restaurant.rating} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Restaurants;