import React from 'react';

import { ReturnComponentType } from 'common';

import s from './footer.module.scss';

import facebook from 'assets/facebook.jpg';
import github from 'assets/github.jpg';
import instagram from 'assets/instagram.jpg';
import twitter from 'assets/twitter.jpg';

export const Footer = (): ReturnComponentType => {
  return (
    <footer className={s.footer}>
      <span className={s.footer__title}>Online Store 2023</span>
      <div className={s.footer__links_block}>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={github} alt="github" />
      </div>
    </footer>
  );
};
