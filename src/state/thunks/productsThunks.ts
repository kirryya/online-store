import { requestAPI } from 'api';
import {
  getProductsAction,
  getProductAction,
  loading,
  setError,
  TypedDispatch,
  AppRootStateType,
  setTotalAction,
} from 'state';

export const fetchProducts =
  () => async (dispatch: TypedDispatch, getState: () => AppRootStateType) => {
    const { page, limit } = getState().products;
    const params = { limit, page, skip: (page - 1) * limit };

    try {
      dispatch(loading(true));
      const { data } = await requestAPI.getProducts(params);

      dispatch(getProductsAction(data));
      dispatch(setTotalAction(data.total));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      dispatch(loading(false));
    }
  };

export const fetchProduct = (id: number) => async (dispatch: TypedDispatch) => {
  try {
    dispatch(loading(true));
    const res = await requestAPI.getProduct(id);

    dispatch(getProductAction(res?.data));

    return res?.status;
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    }
  } finally {
    dispatch(loading(false));
  }
};
