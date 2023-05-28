import { useState } from 'react'

import styles from './FileUpload.module.scss';

function FileUpload() {
    const [file, setFile] = useState(null);
    const[imageUrl, setImageUrl] = useState(""); 

    const handleDrop = (e) => {
        e.preventDefault()
        const imageFile = e.dataTransfer.files[0];

        setFile(imageFile)

        if (file !== null) {
            setImageUrl(URL.createObjectURL(file))
            console.log(imageUrl)
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
            <div draggable="true" onDragStart={handleDragStart}>
                
            </div>
        </div>
    )
}

export default FileUpload