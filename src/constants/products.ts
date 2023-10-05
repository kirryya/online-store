export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SET_ERROR = 'SET_ERROR';
export const LOADING = 'LOADING';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_TOTAL_PRODUCTS = 'SET_TOTAL_PRODUCTS';

export const initialState = {
  products: {} as ProductsType,
  product: {} as AllProductsType,
  isLoading: false,
  error: '',
  page: 1,
  limit: 10,
  total: 0,
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
