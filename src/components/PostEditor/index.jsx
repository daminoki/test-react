import { useState } from 'react';

import styles from './PostEditor.module.scss';

const PostEditor = () => {
    const [titleFieldShown, setTitleFieldShown] = useState(false);
    const [imgFieldShown, setImgFieldShown] = useState(false);

    const handleInputTitleChange = (e) => {
        if (e.target.checked) {
            setTitleFieldShown(true);
        } else {
            setTitleFieldShown(false);
        }
    }

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
            <input className={styles['post-editor__input']} type="text" placeholder="Title" required/>
            <textarea className={styles['post-editor__input']} placeholder="Some post text" required></textarea>
            <div className={styles['switch-wrapper']}>
                <label className={styles['switch']}>
                    <input className={styles['switch__toggle']} type="checkbox" onChange={handleInputTitleChange} />
                    <span className={styles['switch__round']}></span>
                </label>
                <span>header</span>
            </div>
            {titleFieldShown ? <input type="text" className={styles['post-editor__input']} /> : ''}
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