import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: {
        title: 'Title',
        description: 'Some post text',
        headerTitle: 'Header',
        isShowHeader: false,
        imgUrl: '',
        isShowImg: false,
    }
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.post.title = action.payload;
        },
        setDescription: (state, action) => {
            state.post.description = action.payload;
        },
        setHeaderTitle: (state, action) => {
            state.post.headerTitle = action.payload;
        },
        toggleHeader: (state, action) => {
            state.post.isShowHeader = action.payload;
        },
        setImg: (state, action) => {
           state.post.imgUrl = action.payload;
        },
        toggleImg: (state, action) => {
            state.post.isShowImg= action.payload;
        },
        getPost: (state) => {
            const persistPost = localStorage.getItem('persistPost');
            if (persistPost) {
                state.post = JSON.parse(persistPost);
            }
        },
        savePost: (state) => {
            const serializedState = JSON.stringify(state.post);
            localStorage.setItem('persistPost', serializedState);
        }
    }
})

export const { setTitle, setDescription, setHeaderTitle, toggleHeader, setImg, toggleImg, getPost, savePost } = postSlice.actions;

export default postSlice.reducer;

