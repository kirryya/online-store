import React from 'react';

import { ReturnComponentType } from 'common';

import Card from 'components/Main/Cards/Card/Card';
import { AllProductsType } from 'constants/products';

type CardsType = {
  products: AllProductsType[];
};
const Cards = ({ products }: CardsType): ReturnComponentType => {
  return (
    <div>
      {products?.map(({ title, id, price }) => {
        return <Card key={id} title={title} price={price} />;
      })}
    </div>
  );
};

export default Cards;
