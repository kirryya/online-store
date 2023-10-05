import { instance } from 'api';

export const requestAPI = {
  getProducts(params: { limit: number; page: number; skip: number }) {
    return instance.get(`/products`, { params });
  },
  getProduct(id: number) {
    return instance.get(`/products/${id}`);
  },
};
