import { CardProps } from "./cardProp";

export type Chef = {
    name: string;
    image: string; 
    description: string;
    resteraunts: CardProps[]; 
}