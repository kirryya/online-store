import { initialState } from 'constants/products';
import {
  getProductsAction,
  getProductAction,
  loading,
  setError,
  setCurrentPageAction,
  setLimitAction,
  setTotalAction,
} from 'state';

export type InitialStateType = typeof initialState;
export type ProductsActionsType =
  | ReturnType<typeof getProductsAction>
  | ReturnType<typeof getProductAction>
  | ReturnType<typeof loading>
  | ReturnType<typeof setError>
  | ReturnType<typeof setLimitAction>
  | ReturnType<typeof setTotalAction>
  | ReturnType<typeof setCurrentPageAction>;
