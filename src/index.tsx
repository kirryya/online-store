import React from 'react';

import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import { App } from 'app';
import { store } from 'state/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
