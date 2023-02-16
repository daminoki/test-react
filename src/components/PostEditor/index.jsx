import { useDispatch } from 'react-redux';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './PostEditor.module.scss';

const PostEditor = () => {
    const [isShowHeader, setIsShowHeader] = useState(false);
    const [isShowImg, setIsShowImg] = useState(false);

    const dispatch = useDispatch();
    const title = useSelector(state => state.title)
    const description = useSelector(state => state.description)
    const headerTitle = useSelector(state => state.headerTitle)
    let imgUrl = useSelector(state => state.imgUrl)

    const changeInputTitleField = (e) => {
        dispatch({type: 'INPUT_TITLE_CHANGE', payload: e.target.value})
    }
  
    const changeInputDescriptionField = (e) => {
        dispatch({type: 'INPUT_DESCRIPTION_CHANGE', payload: e.target.value})
    }
  
    const changeInputHeaderField = (e) => {
        dispatch({type: 'INPUT_HEADER_CHANGE', payload: e.target.value})
    }
   
    const toggleHeaderShow = (e) => {
        if (e.target.checked) {
            setIsShowHeader(true);
        } else {
            setIsShowHeader(false);
        }
    }

    const onImageInputChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            imgUrl = URL.createObjectURL(e.target.files[0]);
        }
        dispatch({type: 'INPUT_IMG_CHANGE', payload: imgUrl})
    }

    useEffect(() => {
        dispatch({type: 'TOGGLE_HEADER', payload: isShowHeader})
        dispatch({type: 'TOGGLE_IMG', payload: isShowImg})
    }, [isShowHeader, isShowImg])

    const toggleImgShow = (e) => {
        if (e.target.checked) {
            setIsShowImg(true);
        } else {
            setIsShowImg(false);
        }
    }

    return (
        <form className={styles['post-editor']}>
            <h2 className={styles['post-editor__title']}>Settings</h2>
            <input 
                className={styles['post-editor__input']} 
                type="text" 
                placeholder="Title" 
                value={title}
                onChange={changeInputTitleField}
                required
            />
            <textarea 
                className={styles['post-editor__input']} 
                placeholder="Some post text"
                value={description}
                onChange={changeInputDescriptionField}
                required>
            </textarea>
            <div className={styles['switch-wrapper']}>
                <label className={styles['switch']}>
                    <input className={styles['switch__toggle']} type="checkbox" onChange={toggleHeaderShow} />
                    <span className={styles['switch__round']}></span>
                </label>
                <span>header</span>
            </div>
            {isShowHeader ? <input type="text" className={styles['post-editor__input']} value={headerTitle} onChange={changeInputHeaderField} placeholder="Header" /> : ''}
            <div className={styles['switch-wrapper']}>
                <label className={styles['switch']}>
                    <input className={styles['switch__toggle']} type="checkbox" onChange={toggleImgShow} />
                    <span className={styles['switch__round']}></span>
                </label>
                <span>image</span>
            </div>
            {isShowImg ? <input type="file" onChange={onImageInputChange} /> : ''}
            <button className={styles['post-editor__save-btn']} type="submit">Save</button>
        </form>
    );
}

export default PostEditor;