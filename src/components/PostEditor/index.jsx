import { useDispatch } from 'react-redux';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './PostEditor.module.scss';

const PostEditor = () => {
    const [isShowHeader, setIsShowHeader] = useState(false);
    const [imgFieldShown, setImgFieldShown] = useState(false);
    const dispatch = useDispatch();
    const title = useSelector(state => state.title)
    const description = useSelector(state => state.description)
    const headerTitle = useSelector(state => state.headerTitle)

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

    useEffect(() => {
        dispatch({type: 'TOGGLE_HEADER', payload: isShowHeader})
    }, [isShowHeader])

    const handleInputImgChange = (e) => {
        if (e.target.checked) {
            setImgFieldShown(true);
        } else {
            setImgFieldShown(false);
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
                    <input className={styles['switch__toggle']} type="checkbox" onChange={handleInputImgChange} />
                    <span className={styles['switch__round']}></span>
                </label>
                <span>image</span>
            </div>
            {imgFieldShown ? <input type="file" /> : ''}
            <button className={styles['post-editor__save-btn']} type="submit">Save</button>
        </form>
    );
}

export default PostEditor;