import React from 'react';

import { useSelector } from 'react-redux';

import s from './header.module.scss';

import { ReturnComponentType } from 'common';
import { AppRootStateType, InitialStateType } from 'state';

export const Header = (): ReturnComponentType => {
  const { isLoading, error } = useSelector<AppRootStateType, InitialStateType>(
    state => state.products,
  );

  return (
    <header className={s.header}>
      <ul>
        <li>
          <span>Каталог</span>
        </li>
        <li>
          <span>Клиентам</span>
        </li>
        <li>
          <span>Контакты</span>
        </li>
      </ul>
      {isLoading && (
        <div className={s.header__loading}>
          <span>Loading...</span>
        </div>
      )}
      {error && <span className={s.header__error}>{error}</span>}
    </header>
  );
};
