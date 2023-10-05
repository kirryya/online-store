import React, { useEffect } from 'react';

import { ReturnComponentType } from 'common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

import s from 'app/app.module.scss';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import Main from 'components/Main/Main';
import {
  AppRootStateType,
  fetchProducts,
  InitialStateType,
  useTypedDispatch,
} from 'state';

export const App = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const { isLoading, error } = useSelector<AppRootStateType, InitialStateType>(
    state => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={s.app}>
      <Header />
      <Main error={error} isLoading={isLoading} />
      <Footer />
    </div>
  );
};
