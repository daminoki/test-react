import { useSelector } from 'react-redux';

import styles from './PostPreview.module.scss';

const PostPreview = () => {
    const title = useSelector(state => state.title)
    const description = useSelector(state => state.description)

    return (
        <div className={styles['post-preview']}>
            <div className={styles['post-preview__wrapper']}>
                <h2 className={styles['post-preview__title']}>{title ? title : 'Title'}</h2>
                <p className={styles['post-preview__description']}>{description ? description : 'Some post text'}</p>
            </div>
        </div>
    )
}

export default PostPreview;
