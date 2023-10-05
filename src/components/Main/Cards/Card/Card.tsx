import React from 'react';

import { ReturnComponentType } from 'common';

import s from './card.module.scss';

type CardType = {
  title: string;
  price: number;
  images: string[];
};

const Card = ({ title, price, images }: CardType): ReturnComponentType => {
  return (
    <div className={s.card}>
      <span className={s.card__title}>{title}</span>
      <img src={images[0]} alt="avatar" />
      <span>Price: {price}</span>
    </div>
  );
};

export default Card;
