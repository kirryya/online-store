import {
  GET_PRODUCTS,
  GET_PRODUCT,
  LOADING,
  SET_ERROR,
  SET_CURRENT_PAGE,
  SET_LIMIT,
  SET_TOTAL_PRODUCTS,
} from 'constants/products';

export const getProductsAction = (products: any) =>
  ({ type: GET_PRODUCTS, products }) as const;
export const getProductAction = (product: any) =>
  ({ type: GET_PRODUCT, product }) as const;
export const loading = (isLoading: boolean) => ({ type: LOADING, isLoading }) as const;
export const setError = (error: string) => ({ type: SET_ERROR, error }) as const;
export const setCurrentPageAction = (page: number) =>
  ({ type: SET_CURRENT_PAGE, page }) as const;
export const setLimitAction = (limit: number) => ({ type: SET_LIMIT, limit }) as const;
export const setTotalAction = (total: number) =>
  ({ type: SET_TOTAL_PRODUCTS, total }) as const;
