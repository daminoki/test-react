import { useSelector } from 'react-redux';

import styles from './PostPreview.module.scss';

const PostPreview = () => {
    const { title, description, headerTitle, isShowHeader, imgUrl, isShowImg } = useSelector(state => state.post.post)

    return (
        <div className={styles['post-preview']}>
            <article className={styles.post}>
                {isShowHeader ? <div className={styles.post__header}>{headerTitle}</div> : ''}
                {isShowImg && imgUrl ? <img src={imgUrl} alt='Img' /> : ''}
                <div className={styles['post__main-info-wrapper']}>
                    <h2 className={styles.post__title}>{title}</h2>
                    <p className={styles.post__description}>{description}</p>
                </div>
            </article>
        </div>
    )
}

export default PostPreview;
