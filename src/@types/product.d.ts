export type DataItem = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: number;
};

export type ProductItem = {
  id: number;
  price: number;
  count: number;
  rate: number;
};
