// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://dummyjson.com/',
});
