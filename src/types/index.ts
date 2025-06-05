export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

export interface Occasion {
  id: number;
  name: string;
  image: string;
}