import { instance } from 'api';

export const requestAPI = {
  getProducts(limit: number) {
    return instance.get(`/products?limit=${limit}`);
  },
};
