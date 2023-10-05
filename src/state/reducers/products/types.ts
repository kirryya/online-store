import { initialState } from 'constants/products';
import { getProducts, loading, setError } from 'state';

export type InitialStateType = typeof initialState;
export type ProductsActionsType =
  | ReturnType<typeof getProducts>
  | ReturnType<typeof loading>
  | ReturnType<typeof setError>;
