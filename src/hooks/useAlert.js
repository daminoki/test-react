import { useState, useEffect } from "react";

export const useSnackbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (isActive === true) {
            setTimeout(() => {
                setIsActive(false);
            }, 3000);
        }
    }, [isActive]);

    const openSnackbar = (msg = 'Something went wrong...') => {
        setMessage(msg)
        setIsActive(true);
    }

    return { isActive, message, openSnackbar }
}