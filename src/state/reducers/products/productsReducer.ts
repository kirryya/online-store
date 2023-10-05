import { InitialStateType, ProductsActionsType } from './types';

import {
  GET_PRODUCTS,
  GET_PRODUCT,
  initialState,
  LOADING,
  SET_ERROR,
  SET_LIMIT,
  SET_CURRENT_PAGE,
  SET_TOTAL_PRODUCTS,
} from 'constants/products';

export const productsReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: ProductsActionsType,
): InitialStateType => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };
    case GET_PRODUCT:
      return { ...state, product: action.product };
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_LIMIT:
      return { ...state, limit: action.limit, page: 1 };
    case SET_CURRENT_PAGE:
      return { ...state, page: action.page };
    case SET_TOTAL_PRODUCTS:
      return { ...state, total: action.total };
    default:
      return state;
  }
};
