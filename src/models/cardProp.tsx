export type CardProps = {
  title: string;
  image: string;
  chefName?: string;
  restaurant?: string;
  restaurants?: Restaurant[];
  description?: string;
  foodIcons?: string[];
  price?: number;
  rating?: number;
  isPopular?: boolean;
  status?: string;
};

export type Restaurant = {
  title: string;
  image: string;
};
