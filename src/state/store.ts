// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { applyMiddleware, combineReducers, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { ProductsActionsType } from 'state';
import { productsReducer } from 'state/reducers/products/productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionType = ProductsActionsType;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;

// @ts-ignore
window.store = store;
