import React from 'react';

import { ReturnComponentType } from 'common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

import s from './main.module.scss';

import Cards from 'components/Main/Cards/Cards';
import { ProductsType } from 'constants/products';
import { AppRootStateType } from 'state';

type MainType = {
  isLoading: boolean;
  error: string;
};

const Main = ({ isLoading, error }: MainType): ReturnComponentType => {
  const { products } = useSelector<AppRootStateType, ProductsType>(
    state => state.products.products,
  );

  return (
    <main className={s.main}>
      <span>Продукты</span>
      <div>{isLoading ? <span>Loading...</span> : <Cards products={products} />}</div>
      {error && <span className="error">{error}</span>}
    </main>
  );
};

export default Main;
