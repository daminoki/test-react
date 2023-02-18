import styles from './Snackbar.module.scss';

const Snackbar = ({ isActive, message }) => {
    console.log(isActive, message)
    return ( 
        <div className={`${styles.snackbar} ${isActive ? styles.snackbar_opened : styles.snackbar_closed}`}>{message}</div>
    )
}

export default Snackbar;