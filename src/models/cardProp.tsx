export type CardProps = {
  title: string;
  image: string;
  chefName?: Chef;
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

export type Chef = {
  title: string;
};
