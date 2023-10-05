export { store, useTypedDispatch } from './store';
export { getProducts, loading, setError } from 'state/actions/products';
export type { ProductsActionsType } from './reducers/products/types';
export type { TypedDispatch, AppRootStateType } from './store';
export { fetchProducts } from 'state/thunks/products';
export type { InitialStateType } from './reducers/products/types';
