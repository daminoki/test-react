import { createStore } from 'redux';

const defaultState = {
    title: 'Title',
    description: 'Some post text',
    headerTitle: 'Header',
    isShowHeader: false,
    imgUrl: ''
  }
  
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INPUT_TITLE_CHANGE':
            return {...state, title: action.payload}
        
        case 'INPUT_DESCRIPTION_CHANGE':
            return {...state, description: action.payload}
        
        case 'INPUT_HEADER_CHANGE':
            return {...state, headerTitle: action.payload}
  
        case 'TOGGLE_HEADER':
            return {...state, isShowHeader: action.payload}
        
        case 'INPUT_IMG_CHANGE':
            return {...state, imgUrl: action.payload}
        
        default:
            return state;
    }
}
  
const store = createStore(reducer);

export default store;