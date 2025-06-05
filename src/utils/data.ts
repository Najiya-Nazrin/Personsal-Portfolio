import { Product, Category, Occasion } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Personalized Birthday Gift Box",
    price: 49.99,
    image: "https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Birthday",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Luxury Flower Bouquet",
    price: 89.99,
    image: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Flowers",
    rating: 4.9,
    isBestseller: true
  },
  {
    id: 3,
    name: "Premium Chocolate Assortment",
    price: 34.99,
    image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Chocolates",
    rating: 4.7
  },
  {
    id: 4,
    name: "Handcrafted Celebration Cake",
    price: 54.99,
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Cakes",
    rating: 4.8,
    isBestseller: true
  },
  {
    id: 5,
    name: "Personalized Photo Frame",
    price: 29.99,
    image: "https://images.pexels.com/photos/3819538/pexels-photo-3819538.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Personalized",
    rating: 4.6
  },
  {
    id: 6,
    name: "Artisanal Gift Hamper",
    price: 79.99,
    image: "https://images.pexels.com/photos/6063464/pexels-photo-6063464.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Gift Baskets",
    rating: 4.9,
    isNew: true
  },
  {
    id: 7,
    name: "Luxury Scented Candle Set",
    price: 42.99,
    image: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Home Decor",
    rating: 4.7
  },
  {
    id: 8,
    name: "Gourmet Wine Basket",
    price: 94.99,
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Gift Baskets",
    rating: 4.8,
    isBestseller: true
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Birthday Gifts",
    image: "https://images.pexels.com/photos/1405816/pexels-photo-1405816.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 243
  },
  {
    id: 2,
    name: "Anniversary",
    image: "https://images.pexels.com/photos/3171736/pexels-photo-3171736.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 186
  },
  {
    id: 3,
    name: "Flowers",
    image: "https://images.pexels.com/photos/6334591/pexels-photo-6334591.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 214
  },
  {
    id: 4,
    name: "Personalized",
    image: "https://images.pexels.com/photos/1741346/pexels-photo-1741346.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 167
  },
  {
    id: 5,
    name: "Cakes",
    image: "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 132
  },
  {
    id: 6,
    name: "Gift Baskets",
    image: "https://images.pexels.com/photos/6106697/pexels-photo-6106697.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 98
  }
];

export const occasions: Occasion[] = [
  {
    id: 1,
    name: "Birthday",
    image: "https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Anniversary",
    image: "https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Weddings",
    image: "https://images.pexels.com/photos/1869990/pexels-photo-1869990.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Valentine's Day",
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];