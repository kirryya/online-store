import { requestAPI } from 'api';
import { getProducts, loading, setError, TypedDispatch } from 'state';

export const fetchProducts = (limit: number) => async (dispatch: TypedDispatch) => {
  try {
    dispatch(loading(true));
    const { data } = await requestAPI.getProducts(limit);

    dispatch(getProducts(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    }
  } finally {
    dispatch(loading(false));
  }
};
