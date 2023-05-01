/*
 * @Date: 2023-04-26 12:01:53
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-04-26 17:06:27
 * @FilePath: \client\src\index.js
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { BrowserRouter} from 'react-router-dom'
import routes from './routes';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter routes={ routes }>
          { routes }
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

