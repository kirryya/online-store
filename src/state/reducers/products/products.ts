import { InitialStateType, ProductsActionsType } from './types';

import { GET_PRODUCTS, initialState, LOADING, SET_ERROR } from 'constants/products';

export const productsReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: ProductsActionsType,
): InitialStateType => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
