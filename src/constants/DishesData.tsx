import {CardProps} from "../models/cardProp";
import PadKiMaoDish from '../assets/images/dishes/padKiMaoDish.svg';
import GarbanzoFritoDish from '../assets/images/dishes/garbanzoFritoDish.svg';
import SmokedPizzaDish from '../assets/images/dishes/smokedPizza.svg';
import SpicyIcon from '../assets/images/icons/spicy.svg';
import VeganIcon from '../assets/images/icons/vegan.svg';

const DishesData: CardProps[] = [
    {
        title: "Pad Ki Mao",
        image: PadKiMaoDish,
        description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        foodIcons: [SpicyIcon],
        price: 88,
    },
    {
        title: "Garbanzo Frito",
        image: GarbanzoFritoDish,
        description: 'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
        foodIcons: [SpicyIcon],
        price: 98,
    },
    {
        title: "Smoked Pizza",
        image: SmokedPizzaDish,
        description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
        foodIcons: [VeganIcon],
        price: 65,
    },
]
export default DishesData;