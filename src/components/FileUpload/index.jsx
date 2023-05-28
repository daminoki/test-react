import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImg } from '../../features/post/postSlice';

import styles from './FileUpload.module.scss';

function FileUpload() {
    const dispatch = useDispatch()

    const handleDrop = (e) => {
        e.preventDefault()
        const imgPath = e.dataTransfer.files[0]
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            dispatch(setImg(reader.result))
        }, false);

        if (imgPath) {
            reader.readAsDataURL(imgPath);
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragStart = (e) => {
        e.dataTransfer.setData("image/*", e.target.id)
    }

    return (
        <div className={styles['file-upload']} onDrop={handleDrop} onDragOver={handleDragOver}>
            <div className={styles['file-upload__wrapper']} draggable="true" onDragStart={handleDragStart}>
                <p>Drop your image here!</p>
            </div>
        </div>
    )
}

export default FileUpload