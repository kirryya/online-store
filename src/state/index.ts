export { store, useTypedDispatch } from './store';
export {
  getProductsAction,
  getProductAction,
  loading,
  setError,
  setCurrentPageAction,
  setLimitAction,
  setTotalAction,
} from 'state/actions/productsActions';
export type { ProductsActionsType } from './reducers/products/types';
export type { TypedDispatch, AppRootStateType } from './store';
export { fetchProducts, fetchProduct } from 'state/thunks/productsThunks';
export type { InitialStateType } from './reducers/products/types';
