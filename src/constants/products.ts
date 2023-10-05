export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_ERROR = 'SET_ERROR';
export const LOADING = 'LOADING';

export const initialState = {
  products: {} as ProductsType,
  isLoading: false,
  error: '',
};

export type ProductsType = {
  total: number;
  products: AllProductsType[];
  skip: number;
  limit: number;
};

export type AllProductsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
