import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './styles/index.css';
import './styles/reset.scss';
import App from './App';
import postStore from './store/post'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={postStore}>
        <App />
      </Provider>
  </React.StrictMode>
);