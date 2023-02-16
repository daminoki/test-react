import { createStore } from 'redux';

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
  
const store = createStore(reducer);

export default store;