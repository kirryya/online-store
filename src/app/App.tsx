import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import s from './app.module.scss';

import { ReturnComponentType } from 'common';
import { Footer, Header, Main } from 'components';
import { AppRootStateType, fetchProducts, useTypedDispatch } from 'state';

export const App = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const { limit, page } = useSelector<AppRootStateType, any>(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, limit, page]);

  return (
    <div className={s.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
