import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import styles from './PostEditor.module.scss';

const PostEditor = ({ handleSaveBtn }) => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.title)
    const description = useSelector(state => state.description)
    const headerTitle = useSelector(state => state.headerTitle)
    const isShowHeaderState = useSelector(state => state.isShowHeader)
    const isShowImgState = useSelector(state => state.isShowImg)

    const changeInputTitleField = (e) => {
        dispatch({type: 'INPUT_TITLE_CHANGE', payload: e.target.value})
    }
  
    const changeInputDescriptionField = (e) => {
        dispatch({type: 'INPUT_DESCRIPTION_CHANGE', payload: e.target.value})
    }
  
    const changeInputHeaderField = (e) => {
        dispatch({type: 'INPUT_HEADER_CHANGE', payload: e.target.value})
    }

    const onImageInputChange = (e) => {
        const imgPath = e.target.files[0]
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            dispatch({type: 'INPUT_IMG_CHANGE', payload: reader.result})
        }, false);

        if (imgPath) {
            reader.readAsDataURL(imgPath);
        }     
    }

    const toggleHeaderShow = (e) => {
        if (e.target.checked) {
            dispatch({type: 'TOGGLE_HEADER', payload: true})
        } else {
            dispatch({type: 'TOGGLE_HEADER', payload: false})
        }
    }

    const toggleImgShow = (e) => {
        if (e.target.checked) {
            dispatch({type: 'TOGGLE_IMG', payload: true})
        } else {
            dispatch({type: 'TOGGLE_IMG', payload: false})
        }
    }

    const handleSubmit = () => {
        dispatch({ type: 'SAVE' })
        handleSaveBtn();
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
                    <input className={styles['switch__toggle']} type="checkbox" checked={isShowHeaderState} onChange={toggleHeaderShow} />
                    <span className={styles['switch__round']}></span>
                </label>
                <span>header</span>
            </div>
            {isShowHeaderState ? <input type="text" className={styles['post-editor__input']} value={headerTitle} onChange={changeInputHeaderField} placeholder="Header" /> : ''}
            <div className={styles['switch-wrapper']}>
                <label className={styles['switch']}>
                    <input className={styles['switch__toggle']} type="checkbox" checked={isShowImgState} onChange={toggleImgShow} />
                    <span className={styles['switch__round']}></span>
                </label>
                <span>image</span>
            </div>
            {isShowImgState ? <input type="file" onChange={onImageInputChange} /> : ''}
            <button className={styles['post-editor__save-btn']} type="button" onClick={handleSubmit}>Save</button>
        </form>
    );
}

export default PostEditor;