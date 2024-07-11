import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './services';

import { Provider } from 'react-redux';
import { ConfigProvider } from './contexts/ConfigContext';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ConfigProvider>
      <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);

reportWebVitals();
