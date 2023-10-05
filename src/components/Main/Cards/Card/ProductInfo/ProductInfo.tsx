import React from 'react';

import { useSelector } from 'react-redux';

import s from './product-info.module.scss';

import { ReturnComponentType } from 'common';
import { AllProductsType } from 'constants/products';
import { AppRootStateType } from 'state';

export const ProductInfo = (): ReturnComponentType => {
  const { brand, category, title, images } = useSelector<
    AppRootStateType,
    AllProductsType
  >(state => state.products.product);

  return (
    <div className={s.product_info}>
      <h4>{title}</h4>
      <img src={images[0]} alt="avatar" />
      <div>Brand: {brand} </div>
      <span>Category: {category} </span>
    </div>
  );
};
