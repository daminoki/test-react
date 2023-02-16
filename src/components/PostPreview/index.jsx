import { useSelector } from 'react-redux';

import styles from './PostPreview.module.scss';

const PostPreview = () => {
    const title = useSelector(state => state.title)
    const description = useSelector(state => state.description)
    const headerTitle = useSelector(state => state.headerTitle)
    const isShowHeader = useSelector(state => state.isShowHeader)

    return (
        <div className={styles['post-preview']}>
            <article className={styles.post}>
                {isShowHeader ? <div className={styles.post__header}>{headerTitle}</div> : ''}
                <div className={styles['post__main-info-wrapper']}>
                    <h2 className={styles.post__title}>{title}</h2>
                    <p className={styles.post__description}>{description}</p>
                </div>
            </article>
        </div>
    )
}

export default PostPreview;
