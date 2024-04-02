import { useEffect, useState } from "react";
import axios from "axios";
import { CardProps } from "../models/cardProp";

const baseURL = "http://localhost:3002/api/v1";

export const useFetchAllDishes = () => {
  const [dishes, setDishes] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get(`${baseURL}/dishes`);
        const resultDishesList: CardProps[] = response.data.map(
          (element: {
            title: string;
            image: string;
            ingredients: string[];
            tags: string[];
            price: number;
            restaurant: string;
            status: string;
          }) => ({
            title: element.title,
            image: element.image,
            restaurant: element.restaurant,
            description: element.ingredients,
            foodIcons: element.tags,
            price: element.price,
            status: element.status,
          })
        );
        // console.log(resultDishesList);
        setDishes(resultDishesList);
        // console.log(dishes);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
  }, []);

  return { dishes };
};
