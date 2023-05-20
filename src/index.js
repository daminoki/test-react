import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './styles/index.css';
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);