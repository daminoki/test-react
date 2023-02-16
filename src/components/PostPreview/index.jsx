import styles from './PostPreview.module.scss';

const PostPreview = () => {
    return (
        <div className={styles['post-preview']}>
            <div className={styles['post-preview__wrapper']}>
                <h2 className={styles['post-preview__title']}>Title</h2>
                <p className={styles['post-preview__description']}>Some post text</p>
            </div>
        </div>
    )
}

export default PostPreview;
