import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './styles/index.css';
import './styles/reset.scss';
import App from './App';

const defaultState = {
  title: '',
  description: ''
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INPUT_TITLE_CHANGE':
      return {...state, title: action.payload}
      
    case 'INPUT_DESCRIPTION_CHANGE':
      return {...state, description: action.payload}

    default:
      return state;
  }
}

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);