import { createStore } from 'redux';

const persistStore = localStorage.getItem('persistPost');

const defaultState = {
    title: 'Title',
    description: 'Some post text',
    headerTitle: 'Header',
    isShowHeader: false,
    imgUrl: '',
    isShowImg: false
}

const postState = persistStore ? JSON.parse(persistStore) : defaultState
  
const reducer = (state = postState, action) => {
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
        
        case 'TOGGLE_IMG':
            return {...state, isShowImg: action.payload}

        case "SAVE":
            localStorage.setItem('persistPost', JSON.stringify(state))
            return {...state}
        
        default:
            return state;
    }
}
  
const store = createStore(reducer);

export default store;