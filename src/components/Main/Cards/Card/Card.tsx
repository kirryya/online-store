import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import s from './card.module.scss';

import { ReturnComponentType, UniverseModalWindow } from 'common';
import { ProductInfo } from 'components/Main/Cards/Card/ProductInfo/ProductInfo';
import { TypedDispatch, fetchProduct } from 'state';

type CardType = {
  title: string;
  price: number;
  id: number;
  images: string[];
};

export const Card = ({ title, price, images, id }: CardType): ReturnComponentType => {
  const dispatch = useDispatch<TypedDispatch>();

  const [isActive, setIsActive] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onNameClickHandle = async (id: number) => {
    const status = await dispatch(fetchProduct(id));

    // @ts-ignore
    // eslint-disable-next-line no-magic-numbers
    if (status >= 200 && status < 400) {
      setIsActive(true);
    }
  };

  return (
    <div className={s.card}>
      <span
        className={s.card__title}
        onClick={() => onNameClickHandle(id)}
        role="button"
        aria-hidden
      >
        {title}
      </span>
      <img src={images[0]} alt="avatar" />
      <span>Price: {price}</span>
      {isActive && (
        <UniverseModalWindow isActive={isActive} setActive={setIsActive}>
          <ProductInfo />
        </UniverseModalWindow>
      )}
    </div>
  );
};
