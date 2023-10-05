import React from 'react';

import { ReturnComponentType } from 'common';

import s from './card.module.scss';

type CardType = {
  title: string;
  price: number;
};

const Card = ({ title, price }: CardType): ReturnComponentType => {
  return (
    <div className={s.card}>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};

export default Card;
