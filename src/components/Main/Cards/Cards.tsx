import React from 'react';

import { ReturnComponentType } from 'common';

import s from './cards.module.scss';

import Card from 'components/Main/Cards/Card/Card';
import { Pagination } from 'components/Main/Cards/Pagintion/Pagination';
import { AllProductsType } from 'constants/products';

type CardsType = {
  products: AllProductsType[];
};
const Cards = ({ products }: CardsType): ReturnComponentType => {
  return (
    <>
      <Pagination />
      <div className={s.cards}>
        {products?.map(({ title, id, price, images }) => {
          return <Card key={id} title={title} price={price} images={images} />;
        })}
      </div>
    </>
  );
};

export default Cards;
