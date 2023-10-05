import { instance } from 'api';

export const requestAPI = {
  getProducts() {
    return instance.get(`/products`);
  },
};
