import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/post/postSlice'
import { getPost } from '../features/post/postSlice'

export const store = configureStore({
    reducer: {
        post: postReducer,
    }
})

store.dispatch(getPost())