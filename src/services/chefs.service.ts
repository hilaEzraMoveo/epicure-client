import { useEffect, useState } from "react";
import axios from "axios";
import { CardProps } from "../models/cardProp";

const baseURL = "http://localhost:3002/api/v1";

export const useFetchChefOfTheWeek = () => {
  const [chefOfTheWeek, setChefOfTheWeek] = useState<CardProps>();

  useEffect(() => {
    const fetchChefOfTheWeek = async () => {
      try {
        const response = await axios.get(`${baseURL}/chefs/chefOfTheWeek`);
        const chefData = response.data;
        if (chefData) {
          const chef: CardProps = {
            title: chefData.title,
            image: chefData.image,
            restaurants: chefData.restaurants,
            description: chefData.description,
            status: chefData.status,
          };
          setChefOfTheWeek(chef);
        }
      } catch (error) {
        console.error("Error fetching chef of the week:", error);
      }
    };

    fetchChefOfTheWeek();
  }, []);

  return chefOfTheWeek;
};
