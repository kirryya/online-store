import React from 'react';

import s from './main.module.scss';

import { ReturnComponentType } from 'common';
import { Cards } from 'components/Main/Cards/Cards';

export const Main = (): ReturnComponentType => {
  return (
    <main className={s.main}>
      <div>
        <Cards />
      </div>
    </main>
  );
};
