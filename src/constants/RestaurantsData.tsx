import {CardProps} from "../models/cardProp";
import ClaroLogo from '../assets/images/restaurants/claro.svg';
import LuminaLogo from '../assets/images/restaurants/lumina.svg';
import TigerLillyLogo from '../assets/images/restaurants/tiger-lily.svg';
import FourStarsLogo from '../assets/images/stars/fourStars.svg';
import ThreeStarsLogo from '../assets/images/stars/threeStars.svg';


const RestaurantsData: CardProps[] = [
    {
        title: "Claro",
        image: ClaroLogo,
        chefName: "Ran Shmueli",
        rating: FourStarsLogo,
    },
    {
        title: "Tiger Lilly",
        image: TigerLillyLogo,
        chefName: "Yanir Green",
        rating: FourStarsLogo,
    },
    {
        title: "Lumina",
        image: LuminaLogo,
        chefName: "Meir Adoni",
        rating: ThreeStarsLogo,
      }
]
export default RestaurantsData;