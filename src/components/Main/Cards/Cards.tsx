import React, { ChangeEvent } from 'react';

import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import s from './cards.module.scss';

import { ReturnComponentType } from 'common';
import { Card } from 'components/Main/Cards/Card/Card';
import { ProductsType } from 'constants/products';
import {
  AppRootStateType,
  setCurrentPageAction,
  setLimitAction,
  useTypedDispatch,
} from 'state';

export const Cards = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const { products } = useSelector<AppRootStateType, ProductsType>(
    state => state.products.products,
  );
  const { total, limit, page } = useSelector<AppRootStateType, any>(
    state => state.products,
  );
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onPageChange = (data: { selected: number }) => {
    dispatch(setCurrentPageAction(data.selected + 1));
  };

  const onLimitChange = ({
    currentTarget: { value }, // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimitAction(+value));
  };

  return (
    <div className={s.cards}>
      <div className={s.cards__content}>
        {products?.map(({ title, id, price, images }) => {
          return <Card key={id} title={title} price={price} images={images} id={id} />;
        })}
      </div>
      <div className={s.cards__pagination}>
        {total / limit > 1 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={onPageChange}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={total ? Math.ceil(total / limit) : 0}
            previousLabel="<"
            forcePage={page ? page - 1 : 0}
            renderOnZeroPageCount={null}
            className={s.cards__paginate}
            activeClassName={s.cards__paginate__active}
          />
        )}
        <select className={s.cards__select} onChange={e => onLimitChange(e)}>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>
    </div>
  );
};
