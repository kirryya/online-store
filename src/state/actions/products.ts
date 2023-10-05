import { GET_PRODUCTS, LOADING, SET_ERROR } from 'constants/products';

export const getProducts = (products: any) => ({ type: GET_PRODUCTS, products }) as const;
export const loading = (isLoading: boolean) => ({ type: LOADING, isLoading }) as const;
export const setError = (error: string) => ({ type: SET_ERROR, error }) as const;
