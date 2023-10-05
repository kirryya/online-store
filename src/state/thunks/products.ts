import { requestAPI } from 'api';
import { getProducts, loading, setError, TypedDispatch } from 'state';

export const fetchProducts = () => async (dispatch: TypedDispatch) => {
  try {
    dispatch(loading(true));
    const { data } = await requestAPI.getProducts();

    dispatch(getProducts(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    }
  } finally {
    dispatch(loading(false));
  }
};
