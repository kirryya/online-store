import React from 'react';

import { ReturnComponentType } from 'common';

import s from './header.module.scss';

export const Header = (): ReturnComponentType => {
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
    </header>
  );
};
