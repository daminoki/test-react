import { useDispatch, useSelector } from 'react-redux';
import { 
    setTitle, 
    setDescription, 
    setHeaderTitle, 
    toggleHeader,
    setImg,
    toggleImg,
    savePost
} from './postSlice';

import Button from 'react-bootstrap/Button';
import styles from './PostEditor.module.scss';

const PostEditor = ({ handleSaveBtn }) => {
    const dispatch = useDispatch();
    const { title, description, headerTitle, isShowHeader, isShowImg } = useSelector(state => state.post.post)

    const onImageInputChange = (e) => {
        const imgPath = e.target.files[0]
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            dispatch(setImg(reader.result))
        }, false);

        if (imgPath) {
            reader.readAsDataURL(imgPath);
        }
    }

    const handleSubmit = () => {
        dispatch(savePost())
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
                onChange={(e) => {dispatch(setTitle(e.target.value))}}
                required
            />
            <textarea 
                className={styles['post-editor__input']} 
                placeholder="Some post text"
                value={description}
                onChange={(e) => {dispatch(setDescription(e.target.value))}}
                required>
            </textarea>
            <div className={styles['switch-wrapper']}>
                <label className={styles['switch']}>
                    <input className={styles['switch__toggle']} type="checkbox" checked={isShowHeader} onChange={(e) => {dispatch(toggleHeader(e.target.checked))}} />
                    <span className={styles['switch__round']}></span>
                </label>
                <span>header</span>
            </div>
            {isShowHeader ? <input type="text" className={styles['post-editor__input']} value={headerTitle} onChange={(e) => {dispatch(setHeaderTitle(e.target.value))}} placeholder="Header" /> : ''}
            <div className={styles['switch-wrapper']}>
                <label className={styles['switch']}>
                    <input className={styles['switch__toggle']} type="checkbox" checked={isShowImg} onChange={(e) => {dispatch(toggleImg(e.target.checked))}} />
                    <span className={styles['switch__round']}></span>
                </label>
                <span>image</span>
            </div>
            {isShowImg ? <input type="file" accept="image/*" onChange={onImageInputChange} /> : ''}
            <Button variant='primary' style={{width:'fit-content'}} onClick={handleSubmit}>Save</Button>
        </form>
    );
}

export default PostEditor;