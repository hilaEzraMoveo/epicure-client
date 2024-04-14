import { useEffect, useState } from "react";
import axios from "axios";
import { CardProps } from "../models/cardProp";
import { Chef } from "../models/cardProp";

const baseURL = "http://localhost:3002/api/v1";

export const useFetchAllRestaurants = (page: number, limit: number) => {
  const [restaurants, setrRstaurants] = useState<CardProps[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${baseURL}/restaurants`, {
          params: { page, limit },
        });

        const resultRestaurantsList: CardProps[] = response.data.map(
          (element: {
            title: string;
            image: string;
            chef: Chef;
            rating: number;
            isPopular: boolean;
            status: string;
          }) => ({
            title: element.title,
            image: element.image,
            chefName: element.chef,
            rating: element.rating,
            isPopular: element.isPopular,
            status: element.status,
          })
        );
        console.log("restaurants" + resultRestaurantsList);
        setrRstaurants(resultRestaurantsList);
        // console.log(restaurants);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants };
};
